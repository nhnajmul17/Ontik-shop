import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchProducts = createAsyncThunk("shop/items", async () => {
    const response = await fetch('https://ontik-shop.onrender.com/products')
        .then((res) => res.json());
    return response;
});

export const fetchCartProducts = createAsyncThunk("shop/products", async (email) => {
    const response = await fetch(`https://ontik-shop.onrender.com/addtocart/${email}`)
        .then(res => res.json())
    return response;
});
export const fetchUserOrders = createAsyncThunk("shop/orders", async (email) => {
    const response = await fetch(`https://ontik-shop.onrender.com/orders?email=${email}`)
        .then(res => res.json())
    return response;
});

export const fetchAllOrders = createAsyncThunk("shop/allOrders", async (email) => {
    const response = await fetch('https://ontik-shop.onrender.com/allorders')
        .then(res => res.json())
    return response;
});


const initialState = {
    cartProducts: [],
    addToCart: [],
    items: [],
    searchItem: [],
    userOrders: [],
    allOrders: []
}


export const ShopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            state.addToCart = (payload)
        },
        removefromcart: (state, action) => {
            state.cartProducts = state.cartProducts.filter(item => item._id !== action.payload)
        },
        setproducts: (state, { payload }) => {
            state.searchItem = payload;
        },

    },
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.searchItem = action.payload;
        });
        builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
            state.cartProducts = action.payload;
        });
        builder.addCase(fetchUserOrders.fulfilled, (state, action) => {
            state.userOrders = action.payload;
        });
        builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
            state.allOrders = action.payload;
        });

    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removefromcart, setproducts } = ShopSlice.actions

export default ShopSlice.reducer