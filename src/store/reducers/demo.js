import actionTypes from '@/store/actionTypes';

const initialState = {
  num: 0,
};

export default function countNum(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NUM:
      return {num: state.num + action.num};
    case actionTypes.REDUCE_NUM:
      return {num: state.num - action.num};
    case actionTypes.SET_NUM:
      return {num: action.num};
    default:
      return state;
  }
}
