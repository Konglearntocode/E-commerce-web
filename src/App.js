import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Divider from "./components/Divider";
import SubHeader from "./components/SubHeader";
import Menu from "./components/Menu";
import { Row, Column } from './components/Row';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Divider color="#808080" marginSize={20} />
        <SubHeader />
        <Menu />
        <Row>
          <Column flexGrow={0}>1</Column>
          <Column flexBasis="30%">1</Column>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
