import React, { FC, useState } from 'react';
import { INote } from '../types/types';

interface FormNoteProps {
    addNote: (name: INote['name'], description: INote['description']) => void;
}

const FormNote: FC<FormNoteProps> = ({ addNote }) => {
    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const handleAddNote = () => {
        addNote(name, desc);
        setName('');
        setDesc('');
    };

    return (
        <div className="wrap">
            <h1>Note Taking</h1>
            <div className="inputs">
                <div className="form">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name of note"
                    />
                    <button onClick={handleAddNote}>Add note</button>
                </div>
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Description..."
                />
            </div>
        </div>
    );
};

export default FormNote;
