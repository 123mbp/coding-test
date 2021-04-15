import { capitalise } from "./caseConversions";

test("capitalises only the first letter", () => {
  expect(capitalise("capital")).toEqual("Capital");
  expect(capitalise("capital letter")).toEqual("Capital letter");
  expect(typeof capitalise("capital letter")).toEqual("string");
});
