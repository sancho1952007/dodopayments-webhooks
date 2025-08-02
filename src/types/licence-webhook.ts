/**
 * Webhook payload sent when a license key is created or updated.
 */
type LicenceWebhook = {
    /**
     * The maximum number of activations allowed for this license key.
     * Example: 5
     */
    activations_limit?: number;

    /**
     * The unique identifier of the business associated with the license key.
     */
    business_id: string;

    /**
     * The timestamp indicating when the license key was created, in UTC.
     * Format: ISO 8601. Example: "2024-01-01T00:00:00Z"
     */
    created_at: string;

    /**
     * The unique identifier of the customer associated with the license key.
     * Example: "cus_123"
     */
    customer_id: string;

    /**
     * The timestamp indicating when the license key expires, in UTC.
     * Format: ISO 8601. Example: "2024-12-31T23:59:59Z"
     */
    expires_at?: string;

    /**
     * The unique identifier of the license key.
     * Example: "lic_123"
     */
    id: string;

    /**
     * The current number of instances activated for this license key.
     */
    instances_count: number;

    /**
     * The license key string.
     */
    key: string;

    /**
     * The unique identifier of the payment associated with the license key.
     */
    payment_id: string;

    /**
     * The unique identifier of the product associated with the license key.
     */
    product_id: string;

    /**
     * The current status of the license key.
     * One of: "active", "expired", "disabled"
     */
    status: "active" | "expired" | "disabled";

    /**
     * The unique identifier of the subscription associated with the license key, if any.
     */
    subscription_id?: string;
};

export default LicenceWebhook;