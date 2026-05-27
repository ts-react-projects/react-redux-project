// import { Component } from "react";
// import { connect } from "react-redux";
// import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store";
import { useRef } from "react";

function Counter() {
  //   const selectCounterShow = createSelector(
  //     (state) => state.counter,
  //     (state) => state.show,
  //     (counter, show) => ({ counter, show }),
  //   );

  //   const { counter, show } = useSelector(selectCounterShow);

  const inputRef = useRef(null);
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(actions.increment());
  }

  function handleDecrement() {
    dispatch(actions.decrement());
  }

  function handleToggle() {
    dispatch(actions.toggleCounter());
  }
  function handleIncrease() {
    if (!Number.isNaN(inputRef.current.value))
      dispatch(actions.increase(Number.parseInt(inputRef.current.value)));
  }
  function handleReset() {
    dispatch(actions.resetCounter());
  }

  return (
    <section id="center">
      <h1>REDUX COUNTER</h1>
      <p style={{ display: show ? "block" : "none" }}>{counter}</p>
      <div className="counter-buttons">
        <button className="counter" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="counter" onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <div className="counter-buttons">
        <input type="number" ref={inputRef} defaultValue={0} />
        <button className="counter" onClick={handleIncrease}>
          Increase
        </button>
      </div>
      <div className="counter-buttons">
        <button className="counter" onClick={handleToggle}>
          Toggle Counter
        </button>
        <button className="counter" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }
//   handleDecrement() {
//     this.props.decrement();
//   }
//   handleToggleCounter() {}
//   render() {
//     return (
//       <section id="center">
//         <h1>REDUX COUNTER</h1>
//         <p>{this.props.counter}</p>
//         <div className="counter-buttons">
//           <button className="counter" onClick={this.handleDecrement.bind(this)}>
//             Decrement
//           </button>
//           <button className="counter" onClick={this.handleIncrement.bind(this)}>
//             Increment
//           </button>
//         </div>
//       </section>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
