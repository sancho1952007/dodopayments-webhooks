import countries from "./globals/countries";
import currencies from "./globals/currencies";

/**
 * Webhook payload representing subscription details.
 */
type SubscriptionWebhook = {
    /**
     * Addons associated with this subscription.
     */
    addons: {
        /** Identifier for the addon. */
        addon_id: string;
        /** Quantity of this addon. */
        quantity: number;
    }[];

    /**
     * Billing address details for payments.
     */
    billing: {
        city: string;
        /** Country code (ISO2) for the billing address. */
        country: countries;
        state: string;
        street: string;
        zipcode: string;
    };

    /**
     * Indicates if the subscription will cancel at the next billing date.
     */
    cancel_at_next_billing_date: boolean;

    /**
     * Timestamp when the subscription was cancelled, if applicable (ISO 8601).
     */
    cancelled_at?: string;

    /**
     * Timestamp when the subscription was created (ISO 8601).
     */
    created_at: string;

    /**
     * Currency used for the subscription payments (ISO 4217).
     */
    currency: currencies;

    /**
     * Customer details associated with the subscription.
     */
    customer: {
        /** Unique identifier of the customer. */
        customer_id: string;
        /** Customer's email address. */
        email: string;
        /** Customer's full name. */
        name: string;
    };

    /**
     * Discount ID if a discount is applied.
     */
    discount_id?: string;

    /**
     * Additional custom data associated with the subscription.
     */
    metadata: { [key: string]: string };

    /**
     * Timestamp of the next scheduled billing (ISO 8601).
     */
    next_billing_date: string;

    /**
     * Indicates if the subscription is on-demand.
     */
    on_demand: boolean;

    /**
     * Number of payment frequency intervals.
     */
    payment_frequency_count: number;

    /**
     * Time interval for payment frequency.
     * Available values: "Day", "Week", "Month", "Year".
     */
    payment_frequency_interval: "Day" | "Week" | "Month" | "Year";

    /**
     * Timestamp of the last payment (ISO 8601).
     */
    previous_billing_date: string;

    /**
     * Identifier of the product associated with this subscription.
     */
    product_id: string;

    /**
     * Number of units/items included in the subscription.
     */
    quantity: number;

    /**
     * Amount charged before tax for each recurring payment in the smallest currency unit (e.g. cents).
     */
    recurring_pre_tax_amount: number;

    /**
     * Current status of the subscription.
     * Available values: "pending", "active", "on_hold", "paused", "cancelled", "failed", "expired".
     */
    status:
    | "pending"
    | "active"
    | "on_hold"
    | "paused"
    | "cancelled"
    | "failed"
    | "expired";

    /**
     * Unique identifier for the subscription.
     */
    subscription_id: string;

    /**
     * Number of subscription period intervals.
     */
    subscription_period_count: number;

    /**
     * Time interval for the subscription period.
     * Available values: "Day", "Week", "Month", "Year".
     */
    subscription_period_interval: "Day" | "Week" | "Month" | "Year";

    /**
     * Indicates if the recurring_pre_tax_amount is tax inclusive.
     */
    tax_inclusive: boolean;

    /**
     * Number of days in the trial period (0 if no trial).
     */
    trial_period_days: number;
};

export default SubscriptionWebhook;