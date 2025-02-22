import React, { useState, useEffect } from "react";
import "./AdventCalender.css";

const DoorAnimation = ({ onAnimationEnd, position }) => {
  const [animationsCompleted, setAnimationsCompleted] = useState(0);

  const handleAnimationEnd = () => {
    setAnimationsCompleted((prev) => prev + 1);
  };

  useEffect(() => {
    if (animationsCompleted >= 2) {
      // Beide Türen haben die Animation beendet
      onAnimationEnd();
    }
  }, [animationsCompleted, onAnimationEnd]);

  const { top, left, width, height } = position;

  return (
    <div
      className="door-animation"
      style={{
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="wrap">
        <div className="day" onAnimationEnd={handleAnimationEnd}>
          2
        </div>
        <div className="left" onAnimationEnd={handleAnimationEnd}>
          <div className="panel"></div>
        </div>
        <div className="right" onAnimationEnd={handleAnimationEnd}>
          <div className="panel"></div>
        </div>
      </div>
    </div>
  );
};

const AdventCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [today, setToday] = useState(null);
  const [isDoorAnimating, setIsDoorAnimating] = useState(false);
  const [doorPosition, setDoorPosition] = useState(null);

  const days = [
    {
      day: 4,
      order: 1,
      title: "10% auf das Weihnachtsmenü im Restaurant Alpspitz",
      text: (
        <>
          Feiern Sie die festliche Jahreszeit bei uns im Restaurant Alpspitz und
          genießen Sie ein unvergessliches Weihnachtsmenü! Wir haben für Sie und
          Ihre Liebsten ein besonders köstliches Menü zusammengestellt – und das
          Beste: Sie bekommen 10% Rabatt auf unser exklusives Weihnachtsangebot!
          <br />
          <span className="poker-highlight">Poker:</span> Erleben Sie «BIG
          WEDNESDAY» im GC Pokerroom!
          <br />
          Buy-in von CHF 220 (200+20)40’000er Stack. 25-Minuten-Level, die
          Möglichkeit für Re-Entry (bis Level 9) und einen garantierten
          Preispool von <strong>CHF 6'000 GTD</strong>. Start ist um{" "}
          <strong>17 Uhr</strong>.
        </>
      ),
      img: "/images/home-1/04.12.jpg",
      buttonText: "«PDF download»",
      buttonLink: "/images/home-1/04.12.pdf",
    },
    {
      day: 15,
      order: 2,
      title: "«3. Advent Verlosung, 21.00 Uhr»",
      text: (
        <>
          <h1>Gewinnen Sie die begehrten AirPods Max.</h1>
          <br />
          Heute findet im Grand Casino Liechtenstein eine exklusive Verlosung
          statt, bei der Sie die Chance haben, AirPods Max zu gewinnen – die
          perfekten Kopfhörer für erstklassigen Sound und Komfort! 🎧✨
        </>
      ),
      text2:
        "Turbo-Action und das grosse Finale im GC Pokerroom. Der Tag beginnt mit dem Winter Deepstack 1F Turbo-Turnier, das um 12.00 Uhr startet. Der Höhepunkt des Winter Deepstack-Events steht um 17.00 Uhr auf dem Programm: das Winter Deepstack Finale. Wer sich bis hierhin durchgesetzt hat, hat die Chance auf die begehrten Preisgelder und den glorreichen Sieg!",
      text3: "«Poker»",
      img: "/images/home-1/15.12.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://live.gcli.li/upcoming-events/",
    },
    {
      day: 22,
      order: 3,
      title: "«4. Advent»",
      text: (
        <>
          Große Weihnachtsverlosung
          <br />
          Heute um 21.00 Uhr erwartet Sie ein absolutes Highlight! Sie haben die
          Chance, ein exklusives All-In Ticket im Wert von CHF 1’000 zu
          gewinnen.
        </>
      ),
      text3: "«Poker»",
      text2: (
        <>
          🎄 PreXmas Grand Stack GTD CHF 10’000 – Pokerevent der Spitzenklasse
          🎄
          <br />
          Packen Sie Ihre Pokerstrategien aus und messen Sie sich mit den besten
          Spielern – wer wird der Weihnachtschampion? Details zum Event:
          <br />
          Buy-In: CHF 140 Start: 16.00 Uhr
          <br />
          Preisgeld: CHF 10,000 garantiert – Ein Event, das Sie nicht verpassen
          sollten!
        </>
      ),
      img: "/images/home-1/22.11.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://gcli.li/pokerroom",
    },
    {
      day: 1,
      order: 4,
      title: "1. Advent: Verlosung, 21.00 Uhr",
      text: (
        <>
          Sie möchten das brandneue iPhone 16 gewinnen? <br />
          Sei dabei und gewinne ein brandneues iPhone 16! <br />
          Wann? Sonntag, 1. Dezember um 21 Uhr <br />
          Wie? Beim Eintritt erhält jeder Gast ein Los – die Ziehung erfolgt um
          21 Uhr! <br />
          Regel: Ein Gewinn-Los pro Besucher. <br />
          Verpasse nicht die Chance auf dieses geniale Geschenk zum Start in den
          Dezember! <br />
          <br />
          <span className="poker-highlight">Poker:</span>Erleben Sie «GRAND
          STACK» im Pokerroom! <br />
          Buy-in CHF 130 (115+15), 100’000 Stack,CHF 5’000 GTD <br />
          15 min. Lvl, Reg. Lvl 9, 1 Re-Entry, Start 17 Uhr
        </>
      ),
      img: "/images/home-1/01.12.jpg",
    },
    {
      day: 8,
      order: 5,
      title: "2. Advent: Verlosung, 21.00 Uhr",
      text: "Herzlichen Glückwunsch an unseren Dyson Staubsauger Gewinner!",
      img: "/images/home-1/2adventwinner.jpg",
    },
    {
      day: 11,
      order: 6,
      title: "🎉 Feiern Sie mit uns 5 Jahre Grand Casino Liechtenstein! 🎉",
      text: (
        <>
          Wir laden Sie herzlich ein, mit uns unser grosses 5-Jahr-Jubiläum zu
          feiern! Es erwartet Sie ein unvergesslicher Abend voller
          Überraschungen, Gewinnchancen und exklusiven Angeboten. <br />
          <strong>Was Sie erwartet:</strong>
          <br />
          🎁 Verlosungen um 22.00 Uhr
          <br />
          💰 CHF 15 Spielguthaben 🍰 Geburtstagskuchen
          <br />
          🍹 Drink of the Day
          <br />
          🍴 5-Gänge-Menü Special Preis: CHF 55.-
          <br />
          <strong>Im GC Pokerroom </strong>findet das grosse{" "}
          <strong> Geburtstagsturnier</strong> statt – ein Highlight für alle
          Poker-Fans! Seien Sie dabei, wenn wir mit einem{" "}
          <strong>GTD 5’555</strong> Pokerturnier das Jubiläum feiern.
        </>
      ),
      img: "/images/home-1/11.12.jpg",
      buttonText: "«Zum Pokerroom»",
      buttonLink: "/pokerroom",
    },
    {
      day: 18,
      order: 7,
      title: "«Süße Grüße»",
      text2: (
        <>
          Weihnachten ist die Zeit des Gebens und was könnte persönlicher und
          liebevoller sein als selbstgemachte Weihnachtskekse? Mit unseren
          leckeren Cookies verbreiten wir festliche Stimmung bei unseren Gästen.
          Lassen Sie es sich schmecken! ✨ Holen Sie sich heute Ihren leckeren
          Cookie unter Vorlage der PDF an der Rezeption.
          <br />
          <br />
          <span className="poker-highlight">Poker:</span>{" "}
          <strong>BIG WEDNESDAY</strong> <br />
          Buy-in: <strong>CHF 220 (200+20)</strong>, 40’000 Stack
          <br />
          25-Minuten-Level, Registrierung bis Level 9<br />
          Re-Entry möglich, Start um <strong>17 Uhr</strong>
        </>
      ),
      img: "/images/home-1/18.12.jpg",
      videoSrc: "/images/home-1/keks.mp4",
      buttonText: "«PDF download»",
      buttonLink: "https://gcli.li/18.12.pdf",
    },
    {
      day: 13,
      order: 8,
      title: "«Höchster Gewinn bei Slotautomaten»",
      text: "Im Jahr 2021 wurde der höchste Gewinn beim Slotautomaten im Grand Casino ausbezahlt. Er lag bei CHF 147’820.",
      text2:
        "Vom 12. bis 15. Dezember 2024 findet im Grand Casino Liechtenstein das exklusive Winter Deepstack-Turnier statt! Egal, ob Sie ein erfahrener Spieler oder ein Newcomer sind – dieses Event ist ein Muss für alle, die das Pokerspiel lieben! Das erste Turnier heute startet um 12.00 Uhr und weiter geht es mit dem Winter Deepstack 1C um 17.00 Uhr.",
      text3: "«Poker»",

      img: "/images/home-1/13.12.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://live.gcli.li/upcoming-events/",
    },
    {
      day: 12,
      order: 9,
      title: "Rückblick 5 Jahre GCLI",
      text: "An 314 Spielautomaten wird Ihr Erlebnis bei uns einzigartig. Der Einsatz ist von CHF 0.25 bis zu CHF 50 frei wählbar.📱",
      text2:
        "Winter Deepstack – GTD von CHF 100’000 ❄️🃏 Bereit für ein spektakuläres Poker-Erlebnis? Vom 12. bis 15. Dezember 2024 lädt der Pokerroom zum exklusiven Winter Deepstack ein – mit einem garantierten Preispool von GTD CHF 100’000 💰 Heute ab 17.00 Uhr mit einem Buy-In von CHF 200.",
      text3: "«Poker»",
      img: "/images/home-1/03.12.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://example.com/titel12",
    },
    {
      day: 23,
      order: 10,
      title: "«Erleben Sie das Roulette-Spiel auf eine ganz neue Art!»",
      text: (
        <>
          Beim Special Roulette haben Sie die Chance, eine Flasche Liesecco zu
          gewinnen.
          <br />
          Setzen Sie auf eine Zahl und wenn Ihre Zahl gewinnt, erhalten Sie als
          Belohnung eine erfrischende Flasche Liesecco! Wir wünschen Ihnen viel
          Glück! 🍀
          <br />
          Unter Vorlage der PDF an der Rezeption bekommen Sie einen Jeton, den
          Sie heute an einen unserer Roulette-Tische einsetzen können.
        </>
      ),
      text2: (
        <>
          🎄 PREXMAS LOW BUDGET – CHF 4’000 GTD
          <br />
          Buy-in: CHF 50 (40+10)
          <br />
          30’000 Stack, 20 min. Lvl, Reg. Lvl 9, Re-Entry
          <br />
          Start: 17.00 Uhr – Ein Event, das Sie nicht verpassen sollten!
        </>
      ),
      img: "/images/home-1/23.12.jpg",
      buttonText: "«PDF download»",
      buttonLink: "https://gcli.li/23.12.pdf",
    },
    {
      day: 2,
      order: 11,
      title: "Gutschein für einen exklusiven Drink in der Roof Top Bar! 🍸🌆",
      text: (
        <>
          Heute gibt's einen besonderen Bonus für alle Gäste! 🎁 <br />
          Genießen Sie den Ausblick auf die Liechtensteiner und Schweizer Berge,
          entspannen Sie bei exklusiven Drinks und einer einzigartigen
          Atmosphäre. <br />
          Wir freuen uns darauf, Sie in unserer «Floor Four» Roof Top Bar
          willkommen zu heißen – der perfekte Ort für einen Abend mit Stil! 🥂{" "}
          <br />
          Unter Vorlage der PDF an der Rezeption erhalten Sie Ihren «Floor Four»
          Gutschein. <br />
          <span className="poker-highlight">Poker:</span> Erleben Sie «LOW
          BUDGET MONDAY» im Pokerroom! Buy-in CHF 60 (50+10), 30’000 Stack, 20
          min. Lvl, Reg. Lvl 9, Re-Entry, Start 18 Uhr
        </>
      ),
      img: "/images/home-1/02.12.jpg",
      buttonText: "«PDF download»",
      buttonLink: "https://gcli.li/floorfour.pdf",
    },
    {
      day: 7,
      order: 12,
      title: "Über CHF 6’370’000",
      text: "Im GC Pokerroom wurden im Jahr 2024 über CHF 6’370’000 GTD bei Pokerturnieren garantiert. ✨",
      text2:
        "Die tägliche Abwechslung an Turnieren sorgt dafür, dass immer neue Herausforderungen auf die Teilnehmer warten. Besuchen Sie das Grand Casino Liechtenstein und erleben Sie täglich spannende Pokerevents, die garantiert für Nervenkitzel und Adrenalin sorgen!",
      img: "/images/home-1/07.12.jpg",
    },
    {
      day: 10,
      order: 13,
      title: "🎉 Roulette mal anders 🎉",
      text: (
        <>
          <p>
            Machen Sie Ihr Roulette-Spiel noch aufregender mit unserem
            Special-Roulette!
          </p>
          <p>
            Setzen Sie Ihre Lieblingszahl am Roulette Tisch und erleben Sie, wie
            der Nervenkitzel steigt. Wenn Sie auf einem Straight Up gewinnen,
            erwartet Sie eine prickelnde Überraschung: Eine Flasche Liesecco –
            der perfekte Begleiter für jeden Anlass! Unter Vorlage der PDF an
            der Rezeption bekommen Sie einen Jeton, den Sie heute an einen
            unserer Roulette-Tische einsetzen können.
          </p>
          <p>
            <strong>Poker:</strong> <strong>BIGSTACK TUESDAY</strong> – Buy-in{" "}
            <strong>CHF 90 (80+10)</strong>, 50’000 Stack,{" "}
            <strong>15 min. Lvl</strong>, Reg. bis <strong>Level 11</strong>,
            Re-Entry,
            <strong>Start 18 Uhr</strong>
          </p>
        </>
      ),
      img: "/images/home-1/10.12.jpg",
      buttonText: "«PDF download»",
      buttonLink: "https://gcli.li/10.12.pdf",
    },
    {
      day: 19,
      order: 14,
      title: "«Neue Automaten»",
      text2: (
        <>
          Unsere Techniker haben die ersten Wochen im November damit verbracht,
          für Sie neue Automaten zu installieren. ✨
          <br />
          Auf <strong>49 neuen Automaten</strong> mit der besten Technik dürfen
          Sie Ihre Lieblingsspiele spielen. 💫
          <br />
          <span className="poker-highlight">Poker:</span>{" "}
          <strong>PREXMAS DEEP&amp;TURBO</strong> <br />
          Buy-in: <strong>CHF 120 (100+20)</strong>, 80’000 Stack
          <br />
          15-Minuten-Level, Registrierung bis Level 11
          <br />
          Re-Entry möglich, Start um <strong>17 Uhr</strong>
        </>
      ),
      img: "/images/home-1/19.12.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://gcli.li/pokerroom",
    },
    {
      day: 24,
      order: 15,
      title: "Fröhliche Weihnachten! 🎄🎁",
      text: (
        <>
          Wir wünschen Ihnen eine besinnliche und fröhliche Weihnachtszeit! Als
          besonderes Geschenk haben wir etwas für Sie vorbereitet: Jeder Gast,
          der den Adventskalender öffnet, erhält CHF 10 Spielguthaben sowie ein
          Gewinnticket, das Sie für die Verlosungen am 26. Dezember 2024 um
          22.00 Uhr sammeln können!
          <br />
          <br />
          Zeigen Sie das PDF bei der Rezeption vor, dann erhalten Sie das
          Spielguthaben von CHF 10.
          <br />
          <br />
          🎄 Feiern Sie Weihnachten im Restaurant Alpspitz 🎄
          <br />
          Vom 24. – 26. Dezember 2024 laden wir Sie herzlich zu einem festlichen
          Weihnachtsmenü im Restaurant Alpspitz ein. Genießen Sie die
          besinnliche Atmosphäre und lassen Sie sich von unserem Küchenchef mit
          einer exquisiten Auswahl an festlichen Gerichten verwöhnen. Unser
          Weihnachtsmenü ist perfekt für einen besonderen Abend mit Familie,
          Freunden oder als romantisches Dinner zu zweit.
        </>
      ),
      img: "/images/home-1/24.12.jpg",
      buttonText: "«PDF download»",
      buttonLink: "https://gcli.li/24.12.pdf",
    },
    {
      day: 14,
      order: 16,
      title: "🎉Events im Jahr 2024🎉",
      text: (
        <>
          "Dieses Jahr haben wir bis zu 26 Events im Haus durchgeführt und dabei
          <br />
          insgesamt CHF 152'074 verlost.✨
        </>
      ),
      text2: (
        <>
          14. Dezember 2024 – Doppelte Poker-Action im Grand Casino
          Liechtenstein! Zwei aufregende Pokerturniere stehen auf dem Programm:
          das Winter Deepstack 1D um 12.00 Uhr und das Winter Deepstack 1E um
          17.00 Uhr."
          <br />
          Seien Sie dabei und kämpfen Sie um das Preisgeld GTD von CHF 100’000
          in diesem exklusiven Winter-Event!
        </>
      ),
      text3: "«Poker»",
      img: "/images/home-1/14.12.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://example.com/titel14",
    },
    {
      day: 20,
      order: 17,
      title: "«Rekord beim Poker»",
      text: "2’834 Entries und ein Preispool von CHF 1’469’650 – die EPM ist zum absoluten Rekordevent im GC Pokerroom geworden.",
      text3: "«Poker»",
      text2:
        "🎄 PreXmas 6-Max Pokerevent 🎄 Bereiten Sie sich auf ein spannendes und actiongeladenes Pokererlebnis vor! Das PreXmas 6-Max Pokerevent lädt Sie ein, Ihre Pokerfähigkeiten unter Beweis zu stellen und sich in einem dynamischen Format mit anderen Spielern zu messen. Details zum Event: Buy-in: CHF 180, Start: 17.00 Uhr",
      img: "/images/home-1/eeeet.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://live.gcli.li/upcoming-events/",
    },
    {
      day: 3,
      order: 18,

      title: "",
      text: (
        <>
          Roulette Special <br />
          Bei unserem Roulette-Special zählt jeder Einsatz, aber besonders mit
          einem Straight Up haben Sie die Chance auf einen prickelnden Gewinn:
          Eine flasche Liesecco für ihren Erfolg! <br />
          <span className="poker-highlight">Poker:</span>
          Im Pokerroom findet heute «Big Stack Tuesday» statt. <br />
          Event: Buy-in: CHF 90, CHF 3’500 GTD, Start: 18.00 Uhr <br />
        </>
      ),
      img: "/images/home-1/03.12.jpg",
      buttonText: "«PDF download»",
      buttonLink: "https://gcli.li/roulette-special.pdf",
    },
    {
      day: 9,
      order: 19,
      title: "🎉 Ein 10er für dich 🎉",
      text: (
        <>
          <p>
            <strong>Exklusives Angebot:</strong> CHF 10 Spielguthaben für jeden
            Gast, der heute das Download-PDF an der Rezeption vorzeigt! Es war
            noch nie so einfach, von einem tollen Bonus zu profitieren.
          </p>

          <p>
            <strong>Gültig:</strong> 09.12.2024 💫
          </p>

          <p>
            <strong>Poker:</strong> «LOW BUDGET MONDAY» – CHF 2’000 GTD
            <br />
            <strong>Buy-in:</strong> CHF 60 (50+10), 30’000 Stack
            <br />
            <strong>Level-Zeit:</strong> 20 Minuten
            <br />
            <strong>Late Registration:</strong> bis Level 9
            <br />
            <strong>Re-Entry:</strong> Ja
            <br />
            <strong>Start:</strong> 18 Uhr
          </p>
        </>
      ),
      img: "/images/home-1/09.12.jpg",
      buttonText: "«PDF download»",
      buttonLink: "https://gcli.li/1oer.pdf",
    },
    {
      day: 16,
      order: 20,
      title: "🎉 Kulinarische Genüsse 🍲",
      text: "Mit dem CHF 25 Alpspitz Gutschein können Sie sich ein ganz besonderes Geschmackserlebnis gönnen! ✨",
      img: "/images/home-1/16.12.jpg",
      text2: (
        <>
          Egal, ob für einen köstlichen Snack, ein erfrischendes Getränk oder
          ein kleines Andenken – der Alpspitz Gutschein ist der perfekte
          Begleiter für alle, die das Beste aus ihrer Zeit im Grand Casino
          Liechtenstein herausholen möchten. Holen Sie sich heute Ihren Alpspitz
          Gutschein unter Vorlage der PDF an der Rezeption. 💫
          <br />
          <br />
          <span className="poker-highlight">Poker:</span>{" "}
          <strong>LOW BUDGET MONDAY</strong> <br />
          Buy-in <strong>CHF 60 (50+10)</strong>, 30’000 Stack <br />
          <strong>20-Minuten-Level</strong>, Registrierung bis Level 9 <br />
          <strong>Re-Entry</strong> möglich, Start um <strong>18 Uhr</strong>.
        </>
      ),
      buttonText: "PDF DOWNLOAD",
      buttonLink: "https://gcli.li/16.pdf",
    },
    {
      day: 6,
      order: 21,
      title: "«Besuch vom Nikolaus im Grand Casino Liechtenstein»",
      text: (
        <>
          Erleben Sie heute einen Abend voller festlicher Stimmung, spannender
          Pokeraction und einem Besuch vom Nikolaus höchstpersönlich! 🎄 🎅
          <br />
          <strong>Besuch vom Nikolaus:</strong> Der Nikolaus ist von 18 bis 22
          Uhr bei uns und hat für jeden Gast ein kleines Geschenk dabei. 🍬🎁
          <br />
          <strong>Poker:</strong> Nikolaus-Poker – Mit einem garantierten
          Preispool von 
          <strong>6.000 CHF</strong> beginnt das Turnier um 
          <strong>17 Uhr</strong>. Ein spannendes Event für Poker-Fans, bei dem
          nicht nur Glück, sondern auch Strategie gefragt ist!
        </>
      ),
      img: "/images/home-1/06.12.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://live.gcli.li/",
    },
    {
      day: 17,
      order: 22,
      title: "🎉 Roulette Special 🎉",
      text2: (
        <>
          Spielen Sie eine Runde Roulette und gewinnen Sie bei einem Straight Up
          eine exklusive Flasche Liesecco – den erfrischenden Sekt, der Ihre
          Feier noch prickelnder macht! 🍾 Wir wünschen Ihnen viel Glück 🍀
          Unter Vorlage der PDF an der Rezeption bekommen Sie einen Jeton, den
          Sie heute an einen unserer Roulette-Tische einsetzen können. 💫
          <br />
          <br />
          <span className="poker-highlight">Poker:</span>{" "}
          <strong>BIGSTACK TUESDAY</strong> <br />
          Buy-in <strong>CHF 90 (80+10)</strong>, 50’000 Stack <br />
          <strong>15-Minuten-Level</strong>, Registrierung bis Level 11 <br />
          <strong>Re-Entry</strong> möglich, Start um <strong>18 Uhr</strong>
        </>
      ),
      img: "/images/home-1/17.12.jpg",
      buttonText: "«PDF download»",
      buttonLink: "https://gcli.li/17.12.pdf",
    },
    {
      day: 5,
      order: 23,
      title: "Mitarbeiter im GCLI",
      text: "Das Grand Casino Liechtenstein beschäftigt exakt 159 Mitarbeiter aus 22 verschiedenen Nationen. Unser gemeinsames Ziel: Ihnen ein einzigartiges und komfortables Spielerlebnis zu bieten.",
      img: "/images/home-1/05.12.jpg",
    },
    {
      day: 21,
      order: 24,

      title: "",
      text: (
        <>
          In unserem Restaurant Alpsitz haben wir 41 Weinsorten, davon sind 22
          Sorten Rotweine, 2 Sorten Rosé, 9 Sorten Weissweine und 8 Sorten Sekt
          / Champagner und 4 exklusive Steaksorten im Dry Ager. Diese vier
          Fleischsorten bieten ein breites Spektrum an Aromen und Texturen und
          garantieren ein außergewöhnliches Geschmackserlebnis für jeden
          Fleischliebhaber! <br />
          <h1>«Poker»</h1>
          Lassen Sie sich das spannende PreXmas Bigstack Freezeout Pokerevent
          nicht entgehen und erleben Sie Poker auf höchstem Niveau! Details zum
          Event: Buy-in: CHF 150, Start: 16.00 Uhr
        </>
      ),
      img: "/images/home-1/21.12.jpg",
      buttonText: "«Pokerroom»",
      buttonLink: "https://live.gcli.li/",
    },
  ];

  useEffect(() => {
    const simulatedDate = new Date("2024-12-24");
    setToday(simulatedDate.getDate());
  }, []);

  // Türchen öffnen
  const openDay = (day, event) => {
    if (day.day === 1 || day.day === 8 || day.day === 15 || day.day === 22) {
      setSelectedDay({
        day: day.day,
        img:
          day.day === 1
            ? "/images/home-1/adventwinner.jpg"
            : day.day === 8
            ? "/images/home-1/2adventwinner.jpg"
            : day.day === 15
            ? "/images/home-1/3adventwinner.jpg"
            : "/images/home-1/4adventwinner.jpg", // Day 24 wie Day 15
        title:
          day.day === 1
            ? "1. Advent Gewinner"
            : day.day === 8
            ? "2. Advent Gewinner"
            : day.day === 15
            ? "3. Advent Gewinner"
            : "3. Advent Gewinner", // Day 24 wie Day 15
        text:
          day.day === 1
            ? "Herzlichen Glückwunsch an unseren iPhone 16 Gewinner!"
            : day.day === 8
            ? "Herzlichen Glückwunsch an unsere Dyson Staubsauger Gewinnerin!"
            : day.day === 15
            ? "Herzlichen Glückwunsch an unsere AirPods Max Gewinnerin!"
            : "Herzlichen Glückwunsch an unsere ALL In TicketGewinner!",
      });
    } else if (day.day === today) {
      const rect = event.target.getBoundingClientRect();
      setDoorPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
      setIsDoorAnimating(true);
    }
  };

  // Animation beendet
  const handleDoorAnimationEnd = () => {
    setIsDoorAnimating(false); // Animation stoppen
    const dayData = days.find((day) => day.day === today);
    setSelectedDay(dayData); // Modal-Inhalt setzen
  };

  // Modal schließen
  const closeModal = () => {
    setSelectedDay(null);
  };

  return (
    <div className="adventskalender">
      <img
        className="adlogo"
        src="/images/home-1/advent-header1.PNG" // Ersetze durch den Pfad deines Logos
        alt="Adventskalender Logo"
      />
      {/* Raster der Tage */}
      <div className="grid1">
        {days.map((day) => (
          <div
            key={day.day}
            className={`calendar-day ${day.day === today ? "today" : ""} ${
              day.day === 1 || day.day === 8 || day.day === 15 || day.day === 22
                ? "past-day"
                : ""
            }`}
            onClick={(event) => openDay(day, event)}
          >
            {day.day === 1 ||
            day.day === 8 ||
            day.day === 15 ||
            day.day === 22 ? (
              <img
                src={
                  day.day === 1
                    ? "/images/home-1/adventwinner.jpg"
                    : day.day === 8
                    ? "/images/home-1/2adventwinner.jpg"
                    : day.day === 15
                    ? "/images/home-1/3adventwinner.jpg" // Bild für Tag 15
                    : day.day === 22
                    ? "/images/home-1/4adventwinner.jpg" // Bild für Tag 22
                    : ""
                }
                alt={`Bild für Tag ${day.day}`}
                className="calendar-day-image"
              />
            ) : (
              day.day // Nummer anzeigen, wenn kein spezielles Bild vorhanden
            )}
          </div>
        ))}
      </div>

      {/* Türanimation */}
      {isDoorAnimating && doorPosition && (
        <DoorAnimation
          onAnimationEnd={handleDoorAnimationEnd}
          position={doorPosition}
        />
      )}

      {/* Modal */}
      {selectedDay && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <img
              src={selectedDay.img}
              alt={`Bild für Tag ${selectedDay.day}`}
              className="modal-image"
              onError={(e) => {
                e.target.src = "/images/home-1/fallback.jpg"; // Fallback-Bild
              }}
            />
            <h1>{selectedDay.title}</h1>
            <div>{selectedDay.text}</div>
            <div>{selectedDay.text2}</div> {/* Füge diese Zeile hinzu */}
            {/* Download-Button */}
            {selectedDay.buttonText && selectedDay.buttonLink && (
              <a
                href={selectedDay.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary2"
              >
                {selectedDay.buttonText}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventCalendar;
