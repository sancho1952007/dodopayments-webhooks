import countries from './globals/countries';
import currencies from './globals/currencies';

/**
 * Webhook payload structure for a payment event.
 */
type PaymentWebhook = {
    /**
     * Billing address details for payments.
     */
    billing: {
        city: string;
        country: string;
        state: string;
        street: string;
        zipcode: string;
    };

    /** Brand ID this payment belongs to. */
    brand_id: string;

    /** Identifier of the business associated with the payment. */
    business_id: string;

    /** ISO2 country code of the card. */
    card_issuing_country?: countries;

    /** Last four digits of the card. */
    card_last_four?: string;

    /** Card network like VISA, MASTERCARD etc. */
    card_network?: string;

    /** Type of card (e.g. DEBIT or CREDIT). */
    card_type?: string;

    /** Timestamp when the payment was created (ISO 8601). */
    created_at: string;

    /** Currency used for the payment (ISO 4217). */
    currency: currencies;

    /**
     * Details about the customer who made the payment.
     */
    customer: {
        customer_id: string;
        email: string;
        name: string;
    };

    /** Whether digital products were delivered. */
    digital_products_delivered: boolean;

    /** Discount ID if a discount is applied. */
    discount_id?: string;

    /**
     * List of disputes associated with this payment.
     */
    disputes: {
        amount: string;
        business_id: string;
        created_at: string;
        currency: string;
        dispute_id: string;
        dispute_stage: "pre_dispute" | "dispute" | "pre_arbitration";
        dispute_status:
        | "dispute_opened"
        | "dispute_expired"
        | "dispute_accepted"
        | "dispute_cancelled"
        | "dispute_challenged"
        | "dispute_won"
        | "dispute_lost";
        payment_id: string;
        remarks: string;
    }[];

    /** Error code if the payment failed. */
    error_code?: string;

    /** Error message if the payment failed. */
    error_message?: string;

    /** Custom key-value metadata related to the payment. */
    metadata: { [key: string]: string };

    /** Unique identifier for the payment. */
    payment_id: string;

    /** Checkout URL for the payment. */
    payment_link?: string;

    /** Payment method used (e.g. "card", "bank_transfer"). */
    payment_method?: string;

    /** Specific type of payment method (e.g. "visa", "mastercard"). */
    payment_method_type?: string;

    /**
     * List of products purchased in a one-time payment.
     */
    product_cart: [
        {
            product_id: string;
            quantity: number;
        }
    ];

    /**
     * List of refunds issued for this payment.
     */
    refunds: {
        amount?: number;
        business_id: string;
        created_at: string;
        currency?: currencies;
        is_partial: true;
        payment_id: string;
        reason?: string;
        refund_id: string;
        status: "succeeded" | "failed" | "pending" | "review";
    }[];

    /**
     * The amount that will be credited to your Dodo balance
     * after currency conversion and processing.
     */
    settlement_amount: number;

    /**
     * The currency in which settlement_amount will be credited.
     */
    settlement_currency: currencies;

    /**
     * Portion of settlement amount that corresponds to taxes collected.
     */
    settlement_tax?: number;

    /** Current status of the payment intent. */
    status?:
    | "succeeded"
    | "failed"
    | "cancelled"
    | "processing"
    | "requires_customer_action"
    | "requires_merchant_action"
    | "requires_payment_method"
    | "requires_confirmation"
    | "requires_capture"
    | "partially_captured"
    | "partially_captured_and_capturable";

    /** Subscription ID if payment is part of a subscription. */
    subscription_id?: string;

    /** Amount of tax collected in smallest currency unit (e.g. cents). */
    tax?: number;

    /** Total amount charged to the customer including tax, in smallest currency unit. */
    total_amount: number;

    /** Timestamp when the payment was last updated (ISO 8601). */
    updated_at?: string;
};

export default PaymentWebhook;