import lemon from '../../images/lemons.png';
import peach from '../../images/peach.jpg';
import pitakhaya from '../../images/pitakhaya.png';
import pomelo from '../../images/pomelo.png';
import wing from '../../images/wing.png';
import pomegranate from '../../images/pomegranate.png';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  products: [
    {
      id: '1',
      url: peach,
      title: 'Персик',
      price: 120,
      quantity: 0,
    },
    {
      id: '2',
      url: pitakhaya,
      title: 'Пітахая',
      price: 320,
      quantity: 0,
    },
    {
      id: '3',
      url: pomelo,
      title: 'Помелло',
      price: 250,
      quantity: 0,
    },
    {
      id: '4',
      url: lemon,
      title: 'Лимони',
      price: 100,
      quantity: 0,
    },
    {
      id: '5',
      url: pomegranate,
      title: 'Гранат',
      price: 80,
      quantity: 0,
    },
    {
      id: '6',
      url: wing,
      title: 'Ананас',
      price: 320,
      quantity: 0,
    },
  ],
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find(product => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { setQuantity } = productsSlice.actions;
