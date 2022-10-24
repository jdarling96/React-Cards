import axios from "axios";
import uuid from "uuid";
import { useState } from "react";

const useAxios = (url) => {
  const [state, setState] = useState([]);

  const addCard = async (restOfUrl = "") => {
    try {
      const response = await axios.get(`${url}${restOfUrl}`);
      console.log(`${url}${restOfUrl}`)

      setState((data) => [...data, { ...response.data, id: uuid() }]);
    } catch {
      alert("Error in deck of cards API.");
      
    }
  };

  const resetState = () => {
    setState([])
  }

  

  return [state, addCard, resetState];
};

export default useAxios;
