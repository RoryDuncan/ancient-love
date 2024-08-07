export const assert = (condition: boolean, message?: string): asserts condition => {
  if (!condition) {
    throw new Error(`AssertionError: ${message ?? "Assertion failed"}`);
  }
};
