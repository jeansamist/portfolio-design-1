import { PageComponent } from "rasengan";
const Home: PageComponent = () => {
  return <section>Home</section>;
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;
