import React, { useMemo } from "react";
import { COLUMNS } from "../components/ColumnsForPersonalIndex";
import TableForPersonalIndex from "../components/TableForPersonalIndex";

const PersonalIndex = (selectedRows) => {
  const columns = useMemo(() => COLUMNS, []);

  // console.log(selectedRows);

  return (
    <div>
      <div className="min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="mt-3">
            <h1>Personal Index</h1>

            <TableForPersonalIndex
              columns={columns}
              data={selectedRows.selectedRows}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PersonalIndex;
