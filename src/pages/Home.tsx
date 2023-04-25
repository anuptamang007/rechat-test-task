import { Container } from 'src/components';
import { ListTask, ManageTask } from 'src/components/Task';

const Home = () => {
  return (
    <Container>
      <ManageTask />
      <ListTask />
    </Container>
  );
};

export default Home;
