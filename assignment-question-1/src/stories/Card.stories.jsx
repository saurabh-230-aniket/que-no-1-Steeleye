import React from "react";

import { Card } from "../component/card/Card";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    cardDetails: { control: "cardDetails" },
    title: { control: "title" },
  },
};

export const Example_Card = () => (
  <Card
    cardDetails={{
      buySellIndicator: "BUY",
      orderStatus: "Completed",
      orderType: "Model",
    }}
    title="Order Details"
  >
    Button
  </Card>
);
