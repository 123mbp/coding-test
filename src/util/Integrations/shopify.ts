import { UnifiedOrder, Integrations } from "./";
import { formatAddress } from "../formatAddress";

interface ShopifyOption {
  name: string;
  value: string;
  option_id: number;
}

interface ShopifyLineItem {
  product_variant_id: number;
  SKU: string;
  description: string;
  quantity: number;
  UnitPrice: number;
  options: ShopifyOption[];
}

export interface ShopifyPayload {
  order_number: string;
  order_line_items: ShopifyLineItem[];
  shipping_purchased: {
    service_name: string;
    amount_paid: number;
  };
  shipping_details: {
    contact_name: string;
    contact_email: string;
    address: string[];
  };
}

export const convertFromShopify = (
  payload: ShopifyPayload,
  createdAt: string
): UnifiedOrder => {
  return {
    orderNumber: Number(payload.order_number),
    date: createdAt,
    channel: Integrations.shopify,
    lineItems: payload.order_line_items.map((item: ShopifyLineItem) => ({
      sku: item.SKU,
      description: item.description,
      quantity: item.quantity,
      unitPrice: item.UnitPrice,
      options: item.options.map((option: ShopifyOption) => ({
        id: option.option_id,
        value: option.value,
        name: option.name,
      })),
    })),
    shippingType: payload.shipping_purchased.service_name,
    shippingPrice: payload.shipping_purchased.amount_paid,
    shippingAddress: formatAddress(payload.shipping_details.address),
    customerName: payload.shipping_details.contact_name,
    customerEmail: payload.shipping_details.contact_email,
  };
};
