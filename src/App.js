import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  sortProducts(event) {
    // implement the logic for sort
    console.log(event.target.value);
  }

  filterProducts(event) {
    //implement the logic for size filter
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart items</div>
          </div>
        </main>
        <footer>All rights are reserved</footer>
      </div>
    );
  }
}

export default App;
