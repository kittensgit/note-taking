import React, { FC, useState } from 'react';
import './App.css';
import FormNote from './Components/FormNote';
import { INote } from './types/types';
import { v4 } from 'uuid';
import NoteList from './Components/NoteList';
const App: FC = () => {
    const [notes, setNotes] = useState<INote[]>([]);

    const addNote = (
        name: INote['name'],
        description: INote['description']
    ) => {
        const newNote: INote = {
            id: v4(),
            name,
            description,
        };
        setNotes([...notes, newNote]);
    };

    const editNote = (
        id: INote['id'],
        name: INote['name'],
        description: INote['description']
    ) => {
        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, name, description } : note
            )
        );
    };

    const deleteNote = (id: INote['id']) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div>
            <FormNote addNote={addNote} />
            <NoteList
                notes={notes}
                editNote={editNote}
                deleteNote={deleteNote}
            />
        </div>
    );
};

export default App;
