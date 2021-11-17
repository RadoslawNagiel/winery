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
    description: ``,
  },
  {
    name: `Odcedzanie owoców`,
    date: 86400000 * 5,
    description: `Moszcz należy przelać do zdezynfekowanego gąsiora, przez sito.`,
  },
  {
    name: `Zakończenie fermentacji`,
    date: 86400000 * 60,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at libero cursus, placerat enim vitae, venenatis lacus. `,
  },
  {
    name: `Zlewanie znad osadu`,
    date: 86400000 * 90,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at libero cursus, placerat enim vitae, venenatis lacus. `,
  },
  {
    name: `Zlewanie znad osadu`,
    date: 86400000 * 120,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at libero cursus, placerat enim vitae, venenatis lacus. `,
  },
  {
    name: `Zlewanie znad osadu`,
    date: 86400000 * 150,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at libero cursus, placerat enim vitae, venenatis lacus. `,
  },
  {
    name: `Butelkowanie`,
    date: 86400000 * 180,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at libero cursus, placerat enim vitae, venenatis lacus. `,
  },
];
