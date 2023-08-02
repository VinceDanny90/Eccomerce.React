import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    data: [],
    loading: false,
}

export const loadCategoriesAndProducts = createAsyncThunk(
    'categories/loadCategoriesAndProducts',
    async () => {
        try {
            const categoriesUrl = 'http://localhost:4000/categories';
            const categoriesRes = await axios.get(categoriesUrl);
            const categories = categoriesRes.data;

            const productsPromises = categories.map(async (category) => {
                const productsUrl = `http://localhost:4000/product?category_id=${category.id}`;
                const productsRes = await axios.get(productsUrl);
                return {
                    ...category,
                    products: productsRes.data,
                };
            });

            const productsData = await Promise.all(productsPromises);
            return productsData;
        } catch (error) {
            throw error;
        }
    }  
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{
        loadCategories:(state, action) =>{
            state.data = action.payload;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(loadCategoriesAndProducts.pending,(state)=>{
            state.loading =true;
        });
        builder.addCase(loadCategoriesAndProducts.fulfilled,(state,action)=>{
            state.data = action.payload
            state.loading = true;
        });
    }
})


export const { loadCategories } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories;

export default categoriesSlice.reducer;