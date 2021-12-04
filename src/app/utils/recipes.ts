import { ProductionStage, Recipe, Units } from "../utils/interfaces";

export const RECIPES: Recipe[] = [
  {
    id: `s-1`,
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
    id: `s-2`,
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
        description: `Owoce dokładnie myjemy, rozdrabniamy w niewielkiej ilości wody i wlewamy do wiadra.`,
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
    id: `s-3`,
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
        description: `Jabłka myjemy i drobno kroimy lub miażdżymy. Najlepiej wycisnąć je w sokowirówce. Miazgę lub sok umieszczamy w wiadrze.`,
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
    id: `s-4`,
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
        description: `WIśnie drylujemy i wraz z sokiem przelewamy do wiadra.`,
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
    id: `s-5`,
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
        description: `Porzeczki obrywamy z łodyżek. Owoce płuczemy, miażdżymy i umieszczamy w wiadrze.`,
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
    id: `s-6`,
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
        description: `Przygotowujemy sok z winogron.`,
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
