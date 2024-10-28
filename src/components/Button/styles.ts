import { Plus } from "lucide-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: ${(x) => x.theme.SIZES.sm};
  color: ${(x) => x.theme.COLORS.WHITE};
  font-family: ${(x) => x.theme.FONTS.BOLD};
`;

export const Icon = styled(Plus)`
  color: ${(x) => x.theme.COLORS.WHITE};
  size: ${(x) => x.theme.SIZES.sm};
`;
