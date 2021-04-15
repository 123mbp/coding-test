import { convertFromShopify, ShopifyPayload } from "./shopify";
import { IntegrationOrder1 } from "../data";
import { IntegrationOrder1TestOutput } from "./testOutputData";

test("maps from a Shopify payload to the common structure", () => {
  const {
    payload,
    created_at,
  }: { payload: ShopifyPayload; created_at: string } = IntegrationOrder1; //Shopify payload

  expect(convertFromShopify(payload, created_at)).toEqual(
    IntegrationOrder1TestOutput
  );
});
