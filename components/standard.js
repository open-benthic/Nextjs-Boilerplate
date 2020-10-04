import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
`;
const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid purple;
`;
const Col = ({ children }) => {
  return <StyledCol>{children}</StyledCol>;
};

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid blue;
`;
const Center = ({ children }) => {
  return <StyledCenter>{children}</StyledCenter>;
};

const StyledWrapper = styled.div`
  padding: 5px;
  border: 2px solid green;
`;
const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export { Row, Col, Center, Wrapper };
