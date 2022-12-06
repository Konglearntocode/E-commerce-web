import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Divider from "./components/Divider";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Divider color="#808080" marginSize={20} />
        <SubHeader />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
