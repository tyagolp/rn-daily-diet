import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ArrowUpRight } from "lucide-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const CardPorcent = styled.View`
  padding: 20px 16px;
  border-radius: 8px;
  background-color: ${(x) => x.theme.COLORS.GREEN_LIGHT};
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CardPorcentTitle = styled.Text`
  color: ${(x) => x.theme.COLORS.GREY_1};
  font-size: ${(x) => x.theme.SIZES.xl};
  font-family: ${(x) => x.theme.FONTS.BOLD};
`;
export const CardPorcentDescription = styled.Text`
  color: ${(x) => x.theme.COLORS.GREY_2};
  font-size: ${(x) => x.theme.SIZES.md};
  font-family: ${(x) => x.theme.FONTS.REGULAR};
`;
export const CardPorcentIconAbsolute = styled(ArrowUpRight)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: ${(x) => x.theme.COLORS.GREEN_DARK};
  font-size: ${(x) => x.theme.SIZES.md};
`;
