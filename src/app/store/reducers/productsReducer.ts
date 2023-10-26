import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../types';

type InitialStateType = {
  product: IProduct;
  products: IProduct[];
};

const initialState: InitialStateType = {
  product: {} as IProduct,
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<{ product: IProduct }>) => {
      state.product = action.payload.product;
    },
    setProducts: (state, action: PayloadAction<{ products: IProduct[] }>) => {
      state.products = [...state.products, ...action.payload.products];
    },
  },
});


export const {setProduct, setProducts} = productSlice.actions;
export default productSlice.reducer;