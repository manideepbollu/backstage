const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TAB_UPDATED':
      return Object.assign({}, action.payload, {bsStatus: "NEVER_DONE"});
    default:
      return state;
  }
};