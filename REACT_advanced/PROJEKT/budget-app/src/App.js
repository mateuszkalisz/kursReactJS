import React from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyles } from "index.css.js";
import { Navigation, Wrapper } from "components";
import theme from "utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation
          items={[
            { content: "Homepage", to: "/" },
            { content: "Budget", to: "/budget" },
          ]}
          RightElement={(
            <div>
              <button>pl</button>
              <button>en</button>
            </div>
          )}
        />
        <Wrapper>
          <Switch>
            <Route path="/" exact>
              Homepage
            </Route>
            <Route path="/budget" exact>
              Budgetpage
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
