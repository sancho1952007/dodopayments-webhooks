import currencies from "./globals/currencies";

/**
 * Webhook payload sent when a refund is created or updated.
 */
type RefundWebhook = {
    /**
     * The refunded amount in the smallest currency unit (e.g. cents).
     * Optional.
     */
    amount?: number;

    /**
     * The unique identifier of the business issuing the refund.
     */
    business_id: string;

    /**
     * The timestamp of when the refund was created in UTC (ISO 8601 format).
     */
    created_at: string;

    /**
     * The currency of the refund, represented as an ISO 4217 currency code.
     * Optional.
     */
    currency?: currencies;

    /**
     * If true, the refund is a partial refund.
     */
    is_partial: boolean;

    /**
     * The unique identifier of the payment associated with the refund.
     */
    payment_id: string;

    /**
     * The reason provided for the refund, if any.
     * Optional.
     */
    reason?: string;

    /**
     * The unique identifier of the refund.
     */
    refund_id: string;

    /**
     * The current status of the refund.
     * One of: "succeeded", "failed", "pending", "review".
     */
    status: "succeeded" | "failed" | "pending" | "review";
};

export default RefundWebhook;