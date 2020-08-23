import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./components/theme";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import MainContainer from "./containers/Main/MainContainer";
import ConferenceContainer from "./containers/ConferenceContainer/ConferenceContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api.react-finland.fi/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <NavBarComponent/>
            <Switch>
              <Route path='/ui-graphql-api' component={MainContainer} exact/>
              <Route path='/ui-graphql-api/conference/:id' component={ConferenceContainer} />
            </Switch>
          </div>
        </Router>

      </MuiThemeProvider>
    </ApolloProvider>

  );
}

export default App;
