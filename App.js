const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1", {}, "This is h1 tag"),React.createElement("h2",{},"I am h2 tag")]
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
