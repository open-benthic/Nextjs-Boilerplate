import { useQuery } from 'react-query';
import * as api from '@modules/api';
import Card from '@components/card';
import Counter from '@components/counter';
import { Row, Col, Wrapper, Center } from '@components/standard';
const AllUsers = (props) => {
  return (
    <Wrapper>
      <Center>
        <Card>HELLLOOOOOOO</Card>
        <Counter />
      </Center>
    </Wrapper>
  );
};

export default AllUsers;
