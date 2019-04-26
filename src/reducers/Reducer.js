import produce from "immer";

export const types = {
  PLUSMINUS_SAGA: "Auth/PLUSMINUS_SAGA",
  PLUS: "Auth/PLUS",
  MINUS: "Auth/MINUS"
};

export const initialState = {
  counter: 0
};

export default produce((draft, action) => {
  switch (action.type) {
    case types.PLUSMINUS_SAGA:
      console.log("calling Saga");
      return;
    case types.PLUS:
      draft.counter++;
      return draft;
    case types.MINUS:
      draft.counter--;
      return draft;
    default:
      return draft;
  }
}, initialState);

export const actions = {
  plus: () => ({
    type: types.PLUS
  }),
  minus: () => ({
    type: types.MINUS
  })
};
