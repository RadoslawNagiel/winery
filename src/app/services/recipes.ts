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
        name: `sułtanek`,
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
        description: `Owoce dokładnie myjemy, rozdrabniamy w niewielkiej ilości wody i wlewamy do wiadra. Dodajemy sok jabłkowy oraz kwiat czarnego bzu.. Rozpuszczamy miód w wodzie (litr wody na 250 g. miodu), podgrzewając na wolnym ogniu. Dodajemy witaminę B₁ i dokładnie mieszamy. Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 4,
        description: `Moszcz przelewamy przez sito, a następnie płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
        description: `Etap ten powinien być wykonany w momencie, kiedy fermentacja ustanie. Wino zlewamy przez rurkę fermentacyjną, w taki sposób, aby oddzielić płyn od osadu.`,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 133,
        description: `Wino przelewamy do butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonione przed światłem.`,
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
        description: `Przygotowany moszcz przelewamy do wiadra. Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
        description: `Moszcz przelewamy przez sito, a następnie płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
        description: `Etap ten powinien być wykonany w momencie, kiedy fermentacja ustanie. Wino zlewamy przez rurkę fermentacyjną, w taki sposób, aby oddzielić płyn od osadu.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
        description: `Zlewanie znad osadu powinno być powtarzane do momentu aż na dnie gąsiora przestanie pojawiać się osad oraz wino będzie całkowicie klarowne. Jeżeli porządany efekt zostanie osiągnięty, możemy przejść do etapu butelkowania wina.`,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
        description: `Wino przelewamy do butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonione przed światłem.`,
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
        description: `Przygotowany moszcz przelewamy do wiadra. Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
        description: `Moszcz przelewamy przez sito, a następnie płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
        description: `Etap ten powinien być wykonany w momencie, kiedy fermentacja ustanie. Wino zlewamy przez rurkę fermentacyjną, w taki sposób, aby oddzielić płyn od osadu.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
        description: `Zlewanie znad osadu powinno być powtarzane do momentu aż na dnie gąsiora przestanie pojawiać się osad oraz wino będzie całkowicie klarowne. Jeżeli porządany efekt zostanie osiągnięty, możemy przejść do etapu butelkowania wina.`,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
        description: `Wino przelewamy do butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonione przed światłem.`,
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
        description: `Przygotowany moszcz przelewamy do wiadra. Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
        description: `Moszcz przelewamy przez sito, a następnie płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
        description: `Etap ten powinien być wykonany w momencie, kiedy fermentacja ustanie. Wino zlewamy przez rurkę fermentacyjną, w taki sposób, aby oddzielić płyn od osadu.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
        description: `Zlewanie znad osadu powinno być powtarzane do momentu aż na dnie gąsiora przestanie pojawiać się osad oraz wino będzie całkowicie klarowne. Jeżeli porządany efekt zostanie osiągnięty, możemy przejść do etapu butelkowania wina.`,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
        description: `Wino przelewamy do butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonione przed światłem.`,
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
        description: `Przygotowany moszcz przelewamy do wiadra. Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
        description: `Moszcz przelewamy przez sito, a następnie płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
        description: `Etap ten powinien być wykonany w momencie, kiedy fermentacja ustanie. Wino zlewamy przez rurkę fermentacyjną, w taki sposób, aby oddzielić płyn od osadu.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
        description: `Zlewanie znad osadu powinno być powtarzane do momentu aż na dnie gąsiora przestanie pojawiać się osad oraz wino będzie całkowicie klarowne. Jeżeli porządany efekt zostanie osiągnięty, możemy przejść do etapu butelkowania wina.`,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
        description: `Wino przelewamy do butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonione przed światłem.`,
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
        description: `Przygotowany moszcz przelewamy do wiadra. Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
        description: `Moszcz przelewamy przez sito, a następnie płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
        description: `Etap ten powinien być wykonany w momencie, kiedy fermentacja ustanie. Wino zlewamy przez rurkę fermentacyjną, w taki sposób, aby oddzielić płyn od osadu.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
        description: `Zlewanie znad osadu powinno być powtarzane do momentu aż na dnie gąsiora przestanie pojawiać się osad oraz wino będzie całkowicie klarowne. Jeżeli porządany efekt zostanie osiągnięty, możemy przejść do etapu butelkowania wina.`,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
        description: `Wino przelewamy do butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonione przed światłem.`,
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
        description: `Przygotowany moszcz przelewamy do wiadra. Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
      },
      {
        name: ProductionStage.Straining,
        date: 86400000 * 7,
        description: `Moszcz przelewamy przez sito, a następnie płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 35,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 63,
        description: `Zlewanie znad osadu`,
      },
      {
        name: ProductionStage.StopFermentation,
        date: 86400000 * 98,
        description: `Etap ten powinien być wykonany w momencie, kiedy fermentacja ustanie. Wino zlewamy przez rurkę fermentacyjną, w taki sposób, aby oddzielić płyn od osadu.`,
      },
      {
        name: ProductionStage.Drainage,
        date: 86400000 * 154,
        description: `Zlewanie znad osadu powinno być powtarzane do momentu aż na dnie gąsiora przestanie pojawiać się osad oraz wino będzie całkowicie klarowne. Jeżeli porządany efekt zostanie osiągnięty, możemy przejść do etapu butelkowania wina.`,
      },
      {
        name: ProductionStage.Bottling,
        date: 86400000 * 210,
        description: `Wino przelewamy do butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonione przed światłem.`,
      },
    ],
  },
];
