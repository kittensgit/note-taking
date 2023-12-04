import React, { FC, useState } from 'react';
import { INote } from '../types/types';
import EditNote from './EditNote';

interface NoteProps {
    editNote: (
        id: INote['id'],
        name: INote['name'],
        description: INote['description']
    ) => void;
    note: INote;
}

const Note: FC<NoteProps> = ({ note, editNote }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    return (
        <div className="note">
            {isEdit ? (
                <EditNote
                    id={note.id}
                    name={note.name}
                    description={note.description}
                    handleEdit={handleEdit}
                    editNote={editNote}
                />
            ) : (
                <div>
                    <h3>Name</h3>
                    <p>{note.name}</p>
                    <h3>Decription</h3>
                    <p>{note.description}</p>
                    <div className="btns">
                        <button onClick={() => setIsEdit(true)}>edit</button>
                        <button onClick={() => setIsEdit(true)}>delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Note;
