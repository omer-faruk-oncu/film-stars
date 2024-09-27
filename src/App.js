import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import StarContainer from "./components/stars/StarContainer";


function App() {
  return (
    <Container className="text-center">
      <Header />
      <StarContainer />
    </Container>
  );
}

export default App;
