import React from "react";
import Text from "./Text";
import { MinusIcon, PlusIcon } from "./Icons";
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
  height: 94px;
  width: 75px;
  background-color: rgba(114, 143, 155, 0.25);
  border-radius: 3px;
`;

const Row = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center:
`;

const SmallRow = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 6px;
  }
`;

const Details = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectionDetails = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemSummaryRowUnderLined = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--color-border-gray);
  display: flex;
  align-items: center;
  padding-bottom: 4px;
`;

const ItemSummaryRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    margin-top: 16px;
  }
`;

const Warehouse = (props: UnifiedOrder) => (
  <>
    <Container>
      {props.lineItems.map((item: LineItem) => (
        <Row key={item.sku}>
          <ImagePlaceholder />
          <Details>
            <Text size={ESizes.Small} color={ETextColors.Gray}>
              {item.description}
            </Text>
            {item.options.map((option: Option) => (
              <Text
                key={option.name}
                size={ESizes.Small}
                color={ETextColors.Disabled}
              >
                {capitalise(option.name)}{" "}
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
            ))}
            <Text size={ESizes.Small} color={ETextColors.Disabled}>
              {"SKU "}
              <Text
                size={ESizes.Small}
                weight={EWeights.Bold}
                color={ETextColors.Gray}
              >
                {item.sku}
              </Text>
            </Text>
          </Details>
          <SelectionDetails>
            <SmallRow>
              <MinusIcon />
              <Text size={ESizes.Large} weight={EWeights.Bold}>
                2/3
              </Text>
              <PlusIcon />
            </SmallRow>
          </SelectionDetails>
        </Row>
      ))}
    </Container>
    <ItemSummaryRowUnderLined>
      <Text>Shipping Information</Text>
    </ItemSummaryRowUnderLined>
    <ItemSummaryRow>
      <Text size={ESizes.Small} weight={EWeights.Bold}>
        Service purchased
      </Text>
      <Text size={ESizes.Small}>{props.shippingType}</Text>
    </ItemSummaryRow>
    <ItemSummaryRow>
      <Text size={ESizes.Small} weight={EWeights.Bold}>
        Shipping paid
      </Text>
      <Text size={ESizes.Small} color={ETextColors.Primary}>
        ${(Math.round(props.shippingPrice * 100) / 100).toFixed(2)}
      </Text>
    </ItemSummaryRow>
  </>
);
export default Warehouse;
