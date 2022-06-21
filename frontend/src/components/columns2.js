import { CoinCell, HideOnSmallDevices, PercentChangeColor, ValueToLocalString, ValueToLocalStringWithTwoDigits } from "./CellFunctions";

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
        Header: "7d",
        accessor: "price_change_percentage_7d_in_currency",
        Cell: PercentChangeColor,
      },
      {
        Header: "30d",
        accessor: "price_change_percentage_30d_in_currency",
        Cell: PercentChangeColor,
      },
      {
        Header: "200d",
        accessor: "price_change_percentage_200d_in_currency",
        Cell: PercentChangeColor,
      },
      {
        Header: "Mkt Cap",
        accessor: "market_cap",
        Cell: ValueToLocalString,
      },
      {
        Header: "Market Share",
        accessor: "market_share",
        Cell: ValueToLocalStringWithTwoDigits,
        // Filter: SelectColumnFilter, // new
        // filter: "includes",
      },
    ]