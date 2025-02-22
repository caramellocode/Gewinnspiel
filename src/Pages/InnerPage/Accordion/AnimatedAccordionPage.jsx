import Accordion from "./Accordion";

export default function AnimatedAccordionPage() {
  //  All Faqs and  answers.
  const faqs = [
    {
      title: "Wie kann ich mich Bewerben?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Was sind die Vorraussetzungen?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Sind die jobs befristet?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Kann ich auch Initiativ Bewerbung zustellen?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Welche Zusatzleistungen gibt es?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "wann wird das Gehalt bezahlt",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Gibt es ein Karriereplanung?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },

    {
      title: "Kann ich mich weiterbilden?",
      text: "Credibly morph resource maximizing applications rather than fully test metrics via intermandated expertise. Globally administrate reliable platfor Globally brand seamless systems",
      active: false,
    },
  ];

  return (
    <main className="relative flex flex-col justify-center  overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 ">
        <div
          className=" grid items-end grid-cols-1 lg:grid-cols-2  gap-x-[30px]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </Accordion>
          ))}
        </div>
      </div>
    </main>
  );
}
