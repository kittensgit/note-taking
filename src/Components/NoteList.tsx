import React, { FC } from 'react';
import { INote } from '../types/types';
import Note from './Note';

interface NoteListProps {
    editNote: (
        id: INote['id'],
        name: INote['name'],
        description: INote['description']
    ) => void;
    notes: INote[];
}

const NoteList: FC<NoteListProps> = ({ notes, editNote }) => {
    return (
        <div className="notes">
            {notes.map((note) => (
                <Note key={note.id} note={note} editNote={editNote} />
            ))}
        </div>
    );
};

export default NoteList;
