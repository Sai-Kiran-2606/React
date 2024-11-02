import { sum } from "../sum";

test("Sum function should calculate sum of two numbers", () => {
    const result = sum(3,2);

    //Assertion line
    expect(result).toBe(5);
});