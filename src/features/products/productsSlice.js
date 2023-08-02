import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
}

export const loadProducts = createAsyncThunk(
    'categories/loadProduct',
    async( category_id ) => {
        try {
            const url = ' http://localhost:4000/product?category_id='+category_id;
            const res = await axios.get(url);
            return res.data
        } catch (error) {
            throw error;
        }
    }  
);

export const searchProducts = createAsyncThunk(
    'products/searchProducs',
    async(key) => {
        try {
            const url = 'http://localhost:4000/product?q=' + key;
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            throw error;
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(loadProducts.pending, (state)=>{
            state.loading = false;
        });
        builder.addCase(loadProducts.fulfilled, (state,action) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(searchProducts.fulfilled,(state,action) => {
            state.data = action.payload;
            state.loading = false;
        });
    }
});

export const selectProducts = (state) => state.products;

export const selectProductsTotal = (state) => state.products.length;

export default productsSlice.reducer;