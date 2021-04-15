import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Integrations } from "./util/Integrations";
import { IntegrationOrder1, IntegrationOrder2 } from "./util/data";
import App from "./App";

const warehouseEl = () => screen.queryByText(/Shipping Information/i);
const inventoryEl = () => screen.queryByText(/Customer Information/i);
const channelText = () => screen.getByText(/Sales Channel/i);

test("renders nav only on initial load", () => {
  render(<App />);
  const navItem = screen.getByText(/Integration 1 - Warehouse View/i);
  const returnText = screen.queryByText(/RETURN/i);

  expect(navItem).toBeInTheDocument();
  expect(returnText).not.toBeInTheDocument();
});

test("renders Integration 1 - Warehouse View", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Integration 1 - Warehouse View"));

  expect(channelText()).toHaveTextContent(
    Integrations[IntegrationOrder1.integration.name]
  );
  expect(warehouseEl()).toBeInTheDocument();
  expect(inventoryEl()).not.toBeInTheDocument();
});

test("renders Integration 2 - Warehouse View", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Integration 2 - Warehouse View"));

  expect(channelText()).toHaveTextContent(
    Integrations[IntegrationOrder2.integration.name]
  );
  expect(warehouseEl()).toBeInTheDocument();
  expect(inventoryEl()).not.toBeInTheDocument();
});

test("renders Integration 1 - Inventory View", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Integration 1 - Inventory View"));

  expect(channelText()).toHaveTextContent(
    Integrations[IntegrationOrder1.integration.name]
  );
  expect(warehouseEl()).not.toBeInTheDocument();
  expect(inventoryEl()).toBeInTheDocument();
});

test("renders Integration 2 - Inventory View", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Integration 2 - Inventory View"));

  expect(channelText()).toHaveTextContent(
    Integrations[IntegrationOrder2.integration.name]
  );
  expect(warehouseEl()).not.toBeInTheDocument();
  expect(inventoryEl()).toBeInTheDocument();
});

test("multiple navigations", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Integration 2 - Warehouse View"));
  fireEvent.click(screen.getByText("Integration 1 - Warehouse View"));

  expect(channelText()).toHaveTextContent(
    Integrations[IntegrationOrder1.integration.name]
  );
  expect(warehouseEl()).toBeInTheDocument();
  expect(inventoryEl()).not.toBeInTheDocument();

  fireEvent.click(screen.getByText("Integration 1 - Inventory View"));
  fireEvent.click(screen.getByText("Integration 2 - Inventory View"));

  expect(channelText()).toHaveTextContent(
    Integrations[IntegrationOrder2.integration.name]
  );
  expect(warehouseEl()).not.toBeInTheDocument();
  expect(inventoryEl()).toBeInTheDocument();
});
