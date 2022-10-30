
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Divider from "./components/Divider";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Divider color='#808080' marginSize={20} />
        <div className="flex">
          <div style={{
            flex: 1
          }}>123</div>
          <SearchBar />
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
