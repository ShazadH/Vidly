import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = (props) => {
    const { columns, onSort, sortColumn, data } = props;
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />
            <TableBody columns={columns} data={data} />
        </table>
    );
};

export default Table;
