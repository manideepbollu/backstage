const initialState = {
    clicked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLICKED':
      return Object.assign({}, state, {
          clicked: !state.clicked
      });
    case 'RESET':
      return Object.assign({}, state, {
          clicked: false
      });
    default:
      return state;
  }
};
