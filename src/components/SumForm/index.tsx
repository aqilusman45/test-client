import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getSum } from "../../api/getSum";
import SumFormView from "../SumFormView";
import { ISumParams } from "../../lib/interfaces";

interface IInitialState {
  number1: string;
  number2: string;
  results: string;
}

const INITIAL_STATE = {
  number1: "",
  number2: "",
  results: "",
};

const SumForm = () => {
  const [state, setState] = useState<IInitialState>({ ...INITIAL_STATE });
  const mutation = useMutation((data: ISumParams) => getSum(data));

  useEffect(()=>{
    if (mutation.isSuccess) {
      setState((prevState)=> {
        return {
          ...prevState,
          results: mutation.data
        }
      })
    }
  },[mutation.status, mutation.data, mutation.isSuccess])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    mutation.mutate({
      number1: parseInt(state.number1),
      number2: parseInt(state.number2),
    });
  };
  
  return (
    <SumFormView state={state} submit={handleSubmit} onChange={handleChange} />
  );
};

export default SumForm;
