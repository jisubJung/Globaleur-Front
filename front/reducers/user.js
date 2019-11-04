const dummyUser = {
    nickname: '정지섭',
    Post: [],
    Followings: [],
    Followers: [],
    signUpData: {},
};

export const initialState = {
    isLoggedIn: false,
    user: null,
};

/* 동기 요청 목록 */
// 회원가입
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// 회원탈퇴
// export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
// export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
// export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

// 회원로그인
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

// 회원로그아웃
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
/* 동기 요청 목록 */


export const signUpAction = (data) => {
    return {
        type: SIGN_UP_REQUEST,
        data: data,
    };
};
export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
};
export const loginAction = {
    type: LOG_IN_REQUEST,
};
export const logoutAction = {
    type: LOG_OUT_REQUEST,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                loginData: action.data,
                isLoading: true,
            };
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
                isLoading: false,
            }
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                signUpData: action.data,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;