import React, { FC, useState } from 'react';
import { INote } from '../types/types';

interface EditNoteProps {
    id: INote['id'];
    name: INote['name'];
    description: INote['description'];
    handleEdit: () => void;
    editNote: (
        id: INote['id'],
        name: INote['name'],
        description: INote['description']
    ) => void;
}

const EditNote: FC<EditNoteProps> = ({
    handleEdit,
    editNote,
    name,
    description,
    id,
}) => {
    const [editName, setEditName] = useState<string>(name);
    const [editDesc, setEditDesc] = useState<string>(description);

    const handleSave = () => {
        console.log('ji');
        editNote(id, editName, editDesc);
        handleEdit();
    };

    return (
        <div className="inputs">
            <div className="form">
                <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Enter name of note"
                />
                <button onClick={handleSave}>Save change</button>
            </div>
            <textarea
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
                placeholder="Description..."
            />
        </div>
    );
};

export default EditNote;
