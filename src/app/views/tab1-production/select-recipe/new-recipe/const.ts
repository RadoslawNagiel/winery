import { ProductStage, ProductionStage } from "src/app/utils/interfaces";

export const PRODUC_STAGES: ProductStage[] = [
  {
    name: ProductionStage.Preparation,
    date: 0,
    description: `Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
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
];
