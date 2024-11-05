import { ArrowLeft } from "lucide-react-native";
import styled from "styled-components/native";
import { TitleG } from "../TitleG";

type ContainerProps = {
  positiveColor: boolean;
};

export const Container = styled.View<ContainerProps>`
  padding: 40px 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ positiveColor, theme }) =>
    positiveColor ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled(TitleG)`
  color: ${(x) => x.theme.COLORS.GRAY1};
`;
export const Description = styled.Text`
  color: ${(x) => x.theme.COLORS.GRAY2};
  font-size: ${(x) => x.theme.SIZES.md};
  font-family: ${(x) => x.theme.FONTS.REGULAR};
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const IconAbsolute = styled(ArrowLeft)`
  color: ${(x) => x.theme.COLORS.GREEN_DARK};
  font-size: ${(x) => x.theme.SIZES.md};
`;
