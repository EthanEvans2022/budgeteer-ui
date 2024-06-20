import React, { FC, useEffect, useRef } from 'react';
import Button from './Button';

interface TableEntryOptionsProps {
    onEdit: () => void;
    onDelete: () => void;
}
const TableEntryOptions: FC<TableEntryOptionsProps> = ({ onEdit, onDelete }) => {
    const ref = useRef<HTMLTableRowElement>(null);

    //TODO: Make options enter from the right instead of from below
    return (
        <tr className="transaction-table__entry__options" ref={ref}>
            <td colSpan={5}>
                <div className="transaction-table__entry__options__buttons">
                    <Button onClick={onEdit} text={'Edit'} />
                    <Button onClick={onDelete} text={'Delete'} />
                </div>
            </td>
        </tr>
    );
};

export default TableEntryOptions;