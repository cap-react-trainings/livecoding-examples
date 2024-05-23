import './App.css'
import ClickButton from './chapter2-react_in_a_nutshell/ClickButton'
import FromatDiv from './chapter2-react_in_a_nutshell/FormatDiv'
import ButtonList from './chapter3-components_styling/ButtonList'
import ConditionalText from './chapter4-conditional_rendering/ConditionalText';
import UseEffectExampleContainer from './chapter5-hooks_databinding/UseEffectExampleContainer';
import UseStateExample from './chapter5-hooks_databinding/UseStateExample';
import ContextUser from './chapter6-context/ContextUser';
import { UserContextProvider } from './chapter6-context/UserContext';
import ExampleUseForm from "./chapter8-forms/ExampleUseForm"

function App() {

  return (
    <>
      <h1>App for demonstrating some live coding examples</h1>
      {/** Chapter 2 - React in a Nutshell */}
      {/* <ClickButton */}
      {/* <FromatDiv /> */}

      {/** Chapter 3 - Props and styling */}
      {/* <ButtonList /> */}

      {/** Chapter 4 - Conditional Rendering */}
      {/* <ConditionalText count={1000} /> */}

      {/** Chapter 5 - Hooks and Databinding */}
      {/* <UseStateExample />
      <UseEffectExampleContainer /> */}

      {/** Chapter 6 - Context
       * ContextProvider is set in main.tsx
       */}
      {/* <ContextUser /> */}

      {/** Chapter 7 - Routing
       * pls see main.tsx
       */}

      {/** Chapter 8 - Forms*/}
      <ExampleUseForm />
    </>
  );
}

export default App
