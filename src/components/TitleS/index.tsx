import React from "react";
import { Content } from "./styles";
import { TextProps } from "react-native";

type Props = TextProps & {
  children: string;
};

export function TitleS({ children, ...rest }: Props) {
  return <Content {...rest}>{children}</Content>;
}
