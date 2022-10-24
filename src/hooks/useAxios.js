import axios from "axios";
import uuid from "uuid";
import { useState } from "react";

const useAxios = (url) => {
  const [state, setState] = useState([]);

  const addCard = async (params) => {
    try {
      const response = await axios.get(url);
      setState((state) => [...state, { ...response.data, id: uuid() }]);
    } catch {
      alert("Error in deck of cards API.");
      console.log(params)
    }
  };

  return [state, addCard];
};

export default useAxios;
