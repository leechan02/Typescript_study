type PlayerA = {
  name: string;
}

type PlayerAA = PlayerA & {
  age: number;
}

const playerA: PlayerAA = {
  name: "a",
  age: 1
}

//////

interface PlayerB {
  name: string;
}

interface PlayerBB {
  age: number;
}

const playerB: PlayerB & PlayerBB = {
  name: "b",
  age: 2
}