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