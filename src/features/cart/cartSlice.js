import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { roundNumber } from '../../utilities/utilis'


const initialState = {
    data: [],
    loading: false,
   
}

export const loadCartHandler = createAsyncThunk(             'cart/loadCartHandler',
    async( ) => {
        const url = ' http://localhost:4000/cart';
        const response = await axios.get(url); 
        return response.data;
    }
);

export const delFromCart = createAsyncThunk(
    'cart/delFromCart',
    async(el) =>{
        try {
            const url = 'http://localhost:4000/cart/' +el.id;
            await axios.delete(url);
            return el;
        } catch (error) {
            throw error
        }
        
    }
);

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async(el) =>{
        try {
            const payload={
                "product_id": el.id,
                "image": el.image,
                "title": el.title,
                "price": el.price,
                "qty": 1,
            };
            const url = 'http://localhost:4000/cart/';
            const response = await axios.post(url,payload);
            return response.data
        } catch (error) {
            throw error;
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
    },
    extraReducers:  (builder) => {

        
        builder.addCase(loadCartHandler.pending,(state,action) =>{
            state.loading = true;
        });
        builder.addCase(loadCartHandler.fulfilled,(state, action) =>{
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(loadCartHandler.rejected,(state,action) =>{
        
        });

        
        builder.addCase(delFromCart.pending,(state,action) =>{
            
            state.data = state.data.map( el => el.id=== action.meta.arg.id ? ({...el, deleting: true}): el);
        });
        builder.addCase(delFromCart.fulfilled,(state, action) =>{
            state.data = state.data.filter (el => el.id !== action.payload?.id);
        
        });
        builder.addCase(delFromCart.rejected,(state,action) =>{
           
            state.data = state.data.map( el => {
                if (el.id=== action.meta.arg.id) {
                    delete el.deleting;
                }
                return el;
            })
        });

       
        builder.addCase(addToCart.pending,(state,action) =>{
            
        });
        builder.addCase(addToCart.fulfilled,(state, action) =>{
            state.data = [...state.data, action.payload]
        });
        builder.addCase(addToCart.rejected,(state,action) =>{
            
        });
    }
});


export const selectCart = (state) => state.cart.data;

export const selectCartTotalQty = (state) => state.cart.data.reduce ((sum, el) => sum += el.qty, 0 );

export const selectCartTotalPrice = (state) => roundNumber (state.cart.data.reduce ((sum, el) => sum += roundNumber(el.qty * el.price), 0 )).toFixed(2);

export const selectCartDeletingId = (state) => state.cart.deleting_id;

export default cartSlice.reducer;