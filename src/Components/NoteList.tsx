import React, { FC } from 'react';
import { INote } from '../types/types';
import Note from './Note';

interface NoteListProps {
    deleteNote: (id: INote['id']) => void;
    editNote: (
        id: INote['id'],
        name: INote['name'],
        description: INote['description']
    ) => void;
    notes: INote[];
}

const NoteList: FC<NoteListProps> = ({ notes, editNote, deleteNote }) => {
    return (
        <div className="notes">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    editNote={editNote}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
};

export default NoteList;
