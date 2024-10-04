import React, { useEffect, useState } from "react";
import {Checkbox, Grid2, useTheme} from "@mui/material";
import axios from "axios";
import { ItemContainer, ItemRow, CheckboxLabel, ItemBox, ItemText } from "../theme/styles.ts";

interface Item {
    id: string;
    title: string;
}

interface ItemsProps {
    getRequest: string;
}

export const Items: React.FC<ItemsProps> = ({ getRequest }) => {
    const theme = useTheme();
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/${getRequest}`);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        fetchData();
    }, [getRequest]);

    const handleCheckboxChange = async (itemId: string) => {
        try {
            await axios.delete(`/api/${getRequest}/${itemId}`);
            setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <Grid2 container sx={{ py: 3 }}>
            <ItemContainer>
                {items.length === 0 ? (
                    <ItemText sx={{p:3}} >
                        No items found. Let's add something!
                    </ItemText>
                ) : (
                    items.map((item) => (
                            <ItemBox key={item.id}>
                                <ItemRow>
                                    <CheckboxLabel>
                                        <Checkbox
                                            size="small"
                                            onChange={() => {
                                                handleCheckboxChange(item.id);
                                            }}
                                            sx={{
                                                color: theme.palette.secondary.main,
                                                '&.Mui-checked': {
                                                    color: theme.palette.success.main,
                                                },
                                            }}
                                        />
                                        <ItemText>{item.title}</ItemText>
                                    </CheckboxLabel>
                                </ItemRow>
                            </ItemBox>
                        ))
                )}
            </ItemContainer>
        </Grid2>
    );
};