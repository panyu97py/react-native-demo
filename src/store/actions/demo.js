import actionTypes from '@/store/actionTypes';

export function addNum(num) {
  return {
    type: actionTypes.ADD_NUM,
    num,
  };
}

export function reduceNum(num) {
  return {
    type: actionTypes.REDUCE_NUM,
    num,
  };
}

export function setNum(num) {
  return {
    type: actionTypes.SET_NUM,
    num,
  };
}

export function thunkAdd(num) {
  return (dispatch, getState) => {
    const state = getState();
    console.log(state);
    setTimeout(() => {
      dispatch(addNum(num));
    }, 1000);
  };
}
