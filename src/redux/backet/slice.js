const initialState = {
  products: [], // Масив продуктів
};

export const backetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
