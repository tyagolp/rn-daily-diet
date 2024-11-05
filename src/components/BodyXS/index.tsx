import React from "react";
import { Content } from "./styles";
import { TextProps } from "react-native";

type Props = TextProps & {
  children: string;
};

export function BodyXS({ children, ...rest }: Props) {
  return <Content {...rest}>{children}</Content>;
}
