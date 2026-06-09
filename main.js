const content = {
  regulament: [
    {
      content: [
        '➨ IC (In Character) reprezintă toate informațiile caracterului dumneavoastră din joc.',
        '➨ OOC (Out Of Character) reprezintă toate informațiile dumneavoastră din viața reală.',
        '➨ Roleplay reprezintă simularea unei vieți reale.',
        '<b>NOTĂ:</b> Pentru fiecare regulă încălcată, se va aplica o singură sancțiune din intervalul menționat la regula respectivă, în funcție de gravitatea faptei, context și istoricul jucătorului.',
      ],
    },
    {
      header: '!1. Contul de joc',
    },
    {
      header: '1.1 Numele jucătorului',
      content: [
        '➨ Numele trebuie să fie decent, fără semne în exces, fără conotații ascunse.',
        '➨ Alegerea numelor asemănătoare celor existente deja cu scopul de a deranja un jucător sau, şi mai grav, a celor deţinute de membrii STAFF este interzisă.',
      ],
      sanctions: [
        '⟶ Kick (avertizare)',
        '⟶ Ban (2h - 7z)',
      ],
    },
    {
      header: '1.2 Activitatea contului',
      content: [
        '➨ Jucătorii care nu s-au logat în ultimele 30 de zile riscă pierderea proprietăților imobiliare și a afacerilor (dacă există).',
        '➨ În cazul vehiculelor, acestea pot fi pierdute după 90 de zile de inactivitate.',
        '➨ În cazul jucătorilor banați, aceștia pot pierde bunuri în funcție de gravitatea sancțiunii lor.',
      ],
      sanctions: [],
    },
    {
      header: '1.3 Conturi multiple',
      content: [
        '➨ Jucătorii pot avea doar un cont înregistrat pe server.',
        '➨ Este interzis să scăpați de o sancțiune prin utilizarea unui cont diferit.',
      ],
      sanctions: [
        '⟶ Ban (permanent)',
      ],
    },
    {
      header: '1.4 Software neautorizat',
      content: [
        '➨ Este interzisă folosirea oricărui program, aplicație sau instrument extern care oferă avantaje nejuste, exploatează sau afectează în orice fel funcționarea și echilibrul serverului.',
      ],
      sections: [
        {
          header: 'Refuz PC Check',
          content: [
            '➨ Echipa STAFF poate solicita verificarea PC-ului atunci când există suspiciuni de software neautorizat.',
            '➨ Se consideră refuz dacă ștergeți fișiere, modificați fișiere sau încercați să ascundeți ceva înainte ori în timpul verificării.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (50m - 500m)',
        '⟶ Ban (30z - permanent)',
      ],
    },
    {
      header: '!2. Interacțiuni sociale',
    },
    {
      header: '2.1 Limbaj',
      content: [
        '➨ Limbajul trebuie să rămână în limita bunului simț, indiferent dacă discuția este IC sau OOC.',
      ],
      sections: [
        {
          header: 'Limbaj general',
          content: [
            '➨ Este interzis să aduceți jigniri, amenințări sau suferințe la adresa jucătorilor, comunității sau echipei STAFF.',
            '➨ Este interzis să instigați la încălcarea regulamentului.',
            '➨ Limbajul licențios nu este tolerat, decât în mediul IC, atunci când există justificare în roleplay.',
          ],
        },
        {
          header: 'Suferințe OOC',
          content: [
            '➨ Este interzis să faceți suferințe față de alți jucători.',
            '➨ Se consideră suferință orice comentariu făcut doar ca să umilească, să provoace sau să enerveze alt jucător.',
            '➨ Este interzis să faceți suferințe după ce câștigați o bătaie, un schimb de focuri sau orice conflict.',
            '➨ Comentarii precum „stai jos”, „te-am culcat”, „ești slab” sau formulări asemănătoare sunt considerate comportament toxic, chiar dacă situația a fost IC.',
          ],
        },
        {
          header: 'Comportamentul față de fete',
          content: [
            '➨ Comportamentul față de fete trebuie să fie respectuos și matur.',
            '➨ Sunt interzise avansurile insistente, comentariile sexuale, glumele porcoase, hărțuirea, presiunea de a continua un roleplay incomod sau băgatul forțat în seamă.',
            '➨ Dacă o persoană vă spune clar că un anumit comportament o deranjează, trebuie să opriți acel comportament. Continuarea discuției în aceeași direcție poate fi sancționată.',
          ],
        },
      ],
      sanctions: [
        '⟶ Mute (15m - 120m)',
        '⟶ Jail (15m - 120m)',
        '⟶ Ban (5z - permanent)',
      ],
    },
    {
      header: '2.2 Reclamă',
      content: [
        '➨ Este interzis să faceți orice fel de reclamă.',
      ],
      sections: [
        {
          header: 'Ce intră la reclamă',
          content: [
            '➨ Este interzis să promovați alte servere, comunități, servicii, grupuri sau platforme fără aprobarea Managementului.',
            '➨ Este interzis să trimiteți invitații, link-uri sau mesaje prin care încercați să mutați jucătorii în altă comunitate.',
          ],
        },
        {
          header: 'Unde se aplică',
          content: [
            '➨ Regula se aplică pe server, pe chat, pe voice, pe Discord-ul comunității și în mesajele private trimise jucătorilor din comunitate.',
          ],
        },
      ],
      sanctions: [
        '⟶ Ban (7z - 90z)',
      ],
    },
    {
      header: '2.3 Dovezi',
      content: [
        '➨ Este interzis să falsificați orice tip de dovadă.',
      ],
      sections: [
        {
          header: 'Dovezi modificate',
          content: [
            '➨ Este interzis să modificați poze, clipuri sau conversații pentru a schimba realitatea unei situații.',
            '➨ Este interzis să tăiați o dovadă în mod intenționat astfel încât contextul să fie schimbat.',
          ],
        },
        {
          header: 'Dovezi scoase din context',
          content: [
            '➨ Dacă folosiți o dovadă, trebuie să prezentați contextul necesar pentru ca situația să fie înțeleasă corect.',
            '➨ Ascunderea intenționată a părților importante poate fi sancționată ca dovadă falsă sau înșelătoare.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (30m - 250m)',
        '⟶ Ban (7z - 90z)',
      ],
    },
    {
      header: '2.4 Comerț',
      content: [
        '➨ Este interzis să efectuați plăți OOC pentru bunuri IC și viceversa.',
      ],
      sanctions: [
        '⟶ Ban (permanent)',
      ],
    },
    {
      header: '2.5 Trolling',
      content: [
        '➨ Este interzis să stricați în mod intenționat buna desfășurare a comunității.',
      ],
      sections: [
        {
          header: 'Provocare fără motiv',
          content: [
            '➨ Este interzis comportamentul de tip bombardier: instigarea certurilor fără motiv, provocarea intenționată a altor jucători, comentariile făcute doar pentru scandal sau încercarea de a transforma orice discuție într-un conflict.',
          ],
        },
        {
          header: 'Sunete și voce modificată',
          content: [
            '➨ Este interzis să folosiți un program de redare a sunetelor fără aprobarea unui Management.',
            '➨ Este interzis să folosiți un program de distorsionare a vocii fără aprobarea unui Management.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (30m - 360m)',
        '⟶ Ban (30z - permanent)',
      ],
    },
    {
      header: '2.6 Abuz de bug-uri',
      content: [
        '➨ Este interzis să vă folosiți de bug-uri și să nu le raportați la echipa STAFF.',
      ],
      sections: [
        {
          header: 'Folosirea bug-urilor',
          content: [
            '➨ Este interzis să folosiți un bug pentru bani, iteme, arme, vehicule, avantaje în roleplay sau orice alt beneficiu.',
            '➨ Este interzis să repetați un bug după ce ați observat că acesta produce un avantaj.',
          ],
        },
        {
          header: 'Raportarea bug-urilor',
          content: [
            '➨ Dacă găsiți un bug, trebuie să îl raportați echipei STAFF cât mai repede.',
            '➨ Dacă bug-ul v-a oferit un avantaj, trebuie să anunțați echipa STAFF și să nu vă folosiți de avantajul obținut.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (30m - 500m)',
        '⟶ Ban (7z - permanent)',
      ],
    },
    {
      header: '2.7 Disconnect în roleplay',
      content: [
        '➨ Este interzis să vă deconectați într-un roleplay în desfășurare.',
      ],
      sections: [
        {
          header: 'Părăsirea intenționată',
          content: [
            '➨ Este interzis să ieșiți de pe server pentru a evita o sancțiune IC, un jaf, o urmărire, o arestare, un conflict sau orice alt roleplay activ.',
          ],
        },
        {
          header: 'Crash sau problemă reală',
          content: [
            '➨ Dacă ați avut crash sau o problemă reală, trebuie să reveniți cât mai repede și să continuați roleplay-ul.',
            '➨ Dacă nu puteți reveni imediat, trebuie să anunțați echipa STAFF și persoanele implicate pe serverul de Discord oficial Bellatrix.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (30m - 180m)',
        '⟶ Ban (7z - 30z)',
      ],
    },
    {
      header: '2.8 Tichet',
      content: [
        '➨ Este interzis să creați un tichet cât timp vă aflați într-un roleplay în desfășurare și puteți deranja ceilalți participanți.',
        '➨ Tichetele trebuie create doar dacă aveți o reclamație justificată, o întrebare legată de server sau o problemă reală.',
      ],
      sanctions: [
        '⟶ Jail (10m - 90m)',
      ],
    },
    {
      header: '!3. Roleplay',
    },
    {
      header: '3.1 Metagaming & Mixing',
      content: [
        '➨ Este interzis să faceți Metagaming sau Mixing.',
        '➨ Metagaming și Mixing sunt reguli diferite, dar ambele țin de separarea corectă dintre IC și OOC.',
      ],
      sections: [
        {
          header: 'Metagaming [MG]',
          content: [
            '➨ Reprezintă folosirea informațiilor OOC în mediul IC.',
            '➨ Este interzis să folosiți în joc informații aflate din Discord, stream, clipuri, mesaje private sau orice altă sursă OOC.',
            '➨ Personajul dumneavoastră poate folosi doar informațiile aflate prin roleplay, în joc.',
            '<b>Exemplu:</b> Emilian este live pe YouTube și joacă pe Bellatrix. Un jucător, în urma vizionării transmisiei, merge la locația lui și îl salută. Jucătorul trebuie sancționat pentru că a folosit informații OOC în mediul IC.',
          ],
        },
        {
          header: 'Mixing [MX]',
          content: [
            '➨ Reprezintă amestecarea mediului OOC cu mediul IC.',
            '➨ Se consideră Mixing atunci când vorbiți despre lucruri OOC în IC sau când amestecați chaturile IC/OOC.',
            '➨ Vorbitul pe joc este strict IC (poate fi OOC doar cu permisiunea unui membru STAFF). Chat-ul este strict OOC.',
            '➨ Este interzis să transmiteți pe medii OOC locații, nume, planuri sau informații care ajută într-o situație IC.',
            '<b>Exemplu:</b> În timp ce se află într-un roleplay, un jucător vorbește pe joc că trebuie să plece la baie și că nu va mai fi la tastatură. Jucătorul trebuie sancționat pentru că a amestecat mediul IC cu cel OOC.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (15m - 180m)',
      ],
    },
    {
      header: '3.2 Powergaming [PG]',
      content: [
        '➨ Reprezintă atribuirea de acțiuni imposibile în realitate sau roleplay-ul în care o persoană nu primește nicio șansă de răspuns.',
        '➨ Este interzis să faceți Powergaming, adică să forțați o acțiune imposibilă, nerealistă sau fără șansă corectă de răspuns pentru ceilalți participanți.',
      ],
      sections: [
        {
          header: 'Acțiuni fără șansă de răspuns',
          content: [
            '➨ Se consideră Powergaming orice acțiune prin care blocați complet posibilitatea celuilalt jucător de a răspunde sau de a continua roleplay-ul.',
            '➨ Se consideră Powergaming identificarea unei persoane doar după voce.',
            `<b>Exemplu:</b> Vă aflați într-o bătaie IC și oponentul dumneavoastră trimite mesaje de acest gen: '/me Îi dă un pumn în cap și îl omoară', '/me Îl împinge și îl face să leșine'. Acest jucător trebuie sancționat pentru că nu v-a lăsat nicio șansă de răspuns la roleplay.`,
          ],
        },
        {
          header: 'Acțiuni imposibile',
          content: [
            '➨ Se consideră Powergaming orice atribuire de acțiuni imposibile, exagerate sau care ignoră complet starea în care se află personajul dumneavoastră. Nu puteți folosi /me pentru a face acțiuni pe care personajul nu le-ar putea face fizic în situația respectivă.',
            `<b>Exemplu:</b> Sunteți încătușat și folosiți: '/me Îl strânge de gât'. Trebuie să fiți sancționat pentru că v-ați atribuit o acțiune imposibilă în situația respectivă.`,
          ],
        },
        {
          header: 'Olympic Swim [OS]',
          content: [
            '➨ Se consideră Olympic Swim atunci când un jucător se folosește de înotul pe distanțe mari pentru a scăpa de un roleplay activ, fără să aibă kit de scafandru.',
            '<b>Exemplu:</b> Sunteți urmărit de poliție și intrați în apă, apoi înotați pe distanță mare pentru a scăpa, fără să aveți kit de scafandru. Trebuie să fiți sancționat pentru Olympic Swim.',
          ],
        },
        {
          header: 'Ascunderea în timpul urmăririlor',
          content: [
            '➨ Se consideră Powergaming să intrați într-un apartament, casă, garaj sau alt interior pentru a scăpa de un roleplay activ, unde ceilalți participanți nu au posibilitatea de a accesa locația.',
            '<b>Exemplu:</b> Sunteți urmărit de niște mafioți, intrați și vă ascundeți în garsoniera de început pentru a scăpa de aceștia. Trebuie să fiți sancționat pentru că v-ați ascuns în timpul unei urmăriri.',
          ],
        },
        {
          header: 'Depozitarea vehiculelor',
          content: [
            '➨ Se consideră Powergaming să depozitați un vehicul în timp ce vă aflați într-un roleplay activ de urmărire.',
            '➨ La finalizarea unei urmăriri, este necesar să așteptați un minim de 5 minute până a putea să depozitați vehiculul cu care ați fugit.',
            '<b>Exemplu:</b> În timp ce efectuați un jaf de magazin depozitați un vehicul într-o parcare. Trebuie să fiți sancționat pentru că ați depozitat un vehicul în timp ce vă aflați într-un roleplay activ de urmărire.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (15m - 180m)',
      ],
    },
    {
      header: '3.3 Deathmatch [DM]',
      content: [
        '➨ Reprezintă omorârea sau lovirea intenționată a unui jucător fără un motiv bine întemeiat.',
      ],
      sections: [
        {
          header: 'Motiv roleplay',
          content: [
            '➨ Este interzis să loviți, să omorâți sau să trageți asupra unui jucător fără un motiv roleplay clar și suficient.',
            '<b>Exemplu:</b> Mergeți pe stradă și luați la pumni un individ pentru că este de culoare neagră. Trebuie să fiți sancționat pentru că ați lovit intenționat un jucător fără un motiv bine întemeiat.',
          ],
        },
        {
          header: 'Intensificarea conflictului',
          content: [
            '➨ Dacă o situație poate fi rezolvată prin discuție, amenințare sau altă acțiune mai ușoară, nu trebuie să se ajungă direct la omor.',
            '➨ Folosirea armelor trebuie să aibă un motiv serios și să fie proporțională cu situația.',
            '<b>Exemplu:</b> Sunteți membru al unei organizații mafiote și participați la un jaf de bancă. În timpul acțiunii, deschideți din prima focul asupra unui elicopter de medici care doar patrula la distanță prin zonă. Trebuie să fiți sancționat pentru că ați pornit direct focul asupra unui jucător, fără să fi încercat să trageți focuri de avertizare înainte.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (30m - 240m)',
      ],
    },
    {
      header: '3.4 Player Kill [PK]',
      content: [
        '➨ Reprezintă decesul IC al unui jucător, în urma căruia toate informațiile IC cu privire la acesta din ultimele 3 ore se vor anula.',
        '➨ Nu se încalcă regula în cazul în care poliția revine la un jaf de clădire.',
        '➨ În cazul unui Player Kill primit la părăsirea unei organizații ilegale, se uită toate informațiile dobândite despre organizația respectivă, inclusiv cunoștințe despre alte grupări.',
      ],
      sections: [
        {
          header: 'Ce trebuie uitat',
          content: [
            '➨ Nu aveți voie să vă întoarceți imediat în aceeași acțiune pentru răzbunare sau pentru a continua conflictul.',
            '<b>Exemplu:</b> Aflați numele membrilor unei organizații ilegale și peste 20 de minute muriți de foame. În cazul în care vă veți folosi de această informație după respawn, veți fi sancționat.',
          ],
        },
        {
          header: 'Conștientizare Player Kill',
          content: [
            '➨ Atunci când omorâți un jucător într-o situație de roleplay, trebuie să conștientizați că acel personaj primește Player Kill și nu mai poate ține minte situația care a dus la moartea lui.',
            '➨ Este interzis să vorbiți în roleplay despre faptul că ați omorât o persoană folosind identitatea exactă a acesteia, deoarece, după respawn, acel personaj revine în roleplay și nu trebuie considerat mort definitiv de ceilalți jucători.',
            '<b>Exemplu:</b> În urma unui conflict între organizații, îl omorâți pe Ion Popescu. După conflict, le spuneți membrilor organizației dumneavoastră: „L-am omorât pe Ion Popescu”. Acest lucru este greșit, deoarece îi faceți pe ceilalți jucători să trateze personajul Ion Popescu ca fiind mort, deși după respawn acesta primește Player Kill și nu mai ține minte conflictul. Corect este să vorbiți general, fără să folosiți identitatea exactă a persoanei omorâte.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (15m - 180m)',
      ],
    },
    {
      header: '3.5 Character Kill [CK]',
      content: [
        '➨ Reprezintă decesul IC de mare amploare al unui jucător, în urma căruia caracterul și toate informațiile cu privire la acesta se anulează.',
        '➨ Este nevoie de un Management care să vizioneze acțiunea și să acorde CK-ul dacă decesul dumneavoastră a fost realizat într-un mod cât mai complex și corect.',
        '➨ După primirea unui Character Kill, nu aveți voie să creați un personaj nou care să aibă legătură cu personajul șters. Noul personaj nu trebuie să aibă nume asemănător, aceleași rude, aceeași poveste, aceleași conflicte sau orice altă legătură IC cu personajul care a primit CK.',
        '➨ După primirea unui Character Kill, monedele Bellatrix și statutul VIP rămân pe cont. Aceste beneficii sunt legate de cont, nu de personajul șters.',
        '➨ Se acordă în următoarele situații:',
      ],
      sections: [
        {
          header: 'Trădarea unei facțiuni',
          content: [
            '<b>Exemplu:</b> Sunteți într-o organizație mafiotă, vindeți poliției informații care pun în pericol gruparea dumneavoastră, sunteți prins de către membri și primiți CK.',
          ],
        },
        {
          header: 'Sinucidere',
          content: [
            '<b>Exemplu:</b> Ați fost trădat de soție și ați hotărât să vă sinucideți, aruncându-vă de pe cea mai înaltă clădire.',
          ],
        },
        {
          header: 'Act suicidal pentru a scăpa de un roleplay',
          content: [
            '<b>Exemplu:</b> Sunteți urmărit de poliție și, în loc să vă predați, alegeți să vă aruncați cu vehiculul în mare și muriți înecat.',
            '<b>Exemplu:</b> Sunteți capturat de mafioți și, aflându-vă într-un vehicul care circulă cu o viteză periculoasă, alegeți să-l părăsiți din mers pentru a încerca să scăpați.',
          ],
        },
        {
          header: 'Rol de victimă',
          content: [
            `<b>Exemplu:</b> Ați fost împușcat mortal de mafioți și aceștia v-au lăsat în mijlocul unui drum. Un medic vă găsește și rolează vindecarea dumneavoastră. Dacă jucați rolul de victimă și oferiți mesaje de acest gen: '/me Individul nu mai are puls', '/me Individului nu îi mai bate inima', veți primi CK.`,
          ],
        },
        {
          header: 'Război între facțiuni',
          content: [
            '<b>Exemplu:</b> Dețineți o organizație și sunteți în conflict cu o altă grupare. Sunteți de comun acord să faceți război pe CK. În urma acestuia, toți membrii din facțiunea.',
          ],
        },
        {
          header: 'Închisoare pe viață',
          content: [
            '<b>Exemplu:</b> Sunteți urmărit de poliție pentru diverse infracțiuni și, în urma arestării dumneavoastră, aceștia vă prezintă o sentință de peste 600 de luni pentru faptele comise.',
          ],
        },
        {
          header: 'Decizie sindicat',
          content: [
            '<b>Exemplu:</b> Sunteți implicat într-un conflict care compromite integritatea și reputația sindicatului, astfel un membru al acestuia poate decide să vă ofere CK.',
          ],
        },
        {
          header: 'Alte motive',
          content: [
            '<b>Exemplu:</b> Un civil v-a distrus căsnicia, v-a lăsat fără loc de muncă și v-a adus într-o stare financiară deplorabilă. Vorbiți cu un Responsabil CK prezentându-i situația, acesta vă oferă permisiunea să faceți așa ceva, filmați roleplay-ul în care îl omorâți într-un mod complex, arătați dovada membrului STAFF, pe urmă civilul primește CK.',
          ],
        },
      ],
      sanctions: [],
    },
    {
      header: '3.6 No Fear [NF]',
      content: [
        '➨ Reprezintă alegerea unui jucător de a nu simula frica într-un roleplay în care aceasta este necesară.',
      ],
      sections: [
        {
          header: 'Amenințare cu arma',
          content: [
            '➨ Prin armă se înțelege orice armă letală, capabilă să provoace moartea, precum armă de foc, macetă, topor etc. Amenințarea cu arme nonletale, precum bâtă, baston, taser sau alte mijloace de imobilizare, nu obligă jucătorul să respecte comenzile.',
            '➨ Se consideră No Fear dacă un jucător are arma îndreptată spre dumneavoastră, iar dumneavoastră încercați să fugiți sau refuzați să-i respectați comenzile.',
            '➨ Nu se consideră No Fear doar în cazul în care aveați deja armă în mână, înainte ca jucătorul să aibă arma îndreptată spre dumneavoastră, iar situația permite o reacție roleplay corectă.',
            '➨ Nu orice amenințare cu arma se consideră automat No Fear. Situația se judecă în funcție de distanță, tipul armei, numărul de persoane implicate, șansa reală de scăpare și contextul roleplay.',
            '<b>Exemplu:</b> Sunteți atacat de un mafiot. Acesta are arma îndreptată înspre dumneavoastră și, neavând nicio cale de scăpare, nu efectuați comenzile pe care acesta vi le impune. Trebuie să fiți sancționat pentru că nu ați simulat frica într-un roleplay în care aceasta este necesară.',
          ],
        },
        {
          header: 'Cerințe umilitoare',
          content: [
            '➨ Nu sunteți obligat să acceptați cerințe umilitoare și degradante care sunt făcute pentru batjocură.',
            '➨ Refuzul de a spune formulări umilitoare, precum că sunteți „lache”, „sclav” sau alte expresii asemănătoare, nu se consideră No Fear.',
            '➨ Excepție fac persoanele prinse în timp ce jefuiesc. Dacă sunteți prins la jefuit și refuzați cerințele celor care v-au prins, chiar dacă acestea sunt umilitoare, se consideră No Fear.',
            '<b>Exemplu:</b> Sunteți amenințat cu arma de o organizație rivală și vi se cere să spuneți că sunteți câinele lor. Dacă refuzați această cerință, nu se consideră No Fear.',
          ],
        },
        {
          header: 'Cop Fear [CF]',
          content: [
            '➨ Reprezintă obligația de a simula frica față de poliție atunci când sunteți în subordinea acestora (încătușat, escortat, arestat etc.).',
            '➨ Miștourile exagerate, provocările repetate, batjocura continuă față de polițiști și lipsa de frică față de arestare sunt interzise.',
            '<b>Exemplu:</b> Sunteți reținut de poliție, încătușat și dus la secție. Faceți miștouri față de organele de poliție și vă comportați ca și cum arestarea nu contează. Trebuie să fiți sancționat pentru Cop Fear.',
          ],
        },
        {
          header: 'Cop Bait [CB]',
          content: [
            '➨ Reprezintă provocarea intenționată a poliției pentru a porni o urmărire, o intervenție sau un conflict.',
            '<b>Exemplu:</b> Treceți repetat prin fața unui polițist, claxonați și încercați să îl faceți să vă urmărească. Acest comportament se consideră Cop Bait.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (30m - 180m)',
      ],
    },
    {
      header: '3.7 Roleplay scârbos',
      content: [
        '➨ Este interzis să faceți roleplay scârbos fără permisiunea celorlalți participanți.',
        '➨ Este interzis să forțați discuții sau acțiuni sexuale, degradante, dezgustătoare sau foarte violente asupra altor jucători.',
      ],
      sections: [
        {
          header: 'Acordul participanților',
          content: [
            '➨ Un roleplay sensibil sau inconfortabil se poate face doar dacă toate persoanele implicate sunt de acord.',
            '➨ Dacă o persoană spune că nu dorește să continue acel tip de roleplay, acțiunea trebuie oprită imediat.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (15m - 120m)',
      ],
    },
    {
      header: '3.8 Conducere auto',
      content: [
        '➨ Este interzis să provocați intenționat un accident, excepție fiind manevrele de imobilizare.',
        '➨ Este interzis să faceți orice manevră de imobilizare la o viteză de peste 150 de km/h.',
        '➨ Este interzis să aterizați cu elicopterul pe un drum auto, fără un motiv bine întemeiat.',
      ],
      sections: [
        {
          header: 'Folosirea vehiculului ca armă',
          content: [
            '➨ Este interzis să loviți intenționat un jucător folosind un vehicul, indiferent de situație.',
            '➨ Excepție face cazul în care o persoană se pune intenționat în fața vehiculului dumneavoastră și nu aveți nicio altă modalitate realistă de scăpare.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (10m - 60m)',
      ],
    },
    {
      header: '3.9 Înșelăciune',
      content: [
        '➨ Este interzis să înșelați pe cineva dacă suma totală de câștig este mai mare de 10.000 de lei.',
        '➨ Se încadrează și situațiile unde propuneți unui jucător o tranzacționare cu scopul ca acesta să fie jefuit ulterior.',
      ],
      sections: [
        {
          header: 'Promisiuni',
          content: [
            '➨ Se consideră înșelăciune și promisiunile făcute unui jucător cu scopul de a obține bani, iteme, servicii sau avantaje, dacă după ce jucătorul și-a respectat partea înțelegerii refuzați să vă respectați promisiunea.',
            '<b>Exemplu:</b> Îi cereți unui jucător să vă aducă anumite iteme sau bani pentru a-l primi într-o mafie. După ce acesta face task-ul și vă oferă itemele, refuzați să îl mai primiți și păstrați bunurile. Acest lucru se consideră înșelăciune.',
          ],
        },
        {
          header: 'Barbut și pariuri pe schimburi',
          content: [
            '➨ Dacă acceptați să jucați pe schimburi, trebuie să respectați miza și înțelegerea făcută.',
            '➨ Refuzul de a vă ține de cuvânt după ce celălalt jucător și-a respectat partea se consideră înșelăciune.',
            '➨ Este interzis să pariați bani, bunuri, vehicule, case sau orice alte averi pe care nu le aveți în posesie în momentul pariului. Acest comportament se consideră înșelăciune gravă.',
            '➨ Echipa STAFF nu este obligată să returneze câștigurile promise în cazul în care unul dintre pariori face înșelăciune. Este responsabilitatea pariorilor să verifice înainte dacă persoana respectivă deține bunurile sau averea pe care spune că o mizează.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (30m - 250m)',
        '⟶ Ban (7z - 90z)',
      ],
    },
    {
      header: '3.10 Corupție',
      content: [
        '➨ Este interzis ca membrii unei facțiuni de stat (poliție, medici, consiliu etc.) să fie corupți (job-uri sau alte activități ilegale, oferirea bunurilor din facțiune, oferirea de informații confidențiale ale facțiunii etc.).',
        '➨ Excepție de la această regulă are personalul din cadrul Departamentului de Reparații și Revizii Auto.',
        '➨ Confiscarea nejustificată de bunuri sau folosirea lor în scop personal se consideră corupție.',
        '➨ Singurul roleplay de corupție acceptat este cel care are legătură cu sindicatul.',
      ],
      sanctions: [
        '⟶ Jail (30m - 180m)',
        '⟶ Ban (7z - 30z)',
      ],
    },
    {
      header: '3.11 Raid-uri',
      content: [
        '➨ Este interzis ca o organizație, alta decât cele oficiale, să facă un raid.',
        '➨ Pentru a se da raid la o altă organizație este necesar ca minim 4 membri din aceasta să fie în joc.',
        '➨ Fiecare organizație oficială are permisiunea de a da un singur raid pe săptămână.',
      ],
      sanctions: [
        '⟶ Jail (30m - 120m)',
      ],
    },
    {
      header: '3.12 Instituție',
      content: [
        '➨ Este interzis să faceți activități periculoase într-o instituție (curtea de apel, secția de poliție, spitalul, service-ul auto, consiliul, judecătoria, universitatea etc.), cât și în împrejurimile acesteia.',
        '➨ Este interzis să trageți cu arme de foc sau să folosiți arme asupra unei instituții, indiferent de zona din care trageți. Regula se aplică și dacă sunteți în afara instituției, dar acțiunea vizează instituția sau persoanele aflate în interiorul sau în zona acesteia.',
        '➨ Este interzis să se fure bunuri din depozitele facțiunilor legale.',
        '➨ Este interzis să se facă roleplay că se șterge baza de date a unei instituții.',
      ],
      sanctions: [
        '⟶ Jail (30m - 180m)',
      ],
    },
    {
      header: '3.13 Loc de muncă',
      content: [
        '➨ Este interzis să desfășurați activități care nu au legătură cu atribuțiile locului de muncă în timp ce vă aflați în tură, în cazurile unde se primește salariu.',
        '➨ Este interzis să desfășurați activitatea de la locul de muncă folosind vehicule personale, dacă acel loc de muncă pune la dispoziție vehicule de serviciu. Singura excepție este pentru detectivii din cadrul poliției.',
        '➨ Este interzis să folosiți un vehicul de la locul de muncă pentru scopurile personale.',
      ],
      sanctions: [
        '⟶ Jail (30m - 240m)',
      ],
    },
    {
      header: '3.14 Zone publice, zone rău famate și zone retrase',
      content: [
        '➨ Această regulă reprezintă zonele unde pot avea loc activități ilegale și unde acestea sunt interzise.',
        '➨ Zonele sunt marcate pe hartă astfel: zonele publice sunt zonele verzi, zonele rău famate sunt zonele roșii, iar zonele nemarcate sunt considerate zone retrase.',
      ],
      sections: [
        {
          header: 'Interdicții în zonele publice',
          content: [
            '➨ În zonele publice este interzis să jefuiți, să răpiți, să folosiți arme albe sau arme de foc, să furați vehicule, sau să luați bunuri din vehicule.',
            '➨ Furtul unui vehicul în zonă publică nu este permis, inclusiv atunci când vehiculul are cheia în contact și este lăsat descuiat.',
            '➨ În zonele publice este permisă doar bătaia cu pumnii, dacă există un motiv roleplay.',
          ],
        },
        {
          header: 'Excepții',
          content: [
            '➨ Excepțiile sunt activitățile ilegale ale serverului care sunt construite să se desfășoare acolo, precum livratul de țigări, jafurile de case, magazine, bănci sau alte sisteme ale serverului.',
            '➨ În aceste situații se pot folosi arme, cât timp contextul roleplay justifică acest lucru.',
            '➨ O altă excepție este aprobarea explicită oferită de sindicat pentru o acțiune specială într-o zonă publică, precum răpirea unei persoane sau o acțiune organizată.',
          ],
        },
      ],
      sanctions: [
        '⟶ Jail (15m - 150m)',
      ],
    },
    {
      header: '!4. Jefuirea persoanelor',
    },
    {
      header: '4.1 Rob & Kill [RK]',
      content: [
        '➨ Reprezintă jefuirea unei persoane și omorârea acesteia imediat după, sau omorârea unei persoane doar pentru a o putea jefui.',
        '➨ Regula nu se aplică în cazul în care victima nu respectă comenzile atacatorului.',
        '➨ Regula nu se aplică în cazul în care au fost luate doar bunuri care au rol de comunicare (telefon, radio, mdt etc.).',
      ],
      sanctions: [
        '⟶ Jail (20m - 120m)',
      ],
    },
    {
      header: '4.2 Abuz jaf',
      content: [
        '➨ Este interzis să tâlhăriți aceeași persoană, decât după 3 ore de la ultimul jaf asupra acesteia.',
        '➨ Este interzis să jefuiți o persoană care este în comă, fără să fi avut vreo interacțiune cu aceasta.',
      ],
      sanctions: [
        '⟶ Jail (20m - 90m)',
      ],
    },
    {
      header: '4.3 Ore de jefuit',
      content: [
        '➨ Aveți permisiunea de a jefui doar în intervalul orar 18:00 - 06:00.',
        '➨ Dacă un membru al unei organizații ilegale cere taxă pentru o locație deținută de organizația sa, iar persoana refuză să plătească, acesta are voie să îi confiște bunurile ilegale, indiferent de oră.',
      ],
      sanctions: [
        '⟶ Jail (20m - 90m)',
      ],
    },
    {
      header: '4.4 Jefuirea persoanelor care fac job',
      content: [
        '➨ Este strict interzis să jefuiți jucătorii la minijob-uri, job-uri, cât și pe cei care sunt în tură la facțiunile legale (poliție, medici, mecanici etc.).',
        '➨ Regula nu se aplică în cazul în care au fost luate doar bunuri vătămătoare (cuțit, pistol, carabină etc.) sau doar bunuri care au rol de comunicare (telefon, radio, mdt etc.).',
        '➨ Vehiculele de facțiuni pot fi furate doar în situații în care acestea reprezintă singura variantă de scăpare. Utilizarea acestora în afara evadării imediate este strict interzisă.',
      ],
      sanctions: [
        '⟶ Jail (20m - 90m)',
      ],
    },
    {
      header: '!5. Jafuri organizate',
    },
    {
      header: '5.1 Ostatic',
      content: [
        '➨ Este interzis să aveți ostatic fals.',
        '➨ Este interzis să solicitați bani sau bunuri personale în negocierile cu ostatici purtate cu facțiunile legale.',
        '➨ La jafurile de clădiri nu este permis roleplay-ul cu ostatic.',
      ],
      sanctions: [
        '⟶ Jail (15m - 90m)',
      ],
    },
    {
      header: '5.2 Magazine',
      content: [
        '➨ Pentru a jefui un magazin trebuie să fiți minim 2 persoane.',
        '➨ Confruntarea începe imediat. Intervenția forțelor de ordine poate fi directă și imediată, fără avertisment.',
      ],
      sanctions: [
        '⟶ Jail (10m - 40m)',
      ],
    },
    {
      header: '5.3 Bănci',
      content: [
        '➨ Pentru a jefui o bancă trebuie să fiți minim 4 persoane.',
        '➨ Confruntarea începe imediat. Intervenția forțelor de ordine poate fi directă și imediată, fără avertisment.',
      ],
      sanctions: [
        '⟶ Jail (10m - 40m)',
      ],
    },
  ],
  tutoriale: [
    {
      header: 'Interacțiuni',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/kTgjOqeTeSw'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Garsonieră',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/ocAW4l7SDmI'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Hud ceas',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/RfmQft7OqoA'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Hud vehicul',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/H2iJpSi6QTY'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Cheie vehicul',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/Q3X0sQ8NuXc'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Bancă',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/0Dd6VfHXPH0'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Meniu F1',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/xZX4tLU8Kvo'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Permis de conducere',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/ZI0D5SaUzOI'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Universitate',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/fT6VWYYFXQs'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Gunoier',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/P9vylHoXs4Y'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Pescar',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/RDHOXdJbLIc'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Tirist',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/MJ8oxelYfvY'></iframe>
        </div>`,
      ],
    },
    {
      header: 'Miner',
      content: [
        `<div class='video'>
          <iframe width='80%' height='700vh' src='https://www.youtube.com/embed/gll7c8q7pJ0'></iframe>
        </div>`,
      ],
    },
  ],
}

function formatHeader(str) {
  return str.startsWith('!') ? str.substring(1) : str
}

function updateUiScale() {
  const baseWidth = 1920
  const baseHeight = 1080
  const scaleX = window.innerWidth / baseWidth
  const scaleY = window.innerHeight / baseHeight
  const uiScale = Math.min(scaleX, scaleY)
  document.documentElement.style.setProperty('--ui-scale', uiScale)
}

function normalizeSearchText(value) {
  return value.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

let currentOption = 'regulament'

function setOption(option, instant) {
  currentOption = option
  const query = normalizeSearchText(($('#info-search').val() || '').trim())
  const items = content[option].filter((item) => {
    if (!query)
      return true
    return normalizeSearchText(JSON.stringify(item)).includes(query)
  })
  const render = function () {
    $('.value').empty()
    if (items.length === 0) {
      $('.value').append(`
        <div class='empty-results'>
          <h2>Nu au fost găsite rezultate</h2>
          <span>Încercați să folosiți un alt cuvânt sau o altă formulare pentru căutare</span>
        </div>
      `)
      $('.value').fadeIn(instant ? 0 : 300)
      return
    }
    for (let i = 0; i < items.length; i++) {
      $('.value').append(`
        <div class='item'>
          ${items[i].header ? `
            <div class='item-header ${items[i].header.startsWith('!') ? 'full' : ''}'>
              <h1>${formatHeader(items[i].header)}</h1>
            </div>
          ` : ``}
          ${items[i].content ? `
            <div class='item-content'>
              ${items[i].content.map((c) => `<span>${c}</span>`).join('')}
            </div>
          ` : ``}
          ${items[i].sections ? `
            <div class='item-sections'>
              ${items[i].sections.map((section) => `
                <div class='section'>
                  <h2>${section.header}</h2>
                  <div class='section-content'>
                    ${section.content.map((c) => `<span>${c}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ``}
          ${items[i].sanctions && items[i].sanctions.length ? `
            <div class='sanctions'>
              <h2>Sancțiuni</h2>
              <div class='sanctions-content'>
                ${items[i].sanctions.map((c) => `<span>${c}</span>`).join('')}
              </div>
            </div>
          ` : ``}
        </div>
      `)
    }
    $('.value').fadeIn(instant ? 0 : 300)
  }
  if (instant) {
    render()
  } else {
    $('.value').fadeOut(300, render)
  }
}

$(function () {
  updateUiScale()
  window.addEventListener('resize', updateUiScale)

  function display(bool) {
    if (bool) {
      $('body').fadeIn()
    } else {
      $('body').fadeOut()
    }
  }

  display(true)
  setOption('regulament', true)

  window.addEventListener('message', function (event) {
    var item = event.data
    if (item.type === 'ui') {
      if (item.status == true) {
        display(true)
        setOption($('button.active').data('action'))
      } else {
        display(false)
      }
    }
  })

  $('button').click(function () {
    const action = $(this).data('action')
    if (action !== 'regulament' && action !== 'tutoriale')
      return
    if ($(this).hasClass('active'))
      return
    $('button.active').removeClass('active')
    $(`button#${action}`).addClass('active')
    $('#info-search').val('')
    $('#info-search').attr('placeholder', action === 'tutoriale' ? 'Căutați în tutoriale...' : 'Căutați în regulament...')
    setOption(action)
  })

  $('#info-search').on('input', function () {
    setOption(currentOption, true)
  })

})
