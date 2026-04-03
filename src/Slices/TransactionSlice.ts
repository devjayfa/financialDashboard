import {createSlice } from "@reduxjs/toolkit";
import { transactions } from "../MockData/data";


type transaction = {
    id: number;
    userId: number;
    title: string;
    amount: number;
    type: "income" | "expense";
    category: string;
    date: string;
}


type transactionState = {
    transactions: transaction[];
}
const transactionSlice = createSlice({
    name:"transaction",
    initialState: {
        transactions: transactions
    },
    reducers:{}
})

export default transactionSlice.reducer;