import React from "react";

export default function ProjectDetails() {
  return (
    <div className="row">
      <div className="col">
        <table className="table text-light border">
          <thead>
            <tr>
              <th className="bg-dark" colSpan="2">
                Pool Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Swap Rate</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Cap</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Total Users Participated</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>Total Funds Swapped</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Access Type</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col">
        <table className="table text-light border">
          <thead>
            <tr>
              <th className="bg-dark" colSpan="2">
                Token Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Meme Force</td>
            </tr>
            <tr>
              <td>Token Symbol</td>
              <td>MEMEFORCE</td>
            </tr>
            <tr>
              <td>Total Supply</td>
              <td>100,000,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
