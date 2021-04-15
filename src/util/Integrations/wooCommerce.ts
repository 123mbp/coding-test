import { UnifiedOrder, Integrations } from "./";
import { formatAddress } from "../formatAddress";

interface WooCommerceOption {
  Name: string;
  Value: string;
  Id: string;
}

interface WooCommerceLineItem {
  VariantId: string;
  Sku: string;
  Description: string;
  Quantity: number;
  UnitPrice: number;
  Options: string[];
}

export interface WooCommercePayload {
  Ref: string;
  LineItems: WooCommerceLineItem[];
  Options: WooCommerceOption[];
  shipping_purchased: {
    service_name: string;
    amount_paid: number;
  };
  ShippingType: string;
  ShippingPrice: number;
  ShippingContactName: string;
  ShippingContactEmail: string;
  ShippingAddress: string[];
  CustomerName: string;
  CustomerEmail: string;
}

export const convertFromWooCommerce = (
  payload: WooCommercePayload,
  createdAt: string
): UnifiedOrder => {
  const optionsMap: any = payload.Options.reduce(
    (obj, { Id, Name, Value }) => ({
      ...obj,
      [Id]: { id: Id, name: Name, value: Value },
    }),
    {}
  );
  return {
    orderNumber: Number(payload.Ref),
    date: createdAt,
    channel: Integrations.woo_commerce,
    lineItems: payload.LineItems.map((item: WooCommerceLineItem) => ({
      sku: item.Sku,
      description: item.Description,
      quantity: item.Quantity,
      unitPrice: item.UnitPrice,
      options: item.Options.map((optionId: string) => optionsMap[optionId]),
    })),
    shippingType: payload.ShippingType,
    shippingPrice: payload.ShippingPrice,
    shippingAddress: formatAddress(payload.ShippingAddress),
    customerName: payload.ShippingContactName,
    customerEmail: payload.ShippingContactEmail,
  };
};
