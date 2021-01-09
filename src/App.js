import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Navbar from "./components/Navbar";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Accordion {...props} items={items} />}
        />
        <Route exact path="/search" component={Search} />
        <Route
          exact
          path="/dropdown"
          render={(props) => (
            <Dropdown
              {...props}
              label="Select a Color"
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
            />
          )}
        />
        <Route exact path="/translate" component={Translate} />
      </Switch>
    </div>
  );
};

export default App;
