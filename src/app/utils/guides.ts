import { Guide } from "../utils/interfaces";

export const GUIDES: Guide[] = [
  {
    slug: `podstawowy-sprzet-do-produkcji-wina`,
    title: `Podstawowy sprzęt do produkcji wina`,
    description: `• wiadro fermentacyjne, z plastiku odpowiedniego do przechowywania żywności <br>
    • przykrywka do wiadra z rurką fermentacyjną <br>
    • duży lejek <br>
    • duże sito <br>
    • duża drewniana lub plastikowa łyżka <br>
    • szklany balon lub gąsior <br>
    • zatyczka do gąsiora z rurką fermentacyjną <br>
    • plastikowy lub gumowy wężyk do ściągania wina <br>
    • butelki do wina <br>
    • korkownica wraz z korkami <br>
    • sprzęt do czyszczenia i sterylizacji <br>
    • termometr <br>`,
    guides: [],
  },
  {
    slug: `sterylizacja`,
    title: `Sterylizacja`,
    description: `Bardzo ważnym elementem produkcji wina, jest jak największe zachowanie czystości aparatury (wszystkiego co będzie miało kontakt z winem). Sprzętu nie wystarczy tylko umyć, ale zawsze należy go wysterylizować odpowiednimi środkami, takimi jak pirosiarczyn sodu, czy przeróżnymi innymi preparatami do sterylizacji i dezynfekcji. Środki te należy stosować zgodnie z zaleceniami producenta.`,
    guides: [],
  },
  {
    slug: `fermentacja`,
    title: `Fermentacja`,
    description: `Jest to proces rozkładania cukrów przez enzymy (wytwarzane przez drożdże), w którym powstaje alkohol oraz dwutlenek węgla. Najważniejszą fazą fermentacji jest fermentacja burzliwa, która trwa około 2-4 dni i rozpoczyna się po dodaniu wszystkich składników.    Najlepszą temperaturą dla fermentacji jest 18-24°C. Zbyt wysoka temperatura (zależnie od rodzaju, około 50°C) zabija drożdże, zbyt niska natomiast sprawia, że przestają one pracować. Podczas procesu fermentacji wytwarza się dwutlenek węgla, który powinien wydostać się z pojemnika za pomocą rurki fermentacyjnej. Rurkę tę należy wypełnić do połowy wodą tak aby dwutlenek węgla mógł się wydostać na zewnątrz, ale żeby tlen nie dostawał się do środka. Należy kontrolować poziom wody w rurce, gdyż może ona po jakimś czasie wyparować. Końcówkę rurki można też zatkać kawałkiem wacika, aby muszki nie mogły dostać się do środka.`,
    guides: [
      {
        name: `Zatrzymanie fermentacji`,
        slug: `zatrzymanie-fermentacji`,
      },
    ],
  },
  {
    slug: `przygotowywanie-syropu-cukrowego`,
    title: `Przygotowywanie syropu cukrowego`,
    description: `Cukier oraz wodę (lub część wina) umieszczamy w garnku. Całość podgrzewamy, często mieszając, do momentu całkowitego rozpuszczenia cukru. Syrop przed dodaniem do wina, należy ostudzić do temperatury mniejszej niż 30°C.<br>
    Objętość syropu zawierającego 1 kilogram cukru rozpuszczonego w litrze wody, wynosi około 1.6 litra.`,
    guides: [
      {
        name: `Moc wina`,
        slug: `moc-wina`,
      },
    ],
  },
  {
    slug: `zlewanie-znad-osadu`,
    title: `Zlewanie znad osadu`,
    description: `Aby zlać wino znad osadu, należy koniec wężyka zanurzyć do połowy zawartości gąsiora. Drugi koniec wężyka mocno zasysamy i umieszczamy w drugim gąsiorze, umieszczonym poniżej pierwszego. W trakcie zlewania należy stale kontrolować zanurzenie wężyka w winie. Jego końcówka musi ciągle znajdować się poniżej płynu, ale powyżej osadu. W ten sposób zlewamy całe wino, pozostawiając osad na dnie pierwszego gąsiora.`,
    guides: [
      {
        name: `Sterylizacja`,
        slug: `sterylizacja`,
      },
    ],
  },
  {
    slug: `butelkowanie-wina`,
    title: `Butelkowanie wina`,
    description: `Jeżeli wino nie posiada już osadu i jest całkowicie klarowne, możemy je zabutelkować. Wino nalewamy do wysterylizowanych butelek. Następnie butelki zatykamy korkami przy użyciu korkownicy. Między korkiem a powierzchnią wina, powinno być około 13 mm przerwy. Na butelki warto nakleić etykiety zawierające datę produkcji, moc i rodzaj wina. Po zabutelkowaniu, wino powinno przebywać w takiej pozycji, aby korek miał stały kontakt z płynem, co zapobiega wyschnięciu korka. Wino najlepiej dojrzewa w temperaturze około 15°C. W zależności od mocy, wino może dojrzewać przez 9-24 miesiące. Im mocniejsze wino, tym dłużej powinno ono dojrzewać.`,
    guides: [
      {
        name: `Sterylizacja`,
        slug: `sterylizacja`,
      },
    ],
  },
  {
    slug: `zatrzymanie-fermentacji`,
    title: `Zatrzymanie fermentacji`,
    description: `Jeżeli przez rurkę nie wydostaje się już dwutlenek węgla i poziom wody w niej jest stale równy, oznacza to że drożdże przestały pracować. Jeżeli nie planujemy już dosładzać wina (aby zmienić jego słodkość), nie musimy pozbywać się pozostałych drożdży. W przeciwnym wypadku musimy użyć jednej z poniższych metod.<br>
    <b>1) Zabicie drożdży alkoholem</b><br>
    Zależnie od rodzaju drożdży, mają one różny poziom tolerancji na alkohol. Możemy pozbyć się drożdży, jeżeli moc wytworzonego alkoholu osiągnie ten poziom. Nie należy dolewać do wina wysokoprocentowego alkoholu w celu pozbycia się drożdży.<br>
    <b>2) Zabicie drożdży pirosiarczynem potasu</b><br>
    Pirosiarczynu potasu można używać nie tylko do dezynfekcji, ale również do pozbycia się drożdży. Dodatkowo stabilizuje on wino, konserwuje je i zabezpiecza. Pirosiarczyn może być jednak potem wyczuwalny w winie. Zależnie od rodzaju drożdży, zaleca się dodanie różnej ilości pirosiarczynu. Dla słabszych drożdży będzie to około 1 gram na 10 litrów wina. Dla mocniejszych, wartość ta wzrasta do około 2,5 grama na 10 litrów. Po dodaniu siarki należy sprawdzić czy fermentacja faktycznie ustała. <br>
    <b>3) Zabicie drożdży wysoką temperaturą</b><br>
    Drożdże obumierają w wysokiej temperaturze. Przelewamy wino do garnka i podgrzewamy do ponad 50°C. Utrzymujemy tę temperaturę przez kilka minut a następnie pozostawiamy wino do ostudzenia. Po procesie tym należy sprawdzić czy fermentacja faktycznie ustała.`,
    guides: [
      {
        name: `Fermentacja`,
        slug: `fermentacja`,
      },
    ],
  },
  {
    slug: `moc-wina`,
    title: `Moc wina`,
    description: `Możemy zaplanować jaką moc będzie miało nasze wino. Każde 17 g cukru na litr roztworu da nam 1% alkoholu. Należy jednak pamiętać, że drożdże mają swoją maksymalną tolerancję na alkohol. Kiedy mamy już stworzony moszcz (bez dodatkowego cukru), możemy jego część przelać przez sito do probówki. Następnie w probówce umieszczamy cukromierz i zakręcamy nim, aby pozbyć się pęcherzyków powietrza, które mogły na nim osiąść. Aby pomiar był jak najbardziej dokładny, płyn powinien mieć temperaturę 20°C. Następnie odczytujemy z cukromierza liczbę w skali Ballinga. 1 stopień BLG to 10 g cukru na 1 kg roztworu. Zależnie od składników moszczu, ten pomiar będzie oznaczał co innego.<br>
    <b>Przykład</b><br>
    Chcemy wyprodukować 5 litrów wina o mocy 10%. Po zbadaniu moszczu cukromierzem otrzymujemy wynik 5 BLG. oznacza to że w 1kg roztworu znajduje się 50g cukru. Dla uproszczenia przyjmijmy, że 1 litr roztworu waży 1kg. Tak więc w litrze roztworu mamy 50g cukru. Aby dowiedzieć jaką moc otrzymamy, musimy podzielić ten cukier przez 17. Wychodzi nam około 3% (50 : 17 ≈ 2.94). Tak więc brakuje nam jeszcze 7% do oczekiwanej mocy. Po pomnożeniu 7 × 17 wiemy, że potrzebujemy dodać 119 g na litr. Produkujemy 5 litrów, więc w sumie potrzebujemy dodać 595 gramów cukru.`,
    guides: [
      {
        name: `Przygotowywanie syropu cukrowego`,
        slug: `przygotowywanie-syropu-cukrowego`,
      },
    ],
  },
];
