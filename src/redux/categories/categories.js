const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

// action creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// reducers

const statusReducer = (state = initialState, action = {}) => {
  if (action.type === CHECK_STATUS) {
    return 'Under Construction';
  }
  return state;
};

export default statusReducer;
