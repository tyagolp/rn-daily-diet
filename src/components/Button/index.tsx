import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { theme } from "../../theme";

type Props = TouchableOpacityProps & {
  title: string;
  Icon?: LucideIcon;
  fullWidth?: boolean;
};

export function Button({ title, Icon, fullWidth = true, ...rest }: Props) {
  return (
    <Container {...rest} fullWidth={fullWidth}>
      {Icon && <Icon color={theme.COLORS.WHITE} size={18} />}
      <Title>{title}</Title>
    </Container>
  );
}
