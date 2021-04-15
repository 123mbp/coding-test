import { getUnifiedOrder, RawOrder, UnifiedOrder } from "./";
import { IntegrationOrder1, IntegrationOrder2 } from "../data";
import {
  IntegrationOrder1TestOutput,
  IntegrationOrder2TestOutput,
} from "./testOutputData";

test("maps from a Shopify payload to the common structure", () => {
  const integration1: RawOrder = IntegrationOrder1;
  const integration2: RawOrder = IntegrationOrder2;
  const integration1Output: UnifiedOrder = IntegrationOrder1TestOutput;
  const integration2Output: UnifiedOrder = IntegrationOrder2TestOutput;
  expect(getUnifiedOrder(integration1)).toEqual(integration1Output);
  expect(getUnifiedOrder(integration2)).toEqual(integration2Output);
});
