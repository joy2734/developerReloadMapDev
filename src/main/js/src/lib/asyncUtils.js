import produce from 'immer';
import { call, put } from "@redux-saga/core/effects";

export const createAsyncAction = (type) =>{
    return [`${type}`, `${type}_SUCCESS`, `${type}_ERROR`];
}

//프로미스를 기다렷다가 결과를 패치
// export const createPromiseSaga = (type, promiseCreator) =>{
//     const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

//     return function* saga(action){
//         try{
//             const payload = yield call(promiseCreator, action.payload)

//             yield put({type: SUCCESS, payload})
//         } catch (e) {
//             yield put({type: ERROR, error: true, payload: e})
//         }
//     }
// }

// export const createPromiseSagaById = (type, promiseCreator) =>{
//     const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

//     return function* saga(action){
//         const id = action.meta;
//         try{
//             const payload = yield call(promiseCreator, action.payload);
//             yield put({ type: SUCCESS, payload, meta: id})
//         } catch(e){
//             yield put({ type: ERROR, error: e, meta: id})
//         }
//     }
// }

// 리듀서에서 사용 할 수 있는 여러 유틸 함수들입니다.
export const reducerUtils = {
    // 초기 상태. 초기 data 값은 기본적으로 null 이지만
    // 바꿀 수도 있습니다.
    initial: (initialData = null) => ({
      loading: false,
      data: initialData,
      error: null
    }),
    // 로딩중 상태. prevState의 경우엔 기본값은 null 이지만
    // 따로 값을 지정하면 null 로 바꾸지 않고 다른 값을 유지시킬 수 있습니다.
    loading: (prevState = null) => ({
      loading: true,
      data: prevState,
      error: null
    }),
    // 성공 상태
    success: payload => ({
      loading: false,
      data: payload,
      error: null
    }),
    // 실패 상태
    error: error => ({
      loading: false,
      data: null,
      error: error
    })
  };

  // 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
// type 은 액션의 타입, key 는 상태의 key (예: posts, post) 입니다.
export const handleAsyncActions = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
      console.log(action.type)
      switch (action.type) {
        case type:
          return produce(state, draft =>{
            draft[key] = reducerUtils.loading(null)
          })
        case SUCCESS:
          return produce(state, draft =>{
            draft[key] = reducerUtils.success(action.payload)
          })
        case ERROR:
          return produce(state, draft =>{
            draft[key] = reducerUtils.error(action.payload)
          })
        default:
          return state;
      }
    };
  };
  