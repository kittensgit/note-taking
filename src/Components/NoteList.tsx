import React, { FC } from 'react';
import { INote } from '../types/types';
import Note from './Note';

interface NoteListProps {
    notes: INote[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
    return (
        <div className="notes">
            {notes.map((note) => (
                <Note note={note} />
            ))}
        </div>
    );
};

export default NoteList;
