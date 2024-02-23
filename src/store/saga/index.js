import { call, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./saga.action";
import { incrementByAmount } from "../slices";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchNum() {
  try {
    let res = yield call(() =>
      callAPI({
        url: "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1",
      })
    );
    yield put(incrementByAmount(res.data[0]));
  } catch (error) {
    yield put({ type: "saga_failed" });
  }
}
