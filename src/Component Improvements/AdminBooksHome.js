import React from 'react';

import Sidebar from '../components1/Sidebar';
import Navbar from '../components1/Navbar';


import DepartementBooksBtn from './DepartementBooksBtn';

export default function DepartementsList() {
  const departements = [
    "Département 1",
    "Département 2",
    "Département 3",
    "Département 4",
    "Département 5",
    "Département 6",
    "Département 7",
    "Département 8",
    "Département 9",

  ];

  const departementRows = [];
  let currentRow = [];

  departements.forEach((departement, index) => {
    currentRow.push(
      <div key={index} className="col-md-4 mb-4">
        <DepartementBooksBtn nom_du_departement={departement} />
      </div>
    );

    if ((index + 1) % 3 === 0 || index === departements.length - 1) {
      departementRows.push(
        <div key={index} className="row">

          {currentRow}
          
        </div>
      );
      currentRow = [];
    }
  });

  return (
    <div>
      <Sidebar />
      <Navbar />
      {departementRows}
    </div>
  );
}