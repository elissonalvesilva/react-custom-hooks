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