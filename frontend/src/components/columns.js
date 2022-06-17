export const COLUMNS = [
    {
        Header: () => <div className="px-4">#</div>, 
        accessor: 'market_cap_rank',
        className: "red"

    },
    {
        Header: ()=> <div className="text-left w-20">Coin</div>,
        accessor: 'name', //name of the coin, not unique id,
        Cell: tableProps  => (
            <div className="flex items-center"><img className="w-6 mr-2 rounded-full" 
            src={tableProps.row.original.image} alt={tableProps.row.original.name}/>
            <p className="hidden sm:table-cell pr-6">{tableProps.row.original.name}</p>
            </div>)
    },
    {
        Header: '', 
        accessor: 'symbol',
        Cell: ({value})  => {return(value.toUpperCase())},
    },
    {
        Header: 'Price in USD', 
        accessor: 'current_price',
        Cell: ({value}) => {return(value.toLocaleString())}
    },
    {
        Header: () => <div className="hidden sm:table-cell">7d</div>, 
        accessor: 'price_change_percentage_7d_in_currency',
        Cell: ({value}) => {return ( value > 0 ? (<p className="text-green-600">{value.toLocaleString(
            undefined,
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )}</p>):(<p className="text-red-600">{value.toLocaleString(
            undefined,
            {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }
          )}</p>
            
          ))}
    },
    // {
    //     Header: () => <div className="hidden md:table-cell">200d</div>, 
    //     accessor: 'price_change_percentage_200d_in_currency',
    //     Cell: tableProps  => (
    //         <div className="hidden md:table-cell pr-6">{tableProps.row.original.price_change_percentage_200d_in_currency.toLocaleString(undefined, {
    //             minimumFractionDigits: 2,
    //             maximumFractionDigits: 2,
    //           })}</div>
    //     )
    // },
    {
        Header:() => <div className="hidden md:table-cell">Mkt Cap</div>, 
        accessor: 'market_cap',
        Cell: tableProps  => (
            <div className="hidden md:table-cell pr-6">{tableProps.row.original.market_cap.toLocaleString()}</div>
        )
    },
    {
        Header: 'Mkt Cap in %', 
        accessor: 'market_share',
        Cell: ({value}) => {return(value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }))}
    }
]