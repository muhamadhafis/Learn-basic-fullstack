import { describe, it, expect } from "bun:test";
import { add } from "./calculator-node-js";

describe("Kalkulator", () => {
  it("Add harus benar", () => {
    const operandA = 1;
    const operandB = 1;

    const actualValueFirst = add(operandA, operandB);

    const expectValueFirst = 2;

    expect(actualValueFirst).toBe(expectValueFirst);
  });

  it("Harus trow an error kalo string lewat param numA", () => {
    const potentionalErrorToBeThrew = () => {
      const operandA = "5";
      const operandB = 4;

      add(operandA, operandB);
    };

    expect(potentionalErrorToBeThrew).toThrow(Error);
  });

  it("Harus trow an error kalo string lewat param numB", () => {
    const potentionalErrorToBeThrew = () => {
      const operandA = "10";
      const operandB = 2;

      add(operandA, operandB);
    };

    expect(potentionalErrorToBeThrew).toThrow(Error);
  });
});
