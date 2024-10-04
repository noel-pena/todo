import axios from 'axios';
import React, { useState, FormEvent } from 'react';
import { InputGroup, InputBox, SubmitButton } from '../theme/styles.ts'; // Using the styled components

interface AddItemProps {
    getRequest: string;
}

export const AddItem: React.FC<AddItemProps> = ({ getRequest }) => {
    const [newItem, setNewItem] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log({newItem})
        try {
            await axios.post(`http://localhost:8080/api/${getRequest}`, { newItem });
            window.location.reload();
        } catch (error) {
            console.log('Error adding item:', error);
        }
    };

    const hasLetters = /[a-zA-Z]/.test(newItem);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <InputGroup component="form" onSubmit={handleSubmit}>
            <InputBox
                type="text"
                name="newItem"
                autoComplete="off"
                autoFocus
                placeholder="Type here"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            {hasLetters && (
                <SubmitButton type="submit">Add</SubmitButton>
            )}
        </InputGroup>
    );
};