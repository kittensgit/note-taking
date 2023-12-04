import React, { FC } from 'react';
import { INote } from '../types/types';

interface NoteListProps {
    notes: INote[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
    return <div></div>;
};

export default NoteList;
