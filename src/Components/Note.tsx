import React, { FC } from 'react';
import { INote } from '../types/types';

interface NoteProps {
    note: INote;
}

const Note: FC<NoteProps> = ({ note }) => {
    return (
        <div className="note">
            <h3>Name</h3>
            <p>{note.name}</p>
            <h3>Decription</h3>
            <p>{note.description}</p>
        </div>
    );
};

export default Note;
