import React, { FC } from 'react';
import Button from './Button';

interface TableEntryOptionsProps {
    onEdit: () => void;
    onDelete: () => void;
}
export const TableEntryOptions: FC<TableEntryOptionsProps> = ({ onEdit, onDelete }) => {

    return (
        <div className="table-entry-options">
            <Button onClick={onEdit} text={'Edit'} />
            <Button onClick={onDelete} text={'Delete'} />
        </div>
    );
};
