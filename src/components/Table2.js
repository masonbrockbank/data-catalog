import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {
  const data = {
    columns: [
      {
        label: 'Column Name',
        field: 'columnName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Dataset Name',
        field: 'datasetName',
        sort: 'asc',
        width: 270
      }
    ],
    rows: props.schemaAnalysis
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;