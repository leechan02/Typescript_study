const add = (a: number, b: number): number => a + b;

type Add = (a: number, b: number) => number;

const add2: Add = (a, b) => a + b;

type SuperPrint = {
  <T>(arr: T[] ): void;
};

const superPrint: SuperPrint = (arr: any) => {
  arr.array.forEach((element) => {
    console.log(element);
  });
};

superPrint([1, 2, 3]);
superPrint(["a", "b", "c"]);