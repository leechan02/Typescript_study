let a: number = 3;
let b: string = "hello";

let c: any = 4;

c = "world";
let d: number | string = 5;

let e: string[] = ["a", "b", "c"];

function f(x: number, y: number): number {
  return x + y;
}
console.log(f(1, 2));
