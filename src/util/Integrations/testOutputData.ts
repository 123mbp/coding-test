import { Integrations, UnifiedOrder } from "./";

export const IntegrationOrder1TestOutput: UnifiedOrder = {
  orderNumber: 98798379234,
  date: "2021-03-09T00:17:05.485Z",
  channel: Integrations.shopify,
  lineItems: [
    {
      sku: "P4321",
      description: "Large ripped jeans",
      quantity: 3,
      unitPrice: 150,
      options: [
        {
          id: 14238,
          name: "colour",
          value: "blue",
        },
        {
          id: 23904,
          name: "size",
          value: "L",
        },
      ],
    },
    {
      sku: "S4321",
      description: "US 6 Pink Heels",
      quantity: 3,
      unitPrice: 200,
      options: [
        {
          id: 394733,
          name: "colour",
          value: "pink",
        },
        {
          id: 29374,
          name: "size",
          value: "6",
        },
      ],
    },
  ],
  shippingType: "Express",
  shippingPrice: 11,
  shippingAddress: ["1 Bluxome st", "San Francisco CA 940176", "United States"],
  customerName: "Angela Potter",
  customerEmail: "angela.potter@gmail.com",
};

export const IntegrationOrder2TestOutput: UnifiedOrder = {
  orderNumber: 12523453,
  date: "2021-03-09T00:17:05.485Z",
  channel: Integrations.woo_commerce,
  lineItems: [
    {
      sku: "P4321",
      description: "Large ripped jeans",
      quantity: 3,
      unitPrice: 150,
      options: [
        {
          id: "de41bcdf-1858-49eb-9cea-2acf4c31ab0c",
          name: "colour",
          value: "blue",
        },
        {
          id: "f184143f-2abd-4d6b-92d6-500ddf67af44",
          name: "size",
          value: "L",
        },
      ],
    },
    {
      sku: "S4321",
      description: "US 6 Pink Heels",
      quantity: 3,
      unitPrice: 200,
      options: [
        {
          id: "1013eaf7-f2b4-4e7f-9216-48b2fdb39009",
          name: "colour",
          value: "pink",
        },
        {
          id: "6202b3d9-f23c-4d0a-86f1-294d2a4220ca",
          name: "size",
          value: "6",
        },
      ],
    },
  ],
  shippingType: "Express",
  shippingPrice: 11,
  shippingAddress: ["1 Bluxome st", "San Francisco CA 940176", "United States"],
  customerName: "Angela Potter",
  customerEmail: "angela.potter@gmail.com",
};
