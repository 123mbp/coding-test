import React from "react";
import { format } from "date-fns";
import Text from "./Text";
import Warehouse from "./Warehouse";
import Inventory from "./Inventory";
import { getUnifiedOrder, RawOrder, UnifiedOrder } from "../util/Integrations";
import { PickIcon } from "./Icons";
import { ESizes, EWeights, ETextColors } from "../util/styleConstants";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 414px;
  background-color: var(--color-background-gray);
  padding: 28px 16px;
`;

const ReturnContainer = styled.div`
  padding: 8px;
  cursor: pointer;
  margin-bottom: 14px;
`;

const ReturnText = styled.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1.25px;
  line-height: 16px;
  color: var(--color-primary);
`;

const Header = styled.div`
  border: 1px solid var(--color-border-gray);
  display: flex:
  flex-direction: column;
  padding: 24px 32px 20px 32px;
  > * + * {
    margin-top: 4px;
    display: block;
  }
`;

const ItemSummary = styled.div`
  width: 100%;
  padding: 32px 32px 30px 32px;
  border-left: 1px solid var(--color-border-gray);
  border-right: 1px solid var(--color-border-gray);
  border-bottom: 1px solid var(--color-border-gray);
`;

const ItemSummaryRowUnderLined = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--color-border-gray);
  display: flex;
  align-items: center;
  padding-bottom: 4px;
`;

const LeftAlignedRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightAlignedRow = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > * + * {
    margin-left: 10px;
  }
`;

interface ISystemMap {
  warehouse: (props: UnifiedOrder) => JSX.Element;
  inventory: (props: UnifiedOrder) => JSX.Element;
}

const Order = ({
  order,
  system,
}: {
  order: RawOrder;
  system: keyof ISystemMap;
}) => {
  const orderInfo = getUnifiedOrder(order);

  const systemMap: ISystemMap = {
    warehouse: Warehouse,
    inventory: Inventory,
  };

  const systemKey: keyof ISystemMap = system;

  const SystemSpecificContent = systemMap[systemKey];

  return (
    <Container>
      <ReturnContainer>
        <ReturnText>{"< "}RETURN TO ORDERS</ReturnText>
      </ReturnContainer>
      <Header>
        <Text size={ESizes.VeryLarge} weight={EWeights.Bold}>
          Order #{orderInfo.orderNumber}
        </Text>
        <Text size={ESizes.Small} color={ETextColors.Gray}>
          {format(new Date(orderInfo.date), "MMM d, yyyy")}
        </Text>
        <Text size={ESizes.Small}>Sales Channel: {orderInfo.channel}</Text>
      </Header>
      <ItemSummary>
        <ItemSummaryRowUnderLined>
          <LeftAlignedRow>
            <Text>{orderInfo.lineItems.length} Items</Text>
          </LeftAlignedRow>
          <RightAlignedRow>
            <Text size={ESizes.Small} color={ETextColors.Primary}>
              To Pick
            </Text>
            <PickIcon />
          </RightAlignedRow>
        </ItemSummaryRowUnderLined>
        <SystemSpecificContent {...orderInfo} />
      </ItemSummary>
    </Container>
  );
};

export default Order;
