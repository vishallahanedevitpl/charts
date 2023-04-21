import React from "react";
import { salesData } from "../../api/salesData";

function MultiLevelPieTable() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Category</th>
          <th scope="col">Sales</th>
        </tr>
      </thead>
      <tbody>
        {salesData &&
          salesData.map((data, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{data.product}</td>
              <td>{data.category}</td>
              <td>{data.sales}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default MultiLevelPieTable;
