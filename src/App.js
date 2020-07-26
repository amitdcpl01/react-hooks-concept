import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentB from './components/ComponentB';
import ComponentA from './components/ComponentA';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterOneNew from './components/CounterOneNew';
import CounterTwoNew from './components/CounterTwoNew';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increament':
//       return state + 1
//     case 'decreament':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    <div className="App">
      {/* Count - {count} */}
      {/* <ClassCounter></ClassCounter>
      <hr></hr>  */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* < IntervalHookCounter /> */}
      {/* <DataFetching></DataFetching> */}
      {/* <UserContext.Provider value={'Amit'}>
       <ChannelContext.Provider value={'codevolution'}>
       <ComponentC></ComponentC>
       </ChannelContext.Provider>
     </UserContext.Provider> */}

      {/* <CounterOne></CounterOne> */}
      {/* <CounterTwo></CounterTwo> */}
      {/* <CounterThree></CounterThree> */}
      {/* <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC> */}
      {/* <DataFetchingOne></DataFetchingOne> */}
{/* <DataFetchingTwo></DataFetchingTwo> */}
{/* <ParentComponent></ParentComponent> */}
{/* <Counter></Counter> */}
{/* <FocusInput></FocusInput> */}
{/* <ClassTimer></ClassTimer>
<HookTimer></HookTimer> */}

{/* <DocTitleOne></DocTitleOne>
<DocTitleTwo></DocTitleTwo> */}
<CounterOneNew></CounterOneNew>
<CounterTwoNew></CounterTwoNew>

    </div>
    // </CountContext.Provider>
  )
}

export default App;
