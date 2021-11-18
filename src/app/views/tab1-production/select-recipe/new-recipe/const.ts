import { ProductStage } from "src/app/utils/interfaces";

/*

      description: `1. Przygotować sprzęt <br> 2. Zdezynfekować sprzęt <br> 3. Przygotowanie `,
      description: `dosłodzenie do max procent`,
      description: `kiedy przestanie pracować zakonczenie, dosłodzenie do słodkości`,
      description: `powtarzać do wyklarowania i do braku osadu`,

  */

export const PRODUC_STAGES: ProductStage[] = [
  {
    name: `Przygotowanie moszczu`,
    date: 0,
    description: `Przygotowany moszcz przelewamy do wiadra. Przygotowujemy zaczyn drożdżowy, według zaleceń producenta i dodajemy go do moszczu. Połowę zalecanego cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do wiadra. Moszcz powinien mieć obiętość okkoło 90% ostatecznego litrażu. Wiadro zamykamy pokrywą, wraz z rurką fermentacyjną, w połowie wypełnioną wodą. Moszcz należy mieszać przynajmnieej raz dziennie. Temperatura moszczu powinna wynosić około 21°C`,
  },
  {
    name: `Odcedzanie owoców`,
    date: 86400000 * 7,
    description: `Moszcz przelewamy przez sito, a następnie płyn wlewamy do gąsiora. Drugą połowę cukru, rozpuszczamy w wodzie według poniższego kalkulatora. Czekamy aż syrop cukrowy ostygnie do temperatury mniejszej niż 30°C, po czym dolewamy go do gąsiora. Gąsior należy zatkać korkiem z rurką fermentacyjną.`,
  },
  {
    name: `Pierwsze zlewanie`,
    date: 86400000 * 28,
    description: `Zlewanie znad osadu`,
  },
  {
    name: `Drugie zlewanie`,
    date: 86400000 * 56,
    description: `Zlewanie znad osadu`,
  },
  {
    name: `Przerwanie fermentacji`,
    date: 86400000 * 112,
    description: `Etap ten powinien być wykonany w momencie, kiedy fermentacja ustanie. Wino zlewamy przez rurkę fermentacyjną, w taki sposób, aby oddzielić płyn od osadu.`,
  },
  {
    name: `Zlewanie znad osadu`,
    date: 86400000 * 168,
    description: `Zlewanie znad osadu powinno być powtarzane do momentu aż na dnie gąsiora przestanie pojawiać się osad oraz wino będzie całkowicie klarowne. Jeżeli porządany efekt zostanie osiągnięty, możemy przejść do etapu butelkowania wina.`,
  },
  {
    name: `Butelkowanie`,
    date: 86400000 * 224,
    description: `Wino przelewamy do butelek, które następnie zatykamy przy pomocy korkownicy. Zabutelkowane wino, powinno dojrzewać w pozycji leżącej, w temperaturze około 15°C, oraz powinno być osłonione przed światłem.`,
  },
];
