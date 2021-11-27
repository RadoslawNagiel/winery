import { Wine } from "src/app/utils/interfaces";

export const WINES: Wine[] = [
  {
    id: `1`,
    name: `Wino porzeczkowe`,
    createDate: 1611160486000,
    capacity: 25,
    power: 17,
    yeast: `Drożdże winiarskie Vinistart`,
    yeastTolerance: 17,
    sweetness: 0,
    recipe: null,
    done: false,
    numberOfBottles: 0,
    stagesDone: [true, true, true, true, true, true, false],
  },
  {
    id: `2`,
    name: `Wino winogronowe`,
    createDate: 1626795286000,
    capacity: 10,
    power: 12,
    yeast: `Drożdże winiarskie Buldog`,
    yeastTolerance: 12,
    sweetness: 3,
    recipe: null,
    done: false,
    numberOfBottles: 0,
    stagesDone: [true, true, false, false, false, false, false],
  },
  {
    id: `3`,
    name: `Wino ryżowe`,
    createDate: 1582216486000,
    capacity: 20,
    power: 14,
    yeast: `Drożdże winiarskie Bayanus`,
    yeastTolerance: 14,
    sweetness: 0,
    recipe: null,
    done: true,
    numberOfBottles: 25,
    stagesDone: [],
  },
  {
    id: `4`,
    name: `Wino porzeczkowe`,
    createDate: 1557163896000,
    capacity: 40,
    power: 17,
    yeast: `Drożdże winiarskie Vinistart`,
    yeastTolerance: 17,
    sweetness: 3,
    recipe: null,
    done: true,
    numberOfBottles: 23,
    stagesDone: [],
  },
  {
    id: `5`,
    name: `Wino winogronowe`,
    createDate: 1270913686000,
    capacity: 20,
    power: 14,
    yeast: `Drożdże winiarskie Bayanus`,
    yeastTolerance: 14,
    sweetness: 2,
    recipe: null,
    done: true,
    numberOfBottles: 7,
    stagesDone: [],
  },
  {
    id: `6`,
    name: `Wino z hibiskusa`,
    createDate: 1406302486000,
    capacity: 20,
    power: 12,
    yeast: `Drożdże winiarskie Vinistart`,
    yeastTolerance: 17,
    sweetness: 1,
    recipe: null,
    done: true,
    numberOfBottles: 10,
    stagesDone: [],
  },
];