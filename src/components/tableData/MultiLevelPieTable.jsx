import React from "react";
import { salesData } from "../../api/salesData";

function MultiLevelPieTable() {
  let indexing = 0;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Category</th>
          <th scope="col">Sales</th>
          <th scope="col">Expected Sales</th>
        </tr>
      </thead>
      <tbody>
        {salesData.data[0].category.map((valdata, i) => {
          return valdata.category.map((catData, catIndex) => {
            indexing++;
            return (
              <tr key={indexing}>
                <th scope="row">{indexing}</th>
                <td>{catData.label}</td>
                <td>{valdata.label.replace(/\{br}/g, " ")}</td>
                <td>${catData.value}k</td>
                <td>${catData.expectedSales}k</td>
              </tr>
            );
          });
        })}
      </tbody>
    </table>
  );
}

export default MultiLevelPieTable;
