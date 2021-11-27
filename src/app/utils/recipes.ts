import { ProductionStage, Recipe, Units } from "../utils/interfaces";

export const RECIPES: Recipe[] = [
  {
    id: `1`,
    name: `Wino agrestowe`,
    author: `Kenneth Hawkins`,
    ingredients: [
      {
        name: `cukier`,
        value: 1000,
        unit: Units.gramy,
      },
      {
        name: `agrest`,
        value: 2000,
        unit: Units.gramy,
      },
      {
        name: `rodzynki sułtańskie`,
        value: 500,
        unit: Units.gramy,
      },
      {
        name: `sok jabłkowy (bez konserwantów)`,
        value: 2.2,
        unit: Units.litry,
      },
      {
        name: `klarowany miód`,
        value: 250,
        unit: Units.gramy,
      },
      {
        name: `kwas winny 3mg witaminy B₂`,
        value: 5,
        unit: Units.gramy,
      },
      {
        name: `enzym pektolityczny`,
        value: 5,
        unit: Units.gramy,
      },
      {
        name: `kwiat czarnego bzu`,
        value: 5,
        unit: Units.gramy,
      },
    ],
    productStages: [
      {
        name: ProductionStage.Preparation,
        date: 0,
        description: `Owoce dokładnie myjemy, rozdrabniamy w niewielkiej ilości wody i wlewamy do wiadra. Dodajemy sok jabłkowy oraz kwiat czarnego bzu.. Rozpuszczamy miód w wodzie (litr wody na 250 g. miodu), podgrzewając na wolnym ogniu. Dodajemy witaminę B₁ i dokładnie mieszamy.`,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 4,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 133,
      },
    ],
  },
  {
    id: `2`,
    name: `Wino agrestowe`,
    author: `Browin`,
    ingredients: [
      {
        name: `cukier`,
        value: 3000,
        unit: Units.gramy,
      },
      {
        name: `agrest`,
        value: 5800,
        unit: Units.gramy,
      },
    ],
    productStages: [
      {
        name: ProductionStage.Preparation,
        date: 0,
        description: ``,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
      },
    ],
  },
  {
    id: `3`,
    name: `Wino z jabłek`,
    author: `Browin`,
    ingredients: [
      {
        name: `cukier`,
        value: 2500,
        unit: Units.gramy,
      },
      {
        name: `jabłka`,
        value: 10800,
        unit: Units.gramy,
      },
      {
        name: `regulator kwaskowości`,
        value: 5,
        unit: Units.gramy,
      },
    ],
    productStages: [
      {
        name: ProductionStage.Preparation,
        date: 0,
        description: ``,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
      },
    ],
  },
  {
    id: `4`,
    name: `Wino malinowe`,
    author: `Browin`,
    ingredients: [
      {
        name: `cukier`,
        value: 3160,
        unit: Units.gramy,
      },
      {
        name: `maliny`,
        value: 7300,
        unit: Units.gramy,
      },
    ],
    productStages: [
      {
        name: ProductionStage.Preparation,
        date: 0,
        description: ``,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
      },
    ],
  },
  {
    id: `5`,
    name: `Wino wiśniowe`,
    author: `Browin`,
    ingredients: [
      {
        name: `cukier`,
        value: 2500,
        unit: Units.gramy,
      },
      {
        name: `wiśnie`,
        value: 10000,
        unit: Units.gramy,
      },
    ],
    productStages: [
      {
        name: ProductionStage.Preparation,
        date: 0,
        description: ``,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
      },
    ],
  },
  {
    id: `6`,
    name: `Wino z czerwonych porzeczek`,
    author: `Browin`,
    ingredients: [
      {
        name: `cukier`,
        value: 3160,
        unit: Units.gramy,
      },
      {
        name: `porzeczki`,
        value: 5000,
        unit: Units.gramy,
      },
    ],
    productStages: [
      {
        name: ProductionStage.Preparation,
        date: 0,
        description: ``,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
      },
    ],
  },
  {
    id: `7`,
    name: `Wino z winogron`,
    author: `Browin`,
    ingredients: [
      {
        name: `cukier`,
        value: 2000,
        unit: Units.gramy,
      },
      {
        name: `winogrona`,
        value: 9000,
        unit: Units.gramy,
      },
    ],
    productStages: [
      {
        name: ProductionStage.Preparation,
        date: 0,
        description: ``,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
      },
    ],
  },
];
