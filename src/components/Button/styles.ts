import { Plus } from "lucide-react-native";
import styled from "styled-components/native";

type Props = {
  fullWidth: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  width: ${(x) => (x.fullWidth ? "100%" : "auto")};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 8px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY2};
`;

export const Title = styled.Text`
  font-size: ${(x) => x.theme.SIZES.sm};
  color: ${(x) => x.theme.COLORS.WHITE};
  font-family: ${(x) => x.theme.FONTS.BOLD};
`;
