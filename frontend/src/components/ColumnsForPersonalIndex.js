import { CoinCell,ValueToLocalString,ValueToLocalStringWithTwoDigits } from "./CellFunctions";

export const COLUMNS =  [
      // with the hide method used here, the column space is still there
      // {
      //   Header:<th className="hidden sm:table-cell">#</th>,
      //   accessor: "market_cap_rank",
      //   Cell: HideOnSmallDevices,
      // },
      {
        Header: "Coin",
        accessor: "name",
        Cell: CoinCell,
        imgAccessor: "image",
        symbolAccessor: "symbol",
      },
      {
        Header: "Price in USD",
        accessor: "current_price",
        Cell: ValueToLocalString,
      },
      {
        Header: "Share of Index",
        accessor: "personal_index_market_share",
        Cell: ValueToLocalStringWithTwoDigits,
      },
    ]