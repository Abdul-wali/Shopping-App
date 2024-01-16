import { createSlice } from "@reduxjs/toolkit";



    const initialState = {
        ApiData: [],
    }


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        fetchProducts(state, action){
            state.ApiData = action.payload;
            
        }
     
    }
})
 
export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch, getState)
    {const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json(); 
    dispatch(fetchProducts(result));

}
}

