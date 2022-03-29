const UNDER_CONSTRUCTION = 'UNDER_CONSTRUCTION';

const initialState = '';

// action creators
export const checkStatus = () => ({
  type: UNDER_CONSTRUCTION,
});

// reducers

const statusReducer = (state = initialState, action = {}) => {
  if (action.type === UNDER_CONSTRUCTION) {
    return 'Under Construction';
  }
  return state;
};

export default statusReducer;
