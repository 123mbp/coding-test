import { convertFromWooCommerce, WooCommercePayload } from "./wooCommerce";
import { IntegrationOrder2 } from "../data";
import { IntegrationOrder2TestOutput } from "./testOutputData";

test("maps from a WooCommerce payload to the common structure", () => {
  const {
    payload,
    created_at,
  }: { payload: WooCommercePayload; created_at: string } = IntegrationOrder2; //WooCommerce payload

  expect(convertFromWooCommerce(payload, created_at)).toEqual(
    IntegrationOrder2TestOutput
  );
});
