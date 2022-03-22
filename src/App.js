import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScree from "./screens/HomeScree";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <h1>This is pawan kumar yogi - A new Developer !;</h1>
          <HomeScree />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
