import styled from 'styled-components';

const TitleStyled = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Title({ children }) {
  return <TitleStyled>{children}</TitleStyled>;
}
