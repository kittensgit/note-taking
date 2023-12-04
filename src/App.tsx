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

    return (
        <div>
            <FormNote addNote={addNote} />
            <NoteList notes={notes} />
        </div>
    );
};

export default App;
