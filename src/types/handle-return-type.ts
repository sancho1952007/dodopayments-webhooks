import DisputeWebhook from "./dispute-webhook";
import LicenceWebhook from "./licence-webhook";
import PaymentWebhook from "./payment-webhook"
import RefundWebhook from "./refund-webhook";
import SubscriptionWebhook from "./subscription-webhook";

// Return the different types of data for the different responses
type HandleFunctionReturnType = {
    "type": "payment.succeeded" | "payment.failed" | "payment.processing" | "payment.cancelled",
    "data": PaymentWebhook
} | {
    "type": "subscription.active" | "subscription.on_hold" | "subscription.renewed" | "subscription.plan_changed" | "subscription.cancelled" | "subscription.failed" | "subscription.expired",
    data: SubscriptionWebhook
} | {
    "type": "refund.succeeded" | "refund.failed",
    data: RefundWebhook
} | {
    "type": "dispute.opened" | "dispute.expired" | "dispute.accepted" | "dispute.cancelled" | "dispute.challenged" | "dispute.won" | "dispute.lost",
    data: DisputeWebhook
} | {
    "type": "license_key.created",
    data: LicenceWebhook
}
export default HandleFunctionReturnType;