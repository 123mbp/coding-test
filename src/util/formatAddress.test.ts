import { formatAddress, ShortAddress } from "./formatAddress";

test("formats a multi-part address", () => {
  const longAddress = [
    "1 Bluxome st",
    "San Francisco",
    "CA",
    "940176",
    "United States",
  ];

  const ShortAddress: ShortAddress = [
    "1 Bluxome st",
    "San Francisco CA 940176",
    "United States",
  ];

  expect(formatAddress(longAddress)).toEqual(ShortAddress);
  expect(Array.isArray(formatAddress(longAddress))).toEqual(true);
});
