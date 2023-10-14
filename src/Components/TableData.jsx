import React from "react";
import "../CSS files/TableData.css";
import SearchBox from "./SearchBox";

const TableData = () => {
  return (
    <div className="table-container">
      <h4>Product Sell</h4>
      <div className="SearchBox">
        <SearchBox />
        <label for="days" className="dropdown"></label>

        <select name="days" id="cars">
          <option value="30days">30days</option>
          <option value="3month">3month</option>
          <option value="1month">1month</option>
          <option value="1year">1year</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
          <th>product Name</th>
          </tr>
          <tr>
          <th>Stock</th>
          </tr>
          <tr>
          <th>price</th>
          </tr>
          <tr>
          <th>Total sale</th>
          </tr>
          </thead>
          <tbody>
          </tbody>
      </table>
    </div>
  );
};

export default TableData;
