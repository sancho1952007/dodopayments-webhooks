import { Webhook } from "standardwebhooks";
import HandleFunctionReturnType from "./types/handle-return-type";

class CustomError extends Error {
    constructor({ code = 'Dodopayerror', message }: { code?: string, message: string }) {
        super(message);
        this.name = code;
    }
}

export class DodopaymentsHandler {
    signing_key: string;
    webhook: Webhook;

    constructor(e: {
        signing_key: string
    }) {
        this.signing_key = e.signing_key;
        this.webhook = new Webhook(e.signing_key);
    }

    async handle({
        body,
        headers,
    }: {
        body: string | { [key: string | number | symbol]: any },
        headers: {
            // Select the required headers for better TS experience
            "webhook-id"?: string,
            "webhook-signature"?: string,
            "webhook-timestamp"?: string,
            // This is to prevent TS from showing a warning of other headers that are present in the request
            [key: string | number | symbol]: any
        }
    }): Promise<HandleFunctionReturnType> {
        // Throw an error if the important fields are missing
        if (!body) {
            throw new CustomError({ code: 'dodopay_request_missing_data', message: 'Missing body field!' });
        }
        if (!headers) {
            throw new CustomError({ code: 'dodopay_request_missing_data', message: 'Missing headers field!' });
        }

        if (!this.signing_key) {
            throw new CustomError({ code: 'dodopay_request_missing_data', message: 'Signing Key Is Missing!' });
        }

        // Throw an `dodopay_missing_headers` error if the important headers are missing
        if (!headers["webhook-id"] || !headers["webhook-signature"] || !headers["webhook-timestamp"]) {
            throw new CustomError({ code: 'dodopay_webhook_missing_headers', message: 'Missing key headers in the request!' });
        }

        // Store the parsed body and stringified body for later use
        let
            stringifiedBody: string | null,
            parsedBody: { [keyof: string]: string } | null;

        // If the body data is in stringified form, store it's already stringified value and store it's parsed value too
        if (typeof body === 'string') {
            stringifiedBody = body;
            try {
                parsedBody = JSON.parse(stringifiedBody);
            } catch (err) {
                throw new Error('Failed to parse body!');
            }
            // If the body data is in object (i.e. parsed) form, store it's already parsed value and store it's stringified value too
        } else {
            parsedBody = body;
            try {
                stringifiedBody = JSON.stringify(parsedBody);
            } catch (err) {
                throw new Error('Failed to stringify body!');
            }
        }

        try {
            // Verify the request to make sure that it's data can be trusted
            const ParsedFinalData = await this.webhook.verify(stringifiedBody, {
                "webhook-id": headers["webhook-id"],
                "webhook-signature": headers["webhook-signature"],
                "webhook-timestamp": headers["webhook-timestamp"]
            });

            return ParsedFinalData as HandleFunctionReturnType;
        } catch (e) {
            if (e.name === 'WebhookVerificationError') {
                throw new CustomError({ code: 'dodopay_invalid_signature', message: 'Invalid signature!' });
            }
            else {
                throw e;
            }
        }
    }
};