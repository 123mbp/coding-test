import React from "react";
import { ESizes, EWeights, ETextColors } from "../util/styleConstants";
import styled from "@emotion/styled";

const Wrapper = styled.span`
  ${({
    weight,
    size,
    color,
  }: {
    weight: string;
    size: string;
    color: string;
  }) => `${weight} ${size} ${color}`}
`;

interface Props {
  children: React.ReactNode;
  size?: ESizes;
  weight?: EWeights;
  color?: ETextColors;
}

const Text = ({
  children,
  size = ESizes.Medium,
  weight = EWeights.Regular,
  color = ETextColors.Black,
}: Props) => {
  const textProps = { size, weight, color };
  return <Wrapper {...textProps}>{children}</Wrapper>;
};

export default Text;
