import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES =Object.freeze({

    IDEL:'idel',

    LOADING:'loading',

    ERROR:'error'
});


const productSlice = createSlice({
  name: "product",
  initialState:{
    data:[],
    status:STATUSES.IDEL,
},

  reducers: {
    // setProducts(state, action) {
    //     state.data = action.payload;
    // },
    // setStatus(state,action){
    //     state.status=action.payload;
    // },
},
extraReducers : (builder) =>{
    builder.addCase(fetchProduct.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.status = STATUSES.IDEL;
    });
    builder.addCase(fetchProduct.pending,(state,action)=>{
        state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchProduct.rejected,(state,action)=>{
        state.status = STATUSES.ERROR;
    });

}}
);

export const { setProducts,setStatus} = productSlice.actions;
export default productSlice.reducer;

// // Basic Thunk
// export function fetchProduct(){
//     return async function fetchProductThunk(dispatch,getState){
//         try{
//             dispatch(setStatus(STATUSES.LOADING));
//             const response = await fetch("https://fakestoreapi.com/products");
//             const data = await response.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDEL));
//         }catch(error){
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }

export const fetchProduct = createAsyncThunk('product/fetchProduct',async function fetchProductThunk(){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
}  
);