import styled from "styled-components";
import { Navbar } from "./components/navbar/Navbar";
import { device } from "./components/devices";
import { Container } from "./components/reuseable-styles/reuse.styled";
import { PageFooter } from "./components/footer/Footer";
// import { Layout } from "./layouts/Layout";
const HeroBanner = styled.div`
  background-color: #101010;
  min-height: 100%;
  height: 100%;

  @media (${device.tablet}) {
    padding: 0px 34px;
  }
`;

function App() {
  return (
    <>
      <HeroBanner>
        <Container>
          <Navbar />
        </Container>
      </HeroBanner>
      <PageFooter />
    </>
  );
}

export default App;
