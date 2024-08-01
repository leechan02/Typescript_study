interface Use {
  name: string;
  age: number;
  isGood: boolean;
}

interface Human {
  health: string;
}

class Play implements Use, Human {
  constructor(
    public name: string,
    public age: number,
    public isGood: boolean,
    public health: string
  ) {}
}
