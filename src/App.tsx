import React from "react";
import "typeface-roboto";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Order from "./components/Order";
import Text from "./components/Text";
import { IntegrationOrder1, IntegrationOrder2 } from "./util/data";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  margin: 0 auto;
  padding-right: 300px;
  width: 1014px;
`;

const Nav = styled.div`
  position: sticky;
  top: 36px;
  margin-top: 36px;
  width: 300px;
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 8px;
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <Nav>
          <Text>
            <Link to="/coding-test/1/warehouse">
              Integration 1 - Warehouse View
            </Link>
          </Text>
          <Text>
            <Link to="/coding-test/2/warehouse">
              Integration 2 - Warehouse View
            </Link>
          </Text>
          <Text>
            <Link to="/coding-test/1/inventory">
              Integration 1 - Inventory View
            </Link>
          </Text>
          <Text>
            <Link to="/coding-test/2/inventory">
              Integration 2 - Inventory View
            </Link>
          </Text>
        </Nav>

        <Switch>
          <Route path="/coding-test/1/warehouse">
            <Order order={IntegrationOrder1} system={"warehouse"} />
          </Route>
          <Route path="/coding-test/2/warehouse">
            <Order order={IntegrationOrder2} system={"warehouse"} />
          </Route>
          <Route path="/coding-test/1/inventory">
            <Order order={IntegrationOrder1} system={"inventory"} />
          </Route>
          <Route path="/coding-test/2/inventory">
            <Order order={IntegrationOrder2} system={"inventory"} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
