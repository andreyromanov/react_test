import { stringToNums } from "./stringToNums.helper";

describe("test stringToNums helper", () => {
    it("should return array of numbers", () => {
        const string = "1,2,3";
        const expectedRes = [1, 2, 3]
      
        const res = stringToNums(string);
      
        expect(res).toBeInstanceOf(Array);
        expect(res).toEqual(expectedRes);
      });
  });