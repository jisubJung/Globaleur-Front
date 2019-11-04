import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import {  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI() {
    // 서버에 요청을 보내는 부분 LOG_IN_REQUEST
    // return axios.post('/login');
}

function* login() {
    try {
        yield call(loginAPI); // 추후 서버로 부터 응답을 받고난 뒤에 순서대로 진행을 해야하기 때문에 call을 사용
        yield put({ // put은 dispatch와 동일
            type: LOG_IN_SUCCESS,
        });
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

// function* watchHello() {
//     while (true) {
//         yield take(HELLO_SAGA);
//         console.log(1);
//         console.log(2);
//         console.log(3);
//         console.log(4);
//     }
// }

function* watchHello() {
    yield takeLatest(HELLO_SAGA, function* () {
        yield delay(1000);
        yield put({
            type: 'BYE_SAGA'
        });
    });
}


export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchHello),
    ]);
}

/*
put - dispatch와 같음
call - 동기 호출
fork - 비동기 호출
*/