const names: readonly string[] = ["a", "b", "c"];
const player: readonly [string, number] = ["a", 1];

let a: unknown;

if (typeof a === "string") {
  const b = a; // b: string
}

function hello(name: string | number): never {
  throw new Error("error");
  console.log("hello", name);
}
