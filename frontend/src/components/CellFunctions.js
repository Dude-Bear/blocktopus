import React from 'react';
import { classNames } from './shared/Utils';

// This is a custom filter UI for selecting
// a unique option from a list

export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach(row => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-gray-700">{render("Header")}: </span>
            <select
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name={id}
                id={id}
                value={filterValue}
                onChange={e => {
                    setFilter(e.target.value || undefined);
                }}
            >
                <option value="">All</option>
                {options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

export function PercentChangeColor({ value }) {
    const status = value ? value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : "unknown";

    return (
        <span
            className={classNames(
                "text-sm",
                status >= 0 ? " text-green-600" : " text-red-600",
            )}
        >
            {status}%
        </span>
    );
}
;

export function ValueToLocalString ({value}){
    return (
        <span className={classNames("text-sm")}>
            {value.toLocaleString()}
        </span>
    );
}

export function ValueToLocalStringWithTwoDigits ({value}){
    return (
        <span className={classNames("text-sm")}>
            {value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
        </span>
    );
}

export function CoinCell({ value, column, row }) {
    return (
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={row.original[column.imgAccessor]} alt="" />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium">{value}</div>
                <div className="text-sm text-gray-500">{row.original[column.symbolAccessor].toUpperCase()}</div>
            </div>
        </div>
    );
}
