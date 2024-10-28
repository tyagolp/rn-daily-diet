import { ArrowUpRight } from "lucide-react-native";
import { View } from "react-native";
import styled from "styled-components/native";

export const ContainerPositive = styled.View`
  padding: 20px 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const ContainerNegative = styled(ContainerPositive)`
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  color: ${(x) => x.theme.COLORS.GREY_1};
  font-size: ${(x) => x.theme.SIZES.xl};
  font-family: ${(x) => x.theme.FONTS.BOLD};
`;
export const Description = styled.Text`
  color: ${(x) => x.theme.COLORS.GREY_2};
  font-size: ${(x) => x.theme.SIZES.md};
  font-family: ${(x) => x.theme.FONTS.REGULAR};
`;
export const IconAbsolute = styled(ArrowUpRight)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${(x) => x.theme.COLORS.GREEN_DARK};
  font-size: ${(x) => x.theme.SIZES.md};
`;
