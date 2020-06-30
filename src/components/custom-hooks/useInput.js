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