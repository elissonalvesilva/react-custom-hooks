# Custom Hooks React.js

## Setup

 - Install dependences:
> yarn

## Start application
 - After install all dependeces, run the command below
> yarn start

## Examples

### 1 - useCounter - it's a customized hook to increment and decrement a counter

**Counter.js**
```javascript

import React from 'react';
import useCounter from './custom-hooks/useCounter';

// import { Container } from './styles';

function Counter() {

  const {count, increment, decrement} = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </div>
  );
}

export default Counter;
```
**useCounter.js**
```javascript
import { useState, useCallback } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  });

  const decrement = useCallback(() => {
    setCount(count - 1);
  });

  return { count, increment, decrement };
}

export default useCounter;

```

<hr>

## 2 - useRequest - it's a custom hooks to make a request url

**ListUsers.js**
```javascript
import React from 'react';
import useRequest from './custom-hooks/useRequest';

function ListUsers() {
  
  const [state, getData] = useRequest('https://jsonplaceholder.typicode.com/users');
  
  return (
    <div>
      <ul>
        {
          state && 
          state.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ul>
      <button onClick={getData}>List Users</button>
    </div>
  );
}

export default ListUsers;

```

**useRequest**
```javascript
import { useState } from 'react';
import axios from 'axios';

function useRequest(url) {
  const [state, setState] = useState([]);
  
  const getData = async () => {
    const { data } = await axios.get(url);
    setState(data);
  };

  return [state, getData];
}

export default useRequest;

```

<hr>

## 4 - useInput - it's a custom hooks to bind and reset value input

**Form.js**
```javascript
import React from 'react';
import useInput from './custom-hooks/useInput';

function Form() {

  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');
  
  const submitHandler = () => {
    alert(`Welcome ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>First Name</label>
        <input
          type="text"
          {...bindFirstName}
        />
        <label>Last Name</label>
        <input
          type="text"
          {...bindLastName}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
```

**useInput.js**
```javascript
import { useState } from 'react';

function useInput(initialValue) {
  
  const [value, setValue] = useState(initialValue);

  const bind ={
    value,
    onChange: e => {
      setValue(e.target.value);
    },
  };

  const resetValue = () => {
    setValue(initialValue);
  }

  return [value, bind, resetValue];

}

export default useInput;
```