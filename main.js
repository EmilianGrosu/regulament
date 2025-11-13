const content = {
  termeni: [
    {
      header: '[IC] - In Character',
      content: [
        '➨ Reprezintă toate informațiile caracterului dumneavoastră din joc.',
      ],
    },
    {
      header: '[OOC] - Out Of Character',
      content: [
        '➨ Reprezintă toate informațiile dumneavoastră din viața reală.',
      ],
    },
    {
      header: '[RP] - Roleplay',
      content: [
        '➨ Reprezintă simularea unei vieți reale.'
      ],
    },
    {
      header: '[MG] - Metagaming',
      content: [
        '➨ Reprezintă amestecarea informațiilor IC cu cele OOC și viceversa.',
        '➨ Vorbitul pe joc este strict IC (poate fi OOC doar cu permisiunea unui membru STAFF). Chat-ul este strict OOC!',
        '<b>Exemplu:</b> Emilian este live pe YouTube și joacă pe Bellatrix. Un jucător, în urma vizionării transmisiei, merge la locația lui și îl salută. Jucătorul trebuie sancționat pentru că a amestecat mediul OOC cu cel IC.',
        '<b>Exemplu:</b> În timp ce se află într-un roleplay, un jucător vorbește pe joc că trebuie să plece la baie și că nu va mai fi la tastatură. Jucătorul trebuie sancționat pentru că a amestecat mediul IC cu cel OOC.',
      ],
    },
    {
      header: '[PG] - Powergaming',
      content: [
        '➨ Reprezintă atribuirea de acțiuni imposibile în realitate sau roleplay-ul în care o persoană nu primește nicio șansă de răspuns.',
        '<b>Exemplu:</b> Într-un schimb de focuri sunteți împușcat în mâini și ulterior cărați o persoană. Trebuie să fiți sancționat pentru că v-ați atribuit o acțiune imposibilă în realitate.',
        `<b>Exemplu:</b> Vă aflați într-o bătaie IC și oponentul dumneavoastră trimite mesaje de acest gen: '/me Îi dă un pumn în cap și îl omoară', '/me Îl împinge și îl face să leșine'. Acest jucător trebuie sancționat pentru că nu v-a lăsat nicio șansă de răspuns la roleplay!`,
        '<b>Exemplu:</b> În timpul unui jaf depozitați un vehicul într-o parcare. Trebuie să fiți sancționat pentru că nu ați lăsat nicio șansă de răspuns la roleplay.',
      ],
    },
    {
      header: '[DM] - Deathmatch',
      content: [
        '➨ Reprezintă omorârea sau lovirea intenționată a unui jucător fără vreun motiv bine întemeiat.',
        '<b>Exemplu:</b> Mergeți pe stradă și luați la pumni un individ pentru că este de culoare neagră. Trebuie să fiți sancționat pentru că ați lovit intenționat un jucător fără vreun motiv bine întemeiat.',
        '<b>Exemplu:</b> Sunteți membru al unei organizații mafiote și participați la un jaf de bancă. În timpul acțiunii, deschideți focul asupra unui elicopter de medici care patrulează în zonă. Trebuie să fiți sancționat pentru că ați lovit intenționat un jucător fără vreun motiv bine întemeiat.',
      ],
    },
    {
      header: '[PK] - Player Kill',
      content: [
        '➨ Reprezintă decesul IC al unui jucător, în urma căruia toate informațiile IC cu privire la acesta din ultimele 3 ore se vor anula.',
        '<b>Exemplu:</b> Aflați numele membrilor unei organizații ilegale și peste 20 de minute muriți de foame. În cazul în care vă veți folosi de această informație după respawn, veți fi sancționat.',
        '<b>Exemplu:</b> Vă aflați la o dispută între organizații. În urma unui schimb de focuri, omorâți o persoană. În loc să le spuneți camarazilor dumneavoastră doar că ați ucis un inamic, le comunicați numele victimei, fapt ce determină să nu se respecte PK-ul, deoarece, după respawn, ceilalți jucători îl vor cunoaște pe respectivul ca fiind mort. Prin urmare, veți fi sancționat pentru că nu ați respectat PK-ul.',
      ],
    },
    {
      header: '[CK] - Character Kill',
      content: [
        '➨ Reprezintă decesul IC de mare amploare al unui jucător, în urma căruia caracterul și toate informațiile cu privire la acesta se anulează.',
        '➨ Este nevoie de un Management care să vizioneze acțiunea și să acorde CK-ul dacă decesul dumneavoastră a fost realizat într-un mod cât mai complex și corect!',
        '➨ Se acordă în următoarele situații:',
        '    ♦ Trădarea unei facțiuni',
        '<b>Exemplu:</b> Sunteți într-o organizație mafiotă, vindeți poliției informații care pun în pericol gruparea dumneavoastră, sunteți prins de către membri și primiți CK.',
        '    ♦ Sinucidere',
        '<b>Exemplu:</b> Ați fost trădat de soție și ați hotărât să vă sinucideți, aruncându-vă de pe cea mai înaltă clădire.',
        '    ♦ Act suicidal pentru a scăpa de un roleplay',
        '<b>Exemplu:</b> Sunteți urmărit de poliție și, în loc să vă predați, alegeți să vă aruncați cu vehiculul în mare și muriți înecat.',
        '<b>Exemplu:</b> Sunteți capturat de mafioți și, aflându-vă într-un vehicul care circulă cu o viteză periculoasă, alegeți să-l părăsiți din mers pentru a încerca să scăpați.',
        '    ♦ Rol de victimă',
        `<b>Exemplu:</b> Ați fost împușcat mortal de mafioți și aceștia v-au lăsat în mijlocul unui drum. Un medic vă găsește și rolează vindecarea dumneavoastră. Dacă jucați rolul de victimă și oferiți mesaje de acest gen: '/me Individul nu mai are puls', '/me Individului nu îi mai bate inima', veți primi CK.`,
        '    ♦ Război între facțiuni',
        '<b>Exemplu:</b> Dețineți o organizație și sunteți în conflict cu o altă grupare. Sunteți de comun acord să faceți război pe CK. În urma acestuia, toți membrii din facțiunea.',
        '    ♦ Închisoare pe viață',
        '<b>Exemplu:</b> Sunteți urmărit de poliție pentru diverse infracțiuni și, în urma arestării dumneavoastră, aceștia vă prezintă o sentință de peste 600 de luni pentru faptele comise.',
        '    ♦ Decizie sindicat',
        '<b>Exemplu:</b> Sunteți implicat într-un conflict care compromite integritatea și reputația sindicatului, astfel un membru al acestuia poate decide să vă ofere CK.',
        '    ♦ Alte motive',
        '<b>Exemplu:</b> Un civil v-a distrus căsnicia, v-a lăsat fără loc de muncă și v-a adus într-o stare financiară deplorabilă. Vorbiți cu un Responsabil CK prezentându-i situația, acesta vă oferă permisiunea să faceți așa ceva, filmați roleplay-ul în care îl omorâți într-un mod complex, arătați dovada membrului STAFF, pe urmă civilul primește CK!',
      ],
    },
    {
      header: '[NF] - No Fear',
      content: [
        '➨ Reprezintă alegerea unui jucător de a nu simula frica într-un roleplay în care aceasta este necesară.',
        '<b>Exemplu:</b> Sunteți atacat de un mafiot. Acesta are arma îndreptată înspre dumneavoastră și, neavând nicio cale de scăpare, nu efectuați comenzile pe care acesta vi le impune. Trebuie să fiți sancționat pentru că nu ați simulat frica într-un roleplay în care aceasta este necesară.',
        '<b>Exemplu:</b> Treceți insistent cu un vehicul prin fața secției de poliție, nerespectând legislația, pentru a provoca autoritățile să vă urmărească. Trebuie să fiți sancționat pentru că nu ați simulat frica într-un roleplay în care aceasta este necesară.',
        '<b>Exemplu:</b> Sunteți la secție, reținut de niște cadre de poliție și, în loc să vă conformați situației, aveți un comportament indecent cu autoritățile. Trebuie să fiți sancționat pentru că nu ați simulat frica într-un roleplay în care aceasta este necesară.',
        '<b>Exemplu:</b> Sunteți amenințat cu o armă nonletală și alegeți să fugiți și să nu respectați comenzile atacatorului. În această situație, nu se consideră No Fear.',
      ],
    },
  ],
  regulament: [
    {
      content: [
        '<b>NOTĂ:</b> Pentru fiecare regulă nerespectată, se va acorda numai o variantă din sancțiunile de mai jos, în funcție de gravitatea situației!',
      ],
    },
    {
      header: '!1. Contul de joc',
    },
    {
      header: '1.1 Numele jucătorului',
      content: [
        '➨ Numele trebuie să fie decent, fără semne în exces, fără conotații ascunse!',
        '➨ Alegerea numelor asemănătoare celor existente deja cu scopul de a deranja un jucător sau, şi mai grav, a celor deţinute de membrii STAFF este interzisă!',
        '➨ Este interzis să aveți un nume al cărui număr de caractere este mai mare decât 20!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Kick (avertizare)',
        '⟶ Ban (120m)',
        '⟶ Ban (7z)',
      ],
    },
    {
      header: '1.2 Activitatea contului',
      content: [
        '➨ Jucătorii care nu s-au logat în ultimele 60 de zile riscă pierderea proprietăților imobiliare și a afacerilor (dacă există).',
        '➨ În cazul vehiculelor, acestea pot fi pierdute după 90 de zile de inactivitate.',
        '➨ În cazul jucătorilor banați, aceștia pot pierde bunuri în funcție de gravitatea sancțiunii lor.',
      ],
    },
    {
      header: '1.3 Conturi multiple',
      content: [
        '➨ Jucătorii pot avea doar un cont înregistrat pe server.',
        '➨ Este interzis să scăpați de o sancțiune prin utilizarea unui cont diferit!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Ban (permanent)',
      ],
    },
    {
      header: '1.4 Software neautorizat',
      content: [
        '➨ Este interzisă folosirea oricărui program, aplicație sau instrument extern care oferă avantaje nejuste, exploatează sau afectează în orice fel funcționarea și echilibrul server-ului!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Ban (permanent)',
      ],
    },
    {
      header: '!2. Interacțiuni sociale',
    },
    {
      header: '2.1 Limbaj',
      content: [
        '➨ Este interzis să aduceți jigniri, amenințări sau suferințe la adresa jucătorilor, comunității sau echipei STAFF!',
        '➨ Este interzis să instigați la încălcarea regulamentului!',
        '➨ Este interzis să provocați un conflict sau să luați parte la unul!',
        '➨ Limbajul licențios nu este tolerat, decât în mediul IC, cu limita bunului simț!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Mute (15m - 60m) + Jail (15m)',
        '⟶ Mute (30m - 120m) + Jail (30m)',
        '⟶ Ban (15z)',
        '⟶ Ban (permanent)',
      ],
    },
    {
      header: '2.2 Reclamă',
      content: [
        '➨ Este interzis să faceți orice fel de reclamă!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Ban (15z)',
        '⟶ Ban (30z)',
      ],
    },
    {
      header: '2.3 Dovezi',
      content: [
        '➨ Este interzis să falsificați orice tip de dovadă!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Ban (30z)',
        '⟶ Ban (60z)',
        '⟶ Ban (90z)',
      ],
    },
    {
      header: '2.4 Comerț',
      content: [
        '➨ Este interzis să efectuați plăți OOC pentru bunuri IC și viceversa!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Ban (permanent)',
      ],
    },
    {
      header: '2.5 Trolling',
      content: [
        '➨ Este interzis să stricați în mod intenționat buna desfășurare a comunității!',
        '➨ Este interzis să folosiți un program de redare a sunetelor fără aprobarea unui Management!',
        '➨ Este interzis să folosiți un program de distorsionare a vocii fără aprobarea unui Management!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (180m)',
        '⟶ Jail (360m)',
        '⟶ Ban (30z)',
        '⟶ Ban (permanent)',
      ],
    },
    {
      header: '2.6 Abuz de bug-uri',
      content: [
        '➨ Este interzis să vă folosiți de bug-uri și să nu le raportați la echipa STAFF!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (180m)',
        '⟶ Ban (7z)',
        '⟶ Ban (30z)',
        '⟶ Ban (permanent)',
      ],
    },
    {
      header: '2.7 Disconnect în roleplay',
      content: [
        '➨ Este interzis să vă deconectați într-un roleplay în desfășurare!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (180m)',
        '⟶ Ban (7z)',
        '⟶ Ban (15z)',
        '⟶ Ban (30z)',
      ],
    },
    {
      header: '2.8 Tichet',
      content: [
        '➨ Este interzis să creați un tichet cât timp vă aflați într-un roleplay în desfășurare și puteți deranja ceilalți participanți!',
        '➨ Tichetele trebuie create doar dacă aveți o reclamație justificată, o întrebare legată de server sau o problemă reală!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
        '⟶ Jail (180m)',
      ],
    },
    {
      header: '!3. Roleplay',
    },
    {
      header: '3.1 Metagaming',
      content: [
        '➨ Este interzis să faceți Metagaming!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (15m)',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
      ],
    },
    {
      header: '3.2 Powergaming',
      content: [
        '➨ Este interzis să faceți Powergaming!',
        '➨ Se consideră Powergaming identificarea unei persoane după voce!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (15m)',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
      ],
    },
    {
      header: '3.3 Deathmatch',
      content: [
        '➨ Este interzis să faceți Deathmatch!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
        '⟶ Jail (180m)',
        '⟶ Jail (240m)',
      ],
    },
    {
      header: '3.4 Player Kill',
      content: [
        '➨ Este interzis să nu respectați un Player Kill!',
        '➨ Nu se încalcă regula în cazul în care poliția revine la un jaf de clădire!',
        '➨ În cazul unui Player Kill primit la părăsirea unei organizații ilegale, se uită toate informațiile dobândite despre organizația respectivă, inclusiv cunoștințe despre alte grupări!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (15m)',
        '⟶ Jail (30m)',
        '⟶ Jail (120m)',
        '⟶ Jail (180m)',
      ],
    },
    {
      header: '3.5 No Fear',
      content: [
        '➨ Este interzis să faceți No Fear!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
        '⟶ Jail (180m)',
      ],
    },
    {
      header: '3.6 Roleplay scârbos',
      content: [
        '➨ Este interzis să faceți roleplay scârbos fără permisiunea celorlalți participanți!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (15m)',
        '⟶ Jail (30m)',
        '⟶ Jail (45m)',
        '⟶ Jail (60m)',
      ],
    },
    {
      header: '3.7 Conducere auto',
      content: [
        '➨ Este interzis să conduceți nebunesc, fără vreun motiv bine întemeiat!',
        '➨ Este interzis să provocați intenționat un accident!',
        '➨ Este interzis să conduceți pe contrasens, fără vreun motiv bine întemeiat!',
        '➨ Este interzis să faceți orice manevră de imobilizare la o viteză de peste 150 de km/h!',
        '➨ Este interzis să aterizați cu elicopterul pe un drum auto, fără vreun motiv bine întemeiat!',
        '➨ Este interzis să loviți intenționat un jucător folosind un vehicul, indiferent de situație!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (10m)',
        '⟶ Jail (20m)',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
      ],
    },
    {
      header: '3.8 Comă',
      content: [
        '➨ Este interzis să faceți vreo acțiune cât timp sunteți în comă!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (10m)',
        '⟶ Jail (20m)',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
      ],
    },
    {
      header: '3.9 Înșelăciune',
      content: [
        '➨ Este interzis să înșelați pe cineva dacă suma totală de câștig este mai mare decât 5000 lei!',
        '➨ Se încadrează și situațiile unde propuneți unui jucător o tranzacționare cu scopul ca acesta să fie jefuit ulterior!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
        '⟶ Ban (7z)',
        '⟶ Ban (15z)',
        '⟶ Ban (30z)',
      ],
    },
    {
      header: '3.10 Corupție',
      content: [
        '➨ Este interzis ca membrii unei facțiuni de stat (poliție, medici, consiliu etc.) să fie corupți (job-uri sau alte activități ilegale, oferirea bunurilor din facțiune, oferirea de informații confidențiale ale facțiunii etc.)!',
        '➨ Excepție de la această regulă are personalul din cadrul Departamentului de Reparații și Revizii Auto!',
        '➨ Confiscarea nejustificată de bunuri sau folosirea lor în scop personal se consideră corupție!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
        '⟶ Ban (7z)',
        '⟶ Ban (15z)',
        '⟶ Ban (30z)',
      ],
    },
    {
      header: '3.11 Raid-uri',
      content: [
        '➨ Este interzis ca o organizație, alta decât cele oficiale, să facă un raid!',
        '➨ Pentru a se da raid la o altă organizație oficială este necesar ca minim 6 membri din aceasta să fie în joc!',
        '➨ Fiecare organizație oficială are permisiunea de a da un singur raid pe săptămână!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
      ],
    },
    {
      header: '3.12 Instituție',
      content: [
        '➨ Este interzis să faceți activități periculoase într-o instituție (curtea de apel, secția de poliție, spitalul, service-ul auto, consiliul, judecătoria, universitatea etc.), cât și în împrejurimile acesteia!',
        '➨ Este interzis să se fure bunuri din depozitele facțiunilor legale!',
        '➨ Este interzis să se facă roleplay că se șterge baza de date a unei instituții!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
      ],
    },
    {
      header: '3.13 Loc de muncă',
      content: [
        '➨ Este interzis să desfășurați activități care nu au legătură cu atribuțiile locului de muncă în timp ce vă aflați în tură, în cazurile unde se primește salariu!',
        '➨ Este interzis să desfășurați activitatea de la locul de muncă folosind vehicule personale, dacă acel loc de muncă pune la dispoziție vehicule de serviciu. Singura excepție este pentru detectivii din cadrul poliției!',
        '➨ Este interzis să folosiți un vehicul de la locul de muncă pentru scopurile personale!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
        '⟶ Jail (180m)',
        '⟶ Jail (240m)',
      ],
    },
    {
      header: '!4 Jafuri persoane',
    },
    {
      header: '4.1 Bunuri',
      content: [
        '➨ Este interzis să jefuiți bunurile unei persoane, iar pe urmă să o omorâți și viceversa!',
        '➨ Regula nu se aplică în cazul în care victima nu respectă comenzile atacatorului!',
        '➨ Regula nu se aplică în cazul în care luați arma persoanei de pe jos!',
        '➨ Regula nu se aplică în cazul în care au fost luate doar bunuri care au rol de comunicare (telefon, radio, mdt etc.)!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (15m)',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
        '⟶ Jail (120m)',
      ],
    },
    {
      header: '4.2 Abuz jaf',
      content: [
        '➨ Este interzis să tâlhăriți aceeași persoană, decât după 3 ore de la ultimul jaf asupra acesteia!',
        '➨ Este interzis să jefuiți o persoană care este în comă pe jos, fără să fi avut vreo interacțiune cu aceasta!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (20m)',
        '⟶ Jail (45m)',
        '⟶ Jail (60m)',
      ],
    },
    {
      header: '4.3 Ore de jefuit',
      content: [
        '➨ Aveți permisiunea de a jefui doar în intervalul orar 18:00 - 06:00!',
        '➨ Dacă un membru al unei organizații ilegale cere taxă pentru o locație deținută de organizația sa, iar persoana refuză să plătească, acesta are voie să îi confiște bunurile ilegale, indiferent de oră!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (20m)',
        '⟶ Jail (40m)',
        '⟶ Jail (60m)',
      ],
    },
    {
      header: '4.4 Zone de jefuit',
      content: [
        '➨ Este strict interzis să jefuiți în zonele publice (garsoniere de la spawn, magazine de orice tip, minijob-uri, job-uri, parcări, benzinării, străzi principale, autostrăzi etc.)!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (15m)',
        '⟶ Jail (30m)',
        '⟶ Jail (60m)',
      ],
    },
    {
      header: '4.5 Jefuirea persoanelor care fac job',
      content: [
        '➨ Este strict interzis să jefuiți jucătorii la minijob-uri, job-uri, cât și pe cei care sunt în tură la facțiunile legale (poliție, medici, mecanici)!',
        '➨ Regula nu se aplică în cazul în care au fost luate doar bunuri vătămătoare (cuțit, pistol, carabină etc.) sau doar bunuri care au rol de comunicare (telefon, radio, mdt etc.)!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (20m)',
        '⟶ Jail (40m)',
        '⟶ Jail (60m)',
      ],
    },
    {
      header: '!5. Jafuri clădiri',
    },
    {
      header: '5.1 Ostatic',
      content: [
        '➨ Este interzis să aveți ostatic fals!',
        '➨ Este interzis să solicitați bani sau bunuri personale în negocierile cu ostatici purtate cu facțiunile legale!',
        '➨ La jafuri nu se face roleplay cu ostatic!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (15m)',
        '⟶ Jail (30m)',
        '⟶ Jail (45m)',
        '⟶ Jail (60m)',
      ],
    },
    {
      header: '5.2 Magazine',
      content: [
        '➨ Pentru a jefui un magazin trebuie să fiți minim 2 persoane!',
        '➨ Confruntarea începe imediat! Intervenția forțelor de ordine poate fi directă și imediată, fără avertisment!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (10m)',
        '⟶ Jail (20m)',
        '⟶ Jail (30m)',
        '⟶ Jail (40m)',
      ],
    },
    {
      header: '5.3 Bănci',
      content: [
        '➨ Pentru a jefui o bancă trebuie să fiți minim 4 persoane!',
        '➨ Confruntarea începe imediat! Intervenția forțelor de ordine poate fi directă și imediată, fără avertisment!',
        '<b>SANCȚIUNI:</b>',
        '⟶ Jail (10m)',
        '⟶ Jail (20m)',
        '⟶ Jail (30m)',
        '⟶ Jail (40m)',
      ],
    },
  ],
}

function formatHeader(str) {
  return str.startsWith('!') ? str.substring(1) : str
}

function setOption(option) {
  $('.value').fadeOut(300, function () {
    $('.value').empty()
    for (let i = 0; i < content[option].length; i++) {
      $('.value').append(`
        <div class='item'>
          ${content[option][i].header ? `
            <div class='item-header ${content[option][i].header.startsWith('!') ? 'full' : ''}'>
              <h1>${formatHeader(content[option][i].header)}</h1>
            </div>
          ` : ``}
          ${content[option][i].content ? `
            <div class='item-content'>
              ${content[option][i].content.map((c) => `<span>${c}</span>`).join('')}
            </div>
          ` : ``}
        </div>
      `)
    }
    $('.value').fadeIn(300)
  })
}

$(function () {
  $('body').fadeIn()
  setOption('termeni')
  $('button').click(function () {
    const action = $(this).data('action')
    if (action !== 'termeni' && action !== 'regulament')
      return
    if ($(this).hasClass('active'))
      return
    $('button.active').removeClass('active')
    $(`button#${action}`).addClass('active')
    setOption(action)
  })
})



