import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import './App.css';

function App() {

  const Button = styled.button`
  
  color: ${props => (props.secondary ? props.theme.colors.secondary : props.theme.colors.main)};
  background-color: ${props => (props.secondary ? props.theme.colors.main : props.theme.colors.secondary)};
  border: 2px solid black;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }

  `;

  const TomatoButton = styled(Button)`
  background-color: unset;
  border-color: blue;
  `;

  const theme = {
    colors: {
      main: 'red',
      secondary: 'yellow'
    }

  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button>Przycisk 1</Button>
        <Button secondary>Przycisk 2</Button>
        <TomatoButton>Przycisk 3</TomatoButton>
      </div>
  </ThemeProvider>

  );
}

export default App;
