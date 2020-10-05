import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  border: 2px solid #eaeaea;

  border-radius: 10px;
  transition: 0.3s ease-out;
  transform: translateY(0px);
  box-shadow: ${({ theme }) => theme.shadows.primary};
  &:hover {
    transform: translateY(-3px);
    transition: ease-out transform 0.25s;
  }
  &:focus {
    transform: translateY(-5px);
    border: 2px solid rgb(12, 60, 155);
    transition: ease-out 0.2s;
  }
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;
export default Card;
