import {createSlice } from "@reduxjs/toolkit";
import { transactions } from "../MockData/data";


// type transaction = {
//     id: number;
//     userId: number;
//     title: string;
//     amount: number;
//     type: "income" | "expense";
//     category: string;
//     date: string;
// }



const transactionSlice = createSlice({
    name:"transaction",
    initialState: {
        transactions: transactions
    },
    reducers:{}
})

export default transactionSlice.reducer;