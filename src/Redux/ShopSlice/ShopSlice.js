import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchProducts = createAsyncThunk("shop/products", async () => {
    const response = await fetch('/products.json').then((res) => res.json());
    return response;
});

export const fetchItems = createAsyncThunk("shop/items", async () => {
    const response = await fetch('http://localhost:5000/products')
        .then((res) => res.json());
    return response;
});
const initialState = {
    products: [],
    addToCart: [],
    items: [],
    searchItem: []
}


export const ShopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.addToCart = (payload)
        },
        removefromcart: (state, action) => {
            state.addToCart = state.addToCart.filter(item => item._id !== action.payload)
        },
        setproducts: (state, { payload }) => {
            state.searchItem = payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.searchItem = action.payload;
        });

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removefromcart, setproducts } = ShopSlice.actions

export default ShopSlice.reducer