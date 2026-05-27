import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { legacy_createStore as createStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, show: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.show = !state.show;
    },
    resetCounter(state) {
      state.counter = 0;
    },
  },
});

// const counterRedux = (state = { counter: 0, show: true }, action) => {
//   if (action.type === "increment") {
//     return { ...state, counter: state.counter + 1 };
//   }

//   if (action.type === "decrement") {
//     return { ...state, counter: state.counter - 1 };
//   }

//   if (action.type === "increase") {
//     return { ...state, counter: state.counter + action.payload };
//   }

//   if (action.type === "toggle") {
//     return {
//       ...state,
//       show: !state.show,
//     };
//   }

//   return state;
// };

//export const store = createStore(counterRedux);

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
