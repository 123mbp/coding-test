import React from "react";
import Text from "./Text";
import { ESizes, EWeights, ETextColors } from "../util/styleConstants";
import { capitalise } from "../util/caseConversions";
import { UnifiedOrder, LineItem, Option } from "../util/Integrations";
import styled from "@emotion/styled";

const Container = styled.div`
  > * + * {
    border-top: 2px solid var(--color-border-gray);
  }
`;

const ImagePlaceholder = styled.div`
  height: 160px;
  width: 128px;
  background-color: rgba(114, 143, 155, 0.25);
  border-radius: 3px;
`;

const Row = styled.div`
  width: 100%;
  padding-top: 24px;
  display: flex;
  align-items: center:
  margin-bottom: 24px;
`;

const DetailsCol = styled.div`
  margin: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * + * {
    margin-top: 12px;
  }
`;

const PriceContainer = styled.div`
  margin-top: 16px;
  margin-left: 16px;
`;

const ItemSummaryRowUnderLined = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--color-border-gray);
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding-top: 12px;
  padding-bottom: 4px;
`;

const DividerContainer = styled.div`
  padding-right: 16px;
  border-right: 1px solid var(--color-border-gray);
`;

const OptionRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  > * + * {
    padding-left: 16px;
  }
`;

const RowMarginTop = styled.div`
  margin-top: 24px;
`;

const DividerContainerNoBorder = styled.div`
  padding: 0 16px;
`;

const Inventory = (props: UnifiedOrder) => (
  <>
    <Container>
      {props.lineItems.map((item: LineItem) => (
        <div key={item.sku}>
          <Row>
            <ImagePlaceholder />
            <PriceContainer>
              <Text size={ESizes.VeryLarge}>
                $ {(Math.round(props.shippingPrice * 100) / 100).toFixed(2)}
              </Text>
            </PriceContainer>
          </Row>
          <DetailsCol>
            <OptionRow>
              <Text size={ESizes.Small} color={ETextColors.Gray}>
                {item.description}
              </Text>
            </OptionRow>
            <OptionRow>
              {item.options.map((option: Option) => (
                <DividerContainer key={option.name}>
                  <Text size={ESizes.Small} color={ETextColors.Disabled}>
                    {capitalise(option.name)}
                    {": "}
                    <Text
                      size={ESizes.Small}
                      weight={EWeights.Bold}
                      color={ETextColors.Gray}
                    >
                      {typeof option.value === "string"
                        ? capitalise(option.value)
                        : option.value}
                    </Text>
                  </Text>
                </DividerContainer>
              ))}
            </OptionRow>
            <OptionRow>
              <DividerContainer>
                <Text size={ESizes.Small} color={ETextColors.Disabled}>
                  {"Qty: "}
                  <Text
                    size={ESizes.Small}
                    weight={EWeights.Bold}
                    color={ETextColors.Gray}
                  >
                    1
                  </Text>
                </Text>
              </DividerContainer>
              <DividerContainerNoBorder>
                <Text size={ESizes.Small} color={ETextColors.Disabled}>
                  {"SKU: "}
                  <Text
                    size={ESizes.Small}
                    weight={EWeights.Bold}
                    color={ETextColors.Gray}
                  >
                    {item.sku}
                  </Text>
                </Text>
              </DividerContainerNoBorder>
            </OptionRow>
          </DetailsCol>
        </div>
      ))}
    </Container>
    <ItemSummaryRowUnderLined>
      <Text>Customer Information</Text>
    </ItemSummaryRowUnderLined>
    <div>
      <Text size={ESizes.Small} color={ETextColors.Gray}>
        {props.customerName}
      </Text>
    </div>
    {props.shippingAddress.map((chunk: string) => (
      <div key={chunk}>
        <Text size={ESizes.Small} color={ETextColors.Gray}>
          {chunk}
        </Text>
      </div>
    ))}
    <RowMarginTop>
      <Text size={ESizes.Small} color={ETextColors.Gray}>
        {props.customerEmail}
      </Text>
    </RowMarginTop>
  </>
);

export default Inventory;
