import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select>
            <option value={this.props.size} onChange={this.props.sortProducts}>
              Latest
            </option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select>
            <option
              value={this.props.size}
              onChange={this.props.filterProducts}
            >
              All
            </option>
            <option value="32">32</option>
            <option value="64">64</option>
            <option value="128">128</option>
            <option value="256">256</option>
            <option value="512">512</option>
          </select>
        </div>
      </div>
    );
  }
}
