import React from "react";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">Products</div>
            <div className="sidebar">Cart items</div>
          </div>
        </main>
        <footer>All rights are reserved</footer>
      </div>
    );
  }
}

export default App;
