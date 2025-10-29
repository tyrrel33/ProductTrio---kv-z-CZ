import { Question } from '../types';

export const ALL_QUIZ_QUESTIONS: Question[] = [
  {
    questionText: 'Kdo tvoří "Produktové trio" (Product Trio) podle Teresy Torres?',
    answerOptions: [
      { answerText: 'Product Manager, Marketing Manager, a Scrum Master', isCorrect: false },
      { answerText: 'Product Manager, Product Designer, a Lead Engineer', isCorrect: true },
      { answerText: 'CEO, CTO, a COO', isCorrect: false },
      { answerText: 'Project Manager, Business Analyst, a QA Engineer', isCorrect: false },
    ],
    explanation: 'Produktové trio je jádrem týmu pro kontinuální objevování. Skládá se z Product Managera, Product Designera a Lead Engineera, kteří společně přebírají odpovědnost za produktové výsledky.',
  },
  {
    questionText: 'Jaký je hlavní účel Stromu příležitostí (Opportunity Solution Tree)?',
    answerOptions: [
      { answerText: 'Vytvořit roadmapu produktu na další rok.', isCorrect: false },
      { answerText: 'Vizualizovat, jak řešení přispívají k požadovanému výsledku (outcome).', isCorrect: true },
      { answerText: 'Sledovat postup implementace jednotlivých funkcí.', isCorrect: false },
      { answerText: 'Prioritizovat bugy a technický dluh.', isCorrect: false },
    ],
    explanation: 'Strom příležitostí je vizuální nástroj, který pomáhá týmům propojit jejich práci (řešení a experimenty) s potřebami zákazníků (příležitostmi) a obchodními cíli (výsledky).',
  },
  {
    questionText: 'Co je na vrcholu Stromu příležitostí?',
    answerOptions: [
      { answerText: 'Seznam funkcí (features)', isCorrect: false },
      { answerText: 'Požadovaný výsledek (desired outcome)', isCorrect: true },
      { answerText: 'První příležitost (opportunity)', isCorrect: false },
      { answerText: 'Experiment', isCorrect: false },
    ],
    explanation: 'Celý strom začíná jasně definovaným a měřitelným výsledkem. Vše ostatní ve stromu – příležitosti, řešení a experimenty – by mělo být zaměřeno na dosažení tohoto výsledku.',
  },
  {
    questionText: 'Co představuje "příležitost" (opportunity) v kontextu Stromu příležitostí?',
    answerOptions: [
      { answerText: 'Konkrétní nápad na funkci produktu.', isCorrect: false },
      { answerText: 'Potřeba, bolest nebo touha zákazníka.', isCorrect: true },
      { answerText: 'Mezera na trhu, kterou lze využít.', isCorrect: false },
      { answerText: 'Technologická inovace.', isCorrect: false },
    ],
    explanation: 'Příležitosti jsou potřeby, bolesti a touhy zákazníků. Nejsou to řešení. Objevování a prioritizace těchto příležitostí je klíčem k vytváření produktů, které zákazníci milují.',
  },
  {
    questionText: 'Proč Teresa Torres zdůrazňuje rozdíl mezi "výsledky" (outcomes) a "výstupy" (outputs)?',
    answerOptions: [
      { answerText: 'Protože výstupy jsou důležitější pro byznys.', isCorrect: false },
      { answerText: 'Aby se týmy soustředily na dodávání hodnoty, ne jen na dodávání funkcí.', isCorrect: true },
      { answerText: 'Protože výstupy je snazší měřit.', isCorrect: false },
      { answerText: 'Tento rozdíl není v její metodice důležitý.', isCorrect: false },
    ],
    explanation: 'Soustředění na výstupy (počet dodaných funkcí) může vést k tzv. "feature factory", kde tým chrlí funkce bez ohledu na jejich dopad. Zaměření na výsledky (změna v chování zákazníků) zajišťuje, že tým vytváří skutečnou hodnotu.',
  },
  {
    questionText: 'Jaký je cíl experimentů na nejnižší úrovni Stromu příležitostí?',
    answerOptions: [
      { answerText: 'Co nejrychleji vytvořit finální řešení.', isCorrect: false },
      { answerText: 'Testovat základní předpoklady o navrhovaném řešení.', isCorrect: true },
      { answerText: 'Získat co nejvíce uživatelských dat.', isCorrect: false },
      { answerText: 'Splnit požadavky stakeholderů.', isCorrect: false },
    ],
    explanation: 'Experimenty slouží k rychlému a levnému ověření klíčových předpokladů (např. bude to zákazník používat? rozumí tomu? přinese to hodnotu?) předtím, než se investuje do vývoje plnohodnotného řešení.',
  },
  {
    questionText: 'Co je hlavním vstupem pro objevování příležitostí?',
    answerOptions: [
      { answerText: 'Požadavky od vedení firmy.', isCorrect: false },
      { answerText: 'Analýza konkurence.', isCorrect: false },
      { answerText: 'Rozhovory se zákazníky a pozorování jejich chování.', isCorrect: true },
      { answerText: 'Brainstorming nápadů v týmu.', isCorrect: false },
    ],
    explanation: 'Kontinuální objevování je postaveno na pravidelném kontaktu se zákazníky. Rozhovory, pozorování a další metody výzkumu jsou klíčové pro identifikaci skutečných potřeb a příležitostí.',
  },
  {
    questionText: 'Jaký by měl být ideální rytmus pro kontakt se zákazníky podle "Continuous Discovery Habits"?',
    answerOptions: [
      { answerText: 'Jednou za kvartál.', isCorrect: false },
      { answerText: 'Každý týden.', isCorrect: true },
      { answerText: 'Pouze na začátku projektu.', isCorrect: false },
      { answerText: 'Kdykoliv se objeví problém.', isCorrect: false },
    ],
    explanation: 'Teresa Torres doporučuje, aby produktové trio mluvilo se zákazníky každý týden. Tento pravidelný kontakt zajišťuje stálý přísun vhledů a pomáhá týmu udržet si empatii k uživatelům.',
  },
  {
    questionText: 'Co NENÍ jedním z hlavních typů předpokladů (assumptions), které testujeme?',
    answerOptions: [
        { answerText: 'Proveditelnost (Feasibility) - Je to technicky možné?', isCorrect: false },
        { answerText: 'Životaschopnost (Viability) - Je to dobré pro byznys?', isCorrect: false },
        { answerText: 'Ziskovost (Profitability) - Vydělá nám to okamžitě peníze?', isCorrect: true },
        { answerText: 'Žádoucnost (Desirability) - Chtějí to zákazníci?', isCorrect: false },
    ],
    explanation: 'Teresa Torres se zaměřuje na čtyři klíčové předpoklady: Desirability (chtějí to?), Viability (je to dobré pro byznys?), Feasibility (umíme to postavit?) a Usability (umí to zákazníci použít?). Ziskovost je sice součástí životaschopnosti, ale není to samostatná hlavní kategorie rizika.',
  },
  {
    questionText: 'Jaký je hlavní rozdíl mezi "přímým dotazováním" a "vyprávěním příběhů" při rozhovorech se zákazníky?',
    answerOptions: [
        { answerText: 'Přímé dotazování se zaměřuje na budoucnost, vyprávění příběhů na minulost.', isCorrect: true },
        { answerText: 'Vyprávění příběhů je méně spolehlivé než přímé dotazování.', isCorrect: false },
        { answerText: 'Přímé dotazování je rychlejší a efektivnější.', isCorrect: false },
        { answerText: 'Neexistuje žádný podstatný rozdíl.', isCorrect: false },
    ],
    explanation: 'Lidé jsou špatní v předpovídání svého budoucího chování. Proto je efektivnější ptát se na konkrétní minulé zkušenosti ("vyprávějte mi o posledním, kdy jste..."), než se ptát na hypotetické situace ("koupili byste si, kdyby...?").',
  },
  {
    questionText: 'Co je to "mapování prožitku" (experience mapping) a jak pomáhá při objevování?',
    answerOptions: [
        { answerText: 'Je to způsob, jak navrhnout uživatelské rozhraní.', isCorrect: false },
        { answerText: 'Je to vizualizace cesty zákazníka, která pomáhá identifikovat jeho bolesti a potřeby.', isCorrect: true },
        { answerText: 'Je to technika pro prioritizaci funkcí v backlogu.', isCorrect: false },
        { answerText: 'Je to metoda pro testování použitelnosti hotového produktu.', isCorrect: false },
    ],
    explanation: 'Mapování prožitku (nebo Cesty zákazníka) vizualizuje kroky, které zákazník podniká k dosažení svého cíle. Pomáhá týmu vcítit se do zákazníka a odhalit příležitosti ke zlepšení.',
  },
  {
    questionText: 'Při objevování příležitostí, na co bychom se měli zaměřit jako první?',
    answerOptions: [
        { answerText: 'Na řešení, která jsou snadno implementovatelná.', isCorrect: false },
        { answerText: 'Na příležitosti, které ovlivňují nejvíce zákazníků nebo mají největší dopad.', isCorrect: true },
        { answerText: 'Na nápady, které přicházejí od nejdůležitějších stakeholderů.', isCorrect: false },
        { answerText: 'Na nejnovější technologické trendy.', isCorrect: false },
    ],
    explanation: 'Efektivní je začít s příležitostmi, které řeší problém pro velkou část cílové skupiny nebo mají největší potenciální dopad na požadovaný výsledek. Velikost a dopad jsou klíčové faktory pro prioritizaci.',
  },
  {
    questionText: 'Jaký je účel "testu falešných dveří" (fake door test)?',
    answerOptions: [
        { answerText: 'Otestovat, zda je design vizuálně přitažlivý.', isCorrect: false },
        { answerText: 'Změřit reálný zájem o funkci předtím, než ji vyvineme.', isCorrect: true },
        { answerText: 'Zjistit, zda uživatelé rozumí, jak funkce funguje.', isCorrect: false },
        { answerText: 'Získat zpětnou vazbu na cenu produktu.', isCorrect: false },
    ],
    explanation: 'Test falešných dveří spočívá v prezentaci funkce (např. tlačítkem v UI), která ještě neexistuje. Kliknutí na ni měří zájem (desirability) a umožňuje týmu rozhodnout, zda se do vývoje vyplatí investovat.',
  },
  {
    questionText: 'Proč je důležité, aby se inženýr (Lead Engineer) účastnil rozhovorů se zákazníky?',
    answerOptions: [
        { answerText: 'Aby mohl okamžitě odhadnout náročnost implementace nápadů.', isCorrect: false },
        { answerText: 'Aby slyšel problémy zákazníků z první ruky a lépe chápal kontext.', isCorrect: true },
        { answerText: 'Aby mohl zákazníkům vysvětlit technická omezení.', isCorrect: false },
        { answerText: 'Není to důležité, stačí, když dostane specifikaci.', isCorrect: false },
    ],
    explanation: 'Přímá účast inženýra buduje empatii, poskytuje technický kontext a často vede k inovativnějším a jednodušším technickým řešením, protože inženýr rozumí skutečnému problému.',
  },
  {
    questionText: 'Jak se liší "předpoklady" (assumptions) od "hypotéz" (hypotheses)?',
    answerOptions: [
        { answerText: 'Jsou to synonyma, znamenají totéž.', isCorrect: false },
        { answerText: 'Předpoklad je tvrzení, které považujeme za pravdivé; hypotéza je formulace pro jeho otestování.', isCorrect: true },
        { answerText: 'Hypotézy se používají jen ve vědě, předpoklady v byznysu.', isCorrect: false },
        { answerText: 'Předpoklady jsou vždy negativní, hypotézy pozitivní.', isCorrect: false },
    ],
    explanation: 'Nejdříve identifikujeme předpoklady ("věříme, že zákazníci chtějí X"). Poté z nich formulujeme testovatelnou hypotézu ("Pokud nabídneme funkci X, alespoň 20 % uživatelů ji použije v prvním týdnu").',
  },
  {
    questionText: 'Co znamená pojem "analýza příběhů" (story analysis) v kontextu rozhovorů?',
    answerOptions: [
        { answerText: 'Psaní uživatelských příběhů (user stories) pro backlog.', isCorrect: false },
        { answerText: 'Systematické rozebírání přepisů rozhovorů za účelem nalezení vzorců a potřeb.', isCorrect: true },
        { answerText: 'Porovnávání fiktivních příběhů a jejich dopadu na zákazníky.', isCorrect: false },
        { answerText: 'Vytváření marketingových příběhů o produktu.', isCorrect: false },
    ],
    explanation: 'Po sběru příběhů od zákazníků následuje jejich analýza, kde tým hledá opakující se témata, bolesti, touhy a kontexty, ze kterých se rodí příležitosti pro Strom příležitostí.',
  },
  {
    questionText: 'Jaký je nejlepší způsob, jak prioritizovat příležitosti na Stromu příležitostí?',
    answerOptions: [
        { answerText: 'Podle toho, která příležitost má nejjednodušší řešení.', isCorrect: false },
        { answerText: 'Podle toho, která nejvíce přispěje k dosažení požadovaného výsledku.', isCorrect: true },
        { answerText: 'Podle toho, co si přeje CEO.', isCorrect: false },
        { answerText: 'Podle hlasování v týmu.', isCorrect: false },
    ],
    explanation: 'Prioritizace by měla být vždy vázána na dopad. Tým by se měl ptát: "Která z těchto příležitostí nám nejvíce pomůže pohnout s naší metrikou požadovaného výsledku?"',
  },
  {
    questionText: 'Co je hlavním rizikem, pokud se tým zaměří pouze na "řešení" bez pochopení "příležitostí"?',
    answerOptions: [
        { answerText: 'Projekt bude trvat déle a bude dražší.', isCorrect: false },
        { answerText: 'Tým může vytvořit produkt, který nikdo nepotřebuje nebo nechce.', isCorrect: true },
        { answerText: 'Tým bude mít příliš mnoho nápadů.', isCorrect: false },
        { answerText: 'Vznikne konflikt mezi designéry a vývojáři.', isCorrect: false },
    ],
    explanation: 'Přeskakování fáze objevování příležitostí a skákání rovnou k řešením vede k riziku, že se řeší nesprávný problém. Výsledkem je plýtvání časem a zdroji na funkce, které nepřinášejí hodnotu.',
  },
  {
    questionText: 'Jaký je cíl "kontinuálního mapování příležitostí" (continuous opportunity mapping)?',
    answerOptions: [
        { answerText: 'Vytvořit finální a neměnný seznam všech potřeb zákazníků.', isCorrect: false },
        { answerText: 'Udržovat živý a vyvíjející se obraz prostoru potřeb zákazníků.', isCorrect: true },
        { answerText: 'Nahradit produktovou roadmapu.', isCorrect: false },
        { answerText: 'Dokumentovat všechny nápady, které tým kdy měl.', isCorrect: false },
    ],
    explanation: 'Mapa příležitostí není statický dokument. Je to nástroj, který se neustále vyvíjí, jak tým mluví se zákazníky a učí se více o jejich světě. Pomáhá vizualizovat a strukturovat objevené potřeby.',
  },
  {
    questionText: 'Co NENÍ dobrým zdrojem pro objevování příležitostí?',
    answerOptions: [
        { answerText: 'Tikety od zákaznické podpory.', isCorrect: false },
        { answerText: 'Analytická data o chování uživatelů v produktu.', isCorrect: false },
        { answerText: 'Seznam funkcí, které má konkurence a my ne.', isCorrect: true },
        { answerText: 'Výsledky z uživatelského testování.', isCorrect: false },
    ],
    explanation: 'Pouhé kopírování konkurence je reaktivní a nevede k inovacím. Tým by se měl soustředit na pochopení potřeb vlastních zákazníků. Ostatní zdroje jsou skvělým vstupem.',
  },
  {
    questionText: 'Jaký je rozdíl mezi prototypem pro testování použitelnosti (usability) a experimentem pro testování hodnoty (value)?',
    answerOptions: [
        { answerText: 'Prototyp pro použitelnost je interaktivní, experiment pro hodnotu je jen obrázek.', isCorrect: false },
        { answerText: 'Test použitelnosti zjišťuje, ZDA to lidé umí použít. Test hodnoty zjišťuje, ZDA to lidé budou používat.', isCorrect: true },
        { answerText: 'Testování použitelnosti se dělá až po vydání, testování hodnoty předtím.', isCorrect: false },
        { answerText: 'Žádný rozdíl, oba testují totéž.', isCorrect: false },
    ],
    explanation: 'Můžete mít dokonale použitelnou funkci, kterou nikdo nechce (selhání hodnoty). Experimenty s hodnotou se zaměřují na ověření zájmu, zatímco testy použitelnosti ověřují snadnost použití.',
  },
  {
    questionText: 'Co znamená "iterovat na řešení" (iterating on a solution)?',
    answerOptions: [
        { answerText: 'Vytvořit perfektní řešení na první pokus.', isCorrect: false },
        { answerText: 'Postupně vylepšovat řešení na základě zpětné vazby z experimentů.', isCorrect: true },
        { answerText: 'Zahodit původní nápad a začít úplně od začátku.', isCorrect: false },
        { answerText: 'Přidávat další a další funkce, dokud nejsou všichni spokojeni.', isCorrect: false },
    ],
    explanation: 'Iterace je klíčová. Místo snahy o dokonalost tým vytvoří nejjednodušší verzi řešení (MVP nebo prototyp), otestuje ji, poučí se a na základě toho ji vylepší v dalším cyklu.',
  },
  {
    questionText: 'Proč je důležité definovat měřitelný "požadovaný výsledek" (desired outcome)?',
    answerOptions: [
        { answerText: 'Protože to vyžaduje management.', isCorrect: false },
        { answerText: 'Aby měl tým jasný cíl a mohl měřit svůj pokrok a dopad.', isCorrect: true },
        { answerText: 'Aby bylo možné přesně naplánovat časový harmonogram projektu.', isCorrect: false },
        { answerText: 'Aby se předešlo změnám v průběhu vývoje.', isCorrect: false },
    ],
    explanation: 'Měřitelný výsledek (např. "zvýšit retenci nových uživatelů o 15 %") dává týmu jasné "proč". Umožňuje jim autonomně rozhodovat, které příležitosti a řešení mají největší potenciál k dosažení cíle.',
  },
  {
    questionText: 'Jaký typ otázky je nejlepší pro zahájení rozhovoru se zákazníkem o určitém tématu?',
    answerOptions: [
        { answerText: 'Uzavřená otázka typu ano/ne.', isCorrect: false },
        { answerText: '"Proč máte tento problém?"', isCorrect: false },
        { answerText: '"Řekněte mi o posledním, kdy jste..."', isCorrect: true },
        { answerText: '"Co si myslíte o našem novém nápadu na funkci?"', isCorrect: false },
    ],
    explanation: 'Otevřené otázky zaměřené na konkrétní minulou událost jsou nejlepší. Vyvolávají vzpomínky a vedou k vyprávění příběhů plných detailů, potřeb a kontextu.',
  },
  {
    questionText: 'V jaké fázi by mělo produktové trio zapojit zbytek týmu (vývojáře, marketéry, atd.)?',
    answerOptions: [
        { answerText: 'Až když je řešení plně navrženo a připraveno k implementaci.', isCorrect: false },
        { answerText: 'Průběžně, aby sdíleli poznatky a získali jejich perspektivu.', isCorrect: true },
        { answerText: 'Pouze během plánovacích schůzek jednou za kvartál.', isCorrect: false },
        { answerText: 'Nikdy, trio je plně autonomní.', isCorrect: false },
    ],
    explanation: 'Ačkoliv trio vede objevování, je klíčové pravidelně sdílet poznatky s celým týmem. To buduje sdílené porozumění, zvyšuje motivaci a umožňuje ostatním přispět svými nápady a perspektivou.',
  },
  {
    questionText: 'Co je to "Concierge test"?',
    answerOptions: [
        { answerText: 'Test, který ověřuje, zda je produkt luxusní.', isCorrect: false },
        { answerText: 'Manuální poskytnutí služby zákazníkovi k ověření hodnoty před automatizací.', isCorrect: true },
        { answerText: 'Automatizovaný test, který běží na pozadí.', isCorrect: false },
        { answerText: 'Uživatelské testování prováděné v hotelové hale.', isCorrect: false },
    ],
    explanation: 'U Concierge testu neexistuje žádná technologie. Člen týmu manuálně provádí službu pro zákazníka. Cílem je hluboce se naučit o problému a ověřit, zda je řešení hodnotné, s minimálními náklady.',
  },
  {
    questionText: 'Jak často by se měl tým scházet, aby syntetizoval poznatky z rozhovorů se zákazníky?',
    answerOptions: [
        { answerText: 'Jednou měsíčně.', isCorrect: false },
        { answerText: 'Ideálně po každém rozhovoru, nebo alespoň jednou týdně.', isCorrect: true },
        { answerText: 'Až když nasbírají data od alespoň 20 zákazníků.', isCorrect: false },
        { answerText: 'Jen když narazí na nějaký zajímavý problém.', isCorrect: false },
    ],
    explanation: 'Častá a pravidelná syntéza je klíčová. Čekání by vedlo k zapomenutí detailů. Krátká schůzka hned po rozhovoru je ideální pro zachycení čerstvých dojmů a poznatků.',
  },
  {
    questionText: 'Které tvrzení nejlépe vystihuje filozofii "Continuous Discovery Habits"?',
    answerOptions: [
        { answerText: '"Postav to a oni přijdou."', isCorrect: false },
        { answerText: '"Měli bychom minimalizovat výstupy a maximalizovat výsledky."', isCorrect: true },
        { answerText: '"Zákazník má vždycky pravdu."', isCorrect: false },
        { answerText: '"Rychle selhat, rychle se poučit."', isCorrect: false },
    ],
    explanation: 'Celá metodika je postavena na odklonu od "továrny na funkce" (zaměření na výstupy) k týmu, který je zodpovědný za generování měřitelné hodnoty pro zákazníky a byznys (zaměření na výsledky).',
  },
  {
    questionText: 'Co je to "jednodílný test toku" (one-piece flow test)?',
    answerOptions: [
        { answerText: 'Experiment, který testuje pouze jeden jediný prvek na stránce.', isCorrect: false },
        { answerText: 'Proces, kdy tým provede cyklus (nápad -> experiment -> poučení) pro jedno řešení co nejrychleji.', isCorrect: true },
        { answerText: 'Uživatelské testování, kde uživatel provede jen jeden úkol.', isCorrect: false },
        { answerText: 'Metoda pro testování výrobní linky.', isCorrect: false },
    ],
    explanation: 'Místo testování mnoha nápadů najednou v dávkách se tým snaží co nejrychleji protáhnout jeden nápad celým procesem, aby se maximalizovala rychlost učení a minimalizovalo plýtvání.',
  },
  {
    questionText: 'Jaký je vztah mezi Stromem příležitostí a produktovou roadmapou?',
    answerOptions: [
        { answerText: 'Strom příležitostí kompletně nahrazuje roadmapu.', isCorrect: false },
        { answerText: 'Strom příležitostí informuje roadmapu tím, že se zaměřuje na výsledky, ne na časové osy funkcí.', isCorrect: true },
        { answerText: 'Roadmapa je seznam řešení, Strom příležitostí ukazuje, jak se k nim došlo.', isCorrect: false },
        { answerText: 'Jsou to dva nesouvisející nástroje pro různé účely.', isCorrect: false },
    ],
    explanation: 'Týmy používají Strom příležitostí k vytvoření roadmapy zaměřené na výsledky (outcome-based roadmap). Místo slibování konkrétních funkcí v konkrétních termínech, roadmapa komunikuje, na jaké výsledky a příležitosti se tým zaměří.',
  }
];
