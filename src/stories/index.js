import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Header", module)
  .add("Header Simple without Notification", () => <Header />)
  .add("Header Simple with Notification", () => (
    <Header notification={[{ type: "new" }]} />
  ));

storiesOf("Sidebar", module).add("Simple sidebar", () => <Sidebar />);
