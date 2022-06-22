import React, { useMemo } from "react";
import { COLUMNS } from "../components/columns2";
import Table from "../components/Table";

const PersonalIndex = (selectedRows) => {
  const data = [];

  for (let i of selectedRows.selectedRows) {
    data.push(i.original);
  }

  const columns = useMemo(() => COLUMNS, []);

  return (
    <div>
      <h1>Personal Index</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default PersonalIndex;
