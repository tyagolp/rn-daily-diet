import { ArrowUpRight } from "lucide-react-native";
import styled from "styled-components/native";

type ContainerProps = {
  positiveColor: boolean;
};

export const Container = styled.Pressable<ContainerProps>`
  padding: 20px 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ positiveColor, theme }) =>
    positiveColor ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const IconAbsolute = styled(ArrowUpRight)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${(x) => x.theme.COLORS.GREEN_DARK};
  font-size: ${(x) => x.theme.SIZES.md};
`;
