import axios from 'axios';
import React, { useState, FormEvent } from 'react';
import { InputGroup, InputBox, SubmitButton } from '../theme/styles.ts';

interface AddItemProp {
    getRequest: string;
}

export const AddItem: React.FC<AddItemProp> = ({ getRequest }) => {
    const [newItem, setNewItem] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`/api/${getRequest}`, { newItem });
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
                onKeyDown={async (e) => {
                    if (e.key === 'Enter' && hasLetters) {
                        await handleSubmit(e);
                    }
                }}
            />
            {hasLetters && (
                <SubmitButton type="submit">Submit</SubmitButton>
            )}
        </InputGroup>
    );
};