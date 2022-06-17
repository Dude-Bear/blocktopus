import React, { useMemo } from "react";
import { COLUMNS } from "../components/columns2";
import Table from "../components/Table.js";

function BCI({ topCoins }) {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => topCoins, [topCoins]);

  return (
    <div className="min-h-screen">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default BCI;
