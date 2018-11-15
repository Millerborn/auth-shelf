import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// add Item to database 
function* addItem(action) {
    console.log('Add Item generator: ', action);
    try {
      yield call(axios.post, '/api/shelf', action.payload);
      yield put( { type: 'FETCH_ITEMS' } );
    }
    catch(error) {
      console.log('Error in adding item generator', error);
    }
}

// get items on shelf from database
function* fetchItems(action) {
    console.log('Fetching Items generator: ', action);
    try {
      const response = yield call(axios.get, '/api/shelf');
      yield put( { type: 'SET_ITEMS', payload: response.data } ); 
    }
    catch(error) {
      console.log('Error in fetch items generator', error);
    }
}

// saga to deletes items from server
function* deleteItemSaga (action) {
    console.log('in itemsSaga', action.payload);
    const itemid = action.payload
    try {
        yield call(axios.delete, `/api/shelf/${itemid}`);
        yield put( { type: 'FETCH_ITEMS' } );
    }
    catch(error) {
        console.log('error with delete request', error);
    }
}

function* itemSaga() {
    yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('ADD_ITEM', addItem);
    yield takeEvery('DELETE_ITEM', deleteItemSaga)
    // yield takeEvery('FETCH_USER_ITEMS', userItems);
}

export default itemSaga;