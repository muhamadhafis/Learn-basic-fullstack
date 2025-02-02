import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

// Uji fungi sum dari index.js

test("Menjumlahkan 2 angka", () => {
  assert.strictEqual(sum(2, 5), 7);
  assert.strictEqual(sum(-2, 3), 1);
  assert.strictEqual(sum(0, 0), 0);
});
