import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// add Item to database 
function* getAllUsers(action) {
    console.log('Getting Users: ', action);
    try {
      const response = yield call(axios.get, '/api/user/userinfo');
      yield put( { type: 'GET_ALL_USERS' , payload: response.data });
    }
    catch(error) {
      console.log('Error getting all users', error);
    }
}

function* allUsersSaga() {
    yield takeEvery('FETCH_ALL_USERS', getAllUsers);
    // yield takeEvery('FETCH_USER_ITEMS', userItems);
}

export default allUsersSaga;