import React from "react";
import { Content } from "./styles";
import { TextInputProps } from "react-native";
import { theme } from "../../theme";

type Props = TextInputProps & {};

export function TextArea({ ...rest }: Props) {
  return (
    <Content
      placeholderTextColor={theme.COLORS.GRAY3}
      cursorColor={theme.COLORS.GRAY4}
      multiline={true}
      textAlignVertical="top"
      {...rest}
    />
  );
}
