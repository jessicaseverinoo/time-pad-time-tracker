import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

function App() {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  `;
  
  return (
    <div className="App">
      <header className="App-header">
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
      </header>
    </div>
  );
}

export default App;
