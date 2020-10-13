const initialState = {
    counterdata : 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
      case 'INCREASE_COUNTER':
        return {counterdata:state.counterdata + 1};
      case 'DECREASE_COUNTER':
        return {counterdata:state.counterdata - 1};
    }
    return state;
};

export default reducer;
