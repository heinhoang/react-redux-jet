import { all } from "redux-saga/effects";
import { watchLoginUser, watchSignupUser } from "./generalStore";

export default function* rootSaga() {
  yield all([
    watchLoginUser(),
    watchSignupUser()
  ]);
};
