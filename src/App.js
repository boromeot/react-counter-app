import React, { useState } from 'react';
import Counter from './Counter.js';
import CounterHooks from './CounterHooks.js'

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('green')
  return(
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={ 10 } />
      CounterHooks
      <CounterHooks initialCount = { 5 } />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'green' ? 'blue' : 'green'
      })}> Toggle Theme </button>

    </ThemeContext.Provider>
  );
}

export default App;
