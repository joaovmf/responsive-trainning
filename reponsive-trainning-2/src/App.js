import Header from "./components/Header/Header";
import { AppWrap } from "./AppStyles";
import Section from "./components/Section/Section";

function App() {
  return (
    <AppWrap>
      <body>
        <div>
          <Header />
          <h1>Consoles</h1>
          <Section>
          </Section>
        </div>
      </body>
    </AppWrap>
  );
}

export default App;
