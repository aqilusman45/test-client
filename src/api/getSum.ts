import axios from "axios";
import { ISumParams } from "../lib/interfaces";

export async function getSum({ number1, number2 }: ISumParams) {
  try {
    return (
      await axios.post("/api/sum/calculate-sum", {
        number1,
        number2,
      })
    ).data;
  } catch (error) {
    alert(error);
  }
}
