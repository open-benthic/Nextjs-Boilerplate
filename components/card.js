import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  border: 1px solid #eaeaea;
  
  
  border-radius: 11px;
  transition: 0.3s ease-out;
  transform: translateY(0px);
  box-shadow: ${({ theme }) => theme.shadows.primary};
  &:hover {
    transform: translateY(-5px);
    transition: ease-out 0.2s;
  }
  &:focus {
    transform: translateY(-5px);
    transition: ease-out 0.2s;
  }
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;
export default Card;
