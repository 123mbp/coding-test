import { convertFromShopify, ShopifyPayload } from "./shopify";
import { convertFromWooCommerce, WooCommercePayload } from "./wooCommerce";
import { ShortAddress } from "../formatAddress";

export function getUnifiedOrder(order: RawOrder): UnifiedOrder {
  const name: keyof IntegrationsInterface = order.integration.name;
  const { created_at, payload } = order;
  return integrations[name](payload, created_at);
}

export interface UnifiedOrder {
  orderNumber: number;
  date: string;
  channel: Integrations;
  lineItems: LineItem[];
  shippingType: string;
  shippingPrice: number;
  shippingAddress: ShortAddress;
  customerName: string;
  customerEmail: string;
}

export enum Integrations {
  shopify = "Shopify",
  woo_commerce = "WooCommerce",
}

export interface Option {
  id: string | number;
  name: string;
  value: string | number;
}

export interface LineItem {
  sku: string;
  description: string;
  quantity: number;
  unitPrice: number;
  options: Option[];
}

export interface RawOrder {
  integration: {
    name: keyof IntegrationsInterface;
  };
  created_at: string;
  payload: any;
}

interface IntegrationsInterface {
  shopify: (payload: ShopifyPayload, createdAt: string) => UnifiedOrder;
  woo_commerce: (
    payload: WooCommercePayload,
    createdAt: string
  ) => UnifiedOrder;
}

const integrations: IntegrationsInterface = {
  shopify: convertFromShopify,
  woo_commerce: convertFromWooCommerce,
};
