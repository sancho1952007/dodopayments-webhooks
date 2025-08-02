/**
 * Webhook payload sent when a dispute is created or updated.
 */
type DisputeWebhook = {
    /**
     * The amount involved in the dispute, represented as a string to accommodate precision.
     */
    amount: string;

    /**
     * The unique identifier of the business involved in the dispute.
     */
    business_id: string;

    /**
     * The timestamp of when the dispute was created, in UTC (ISO 8601 format).
     */
    created_at: string;

    /**
     * The currency of the disputed amount, represented as an ISO 4217 currency code.
     */
    currency: string;

    /**
     * The unique identifier of the dispute.
     */
    dispute_id: string;

    /**
     * The current stage of the dispute process.
     * One of: "pre_dispute", "dispute", "pre_arbitration".
     */
    dispute_stage: "pre_dispute" | "dispute" | "pre_arbitration";

    /**
     * The current status of the dispute.
     * One of:
     * - "dispute_opened"
     * - "dispute_expired"
     * - "dispute_accepted"
     * - "dispute_cancelled"
     * - "dispute_challenged"
     * - "dispute_won"
     * - "dispute_lost"
     */
    dispute_status:
    | "dispute_opened"
    | "dispute_expired"
    | "dispute_accepted"
    | "dispute_cancelled"
    | "dispute_challenged"
    | "dispute_won"
    | "dispute_lost";

    /**
     * The unique identifier of the payment associated with the dispute.
     */
    payment_id: string;

    /**
     * Optional remarks or additional context related to the dispute.
     */
    remarks?: string;
};

export default DisputeWebhook;