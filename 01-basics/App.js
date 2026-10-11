// #task1
const heading = React.createElement("h1", {
  id: "heading",
  xyz: "abc" // used to give attributes to elements
}, "Hello World! from React");

console.log(heading); // React element is an object, not an actual HTML element

// creating nested elements
// <div id="parent">
//   <div id="child">
//     <h1>I am an h1 tag</h1>
//   </div>
// </div>
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);