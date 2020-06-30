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