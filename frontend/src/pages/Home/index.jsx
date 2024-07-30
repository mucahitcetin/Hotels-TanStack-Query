import Hero from "./Hero";
import Container from "../../components/Container";
import List from "./List";

const Home = () => {
  return (
    <Container designs="my-5">
      <Hero />

      <div>
        <List />
      </div>
    </Container>
  );
};

export default Home;
