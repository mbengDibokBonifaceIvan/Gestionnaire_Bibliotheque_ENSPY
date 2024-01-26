import React from 'react';
import { FaBook } from 'react-icons/fa';
import Sidebar from '../components1/Sidebar';
import Navbar from '../components1/Navbar';

import DepartementBooksBtn from './DepartementBooksBtn';

export default function DepartementsList() {
  const departements = [
    "Genie Informatique",
    "Genie Civile",
    "Genie Telecom",
    "Genie Electrique",
    "Genie Industriel",
    "Genie Mecanique",
    
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