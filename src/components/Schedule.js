import React from 'react'

export default function Schedule() {
  return (
    <div>
        <table className="table" style={{maxWidth:"600px", margin:"auto", color:"#fff"}}>
            <thead className="bg-dark">
              <tr>
              <th>Rounds</th>
              <th>Opens</th>
              <th>Closes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
    </div>
  )
}
