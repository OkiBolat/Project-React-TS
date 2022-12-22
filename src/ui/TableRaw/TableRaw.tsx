import React from 'react';

type TableRawProps = {
    title: string;
    value: string | React.ReactNode;
};

const TableRaw: React.FC<TableRawProps> = ({ title, value }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{value}</td>
        </tr>
    );
};

export default TableRaw;
