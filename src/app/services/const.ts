import { Wine } from "src/app/utils/interfaces";

export const WINES: Wine[] = [
  {
    name: `Wino porzeczkowe`,
    createDate: 1636806443000,
    capacity: 10,
    power: 17,
    sweetness: 0,
    recipe: null,
    stagesDone: [true, true, true, true, true, true, false],
  },
  {
    name: `Wino winogronowe`,
    createDate: 1636892843000,
    capacity: 15.5,
    power: 12,
    sweetness: 3,
    recipe: null,
    stagesDone: [true, false, false, false, false, false, false],
  },
  {
    name: `Wino z hibiskusa`,
    createDate: 1636982843000,
    capacity: 40,
    power: 8,
    sweetness: 2,
    recipe: null,
    stagesDone: [true, true, true, true, false, false, false],
  },
  {
    name: `Wino z hibiskusa 2`,
    createDate: 1636982843000,
    capacity: 20,
    power: 8,
    sweetness: 2,
    recipe: null,
    stagesDone: [true, true, true, true, false, false, false],
  },
];
