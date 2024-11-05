import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const Header = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
`;

export const BackButton = styled.TouchableOpacity``;

export const Section = styled.ScrollView`
  padding: 20px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 10px 10px 0 0;
  display: flex;
`;

export const Footer = styled.View`
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const FormControl = styled.View`
  flex: 1;
  margin-top: 14px;
  display: flex;
  gap: 6px;
`;

export const ViewCollumn = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;
