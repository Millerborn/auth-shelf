  const shelf = (state = [], action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        return action.payload;
      default:
        return state;
    }
  }


// shelf will be on the redux state at:
// state.shelf
  export default shelf;
  