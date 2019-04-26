import { sagas as Saga } from "./Saga";
import { sagas as AuthSaga } from "./authSaga";
export const allSagas = [...Saga, ...AuthSaga];
