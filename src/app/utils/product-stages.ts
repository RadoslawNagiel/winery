import {
  ProductStage,
  ProductStageDescription,
  ProductionStage,
} from "../utils/interfaces";

export const PRODUC_STAGES: ProductStage[] = [
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
];

export const PRODUC_STAGES_DESCRIPTIONS: ProductStageDescription[] = [
  {
    name: ProductionStage.Preparation,
    description: `Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć objętość około 90% ostatecznego litrażu. Wiadro zamykamy pokrywką z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmniej raz dziennie. Temperatura moszczu powinna wynosić około 21°C.`,
    guides: [
      {
        name: `Podstawowy sprzęt`,
        slug: `podstawowy-sprzet-do-produkcji-wina`,
      },
      {
        name: `Sterylizacja`,
        slug: `sterylizacja`,
      },
      {
        name: `Przygotowywanie syropu cukrowego`,
        slug: `przygotowywanie-syropu-cukrowego`,
      },
      {
        name: `Moc wina`,
        slug: `moc-wina`,
      },
    ],
  },
  {
    name: ProductionStage.Straining,
    description: `Moszcz przelewamy przez sito, a następnie otrzymany płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
    guides: [
      {
        name: `Sterylizacja`,
        slug: `sterylizacja`,
      },
      {
        name: `Przygotowywanie syropu cukrowego`,
        slug: `przygotowywanie-syropu-cukrowego`,
      },
      {
        name: `Moc wina`,
        slug: `moc-wina`,
      },
    ],
  },
  {
    name: ProductionStage.Drainage,
    description: `Proces zlewania znad osadu został opisany w poradniku ‘zlewanie znad osadu’. Pamiętaj o tym, aby cała aparatura była sterylna.`,
    guides: [
      {
        name: `Zlewanie znad osadu`,
        slug: `zlewanie-znad-osadu`,
      },
    ],
  },
  {
    name: ProductionStage.StopFermentation,
    description: ``,
    descriptions: [
      `Wino zlewamy znad osadu. Następnie gąsior można już szczelnie zamknąć (bez rurki fermentacyjnej). Należy po kilku dniach sprawdzić, czy w gąsiorze nie zbiera się już dwutlenek węgla. Jeśli tak będzie, należy gąsior znowu zatkać rurką fermentacyjną i cofnąć wykonanie tego etapu.`,
      `Wino zlewamy znad osadu. Następnie próbujemy i dosładzamy według uznania. Możemy wspierać się poniższym kalkulatorem, ale należy uważać, żeby nie przesadzić z cukrem. Po dosłodzeniu ponownie próbujemy i sprawdzamy czy osiągnęliśmy oczekiwaną słodkość. Wino nie powinno już pracować, więc możemy je szczelnie zamknąć (bez rurki fermentacyjnej). Uwaga! Należy sprawdzić po kilku dniach, czy wino nie wznowiło pracy. Zadziać się tak może, kiedy nie osiągnęliśmy jeszcze alkoholu równego tolerancji drożdży. Jeśli tak będzie, należy gąsior znowu zatkać z użyciem rurki fermentacyjnej i cofnąć wykonanie tego etapu.`,
      `Wino zlewamy znad osadu. Następnie należy pozbyć się pozostałych drożdży, aby po dosłodzeniu nie był już wytwarzany alkohol. Proces ten został opisany w poradniku ‘Zatrzymanie fermentacji’. Następnie próbujemy wino i dosładzamy według uznania. Możemy wspierać się poniższym kalkulatorem, ale należy uważać, żeby nie przesadzić z cukrem. Po dosłodzeniu ponownie próbujemy i sprawdzamy czy osiągnęliśmy oczekiwaną słodkość. Wino nie powinno już pracować, więc możemy je szczelnie zamknąć (bez rurki fermentacyjnej). Uwaga! Należy sprawdzić po kilku dniach, czy wino nie wznowiło pracy. Jeśli tak się zadzieje, oznacza to, że proces pozbycia się drożdży nie udał się i należy go powtórzyć.`,
    ],
    guides: [
      {
        name: `Fermentacja`,
        slug: `fermentacja`,
      },
      {
        name: `Zatrzymanie fermentacji`,
        slug: `zatrzymanie-fermentacji`,
      },
      {
        name: `Przygotowywanie syropu cukrowego`,
        slug: `przygotowywanie-syropu-cukrowego`,
      },
    ],
  },
  {
    name: ProductionStage.Bottling,
    description: `Jeśli wino jest klarowne i na dnie gąsiora nie zbiera się już osad, możemy przejść do butelkowania. Wino przelewamy do sterylnych butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonięte przed światłem.`,
    guides: [
      {
        name: `Butelkowanie wina`,
        slug: `butelkowanie-wina`,
      },
    ],
  },
];