import { Operation } from "./Operation";

export class Sum extends Operation {
  static perform(arr) {
    console.log(arr);
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }
}
