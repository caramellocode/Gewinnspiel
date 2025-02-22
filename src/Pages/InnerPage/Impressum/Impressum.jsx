/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Impressum = () => {
    const impressumData = {
        shortContact: [
            "Grand Casino LI AG",
            "Selemad 10",
            "9487 Gamprin - Bendern",
            "Liechtenstein",
            "Tel.: +423 222 7777"
        ],
        email: "grandcasino@gcli.li",
        reg: {
            title: "FL-Handelsregister-Nr.",
            address: "FL- 0002.611.243.3"
        },
        auf: {
            title: "Aufsichtsbehörde",
            address: "Amt für Volkswirtschaft"
        },
        st: {
            title: "MwSt.-Nr.",
            address: 61068
        },
        articles: [
            {
                title: "Rechtliche Hinweise",
                para: "Alle Informationen und Erklärungen dieser Internetseiten sind unverbindlich. Die Grand Casino LI AG übernimmt für die Richtigkeit und Vollständigkeit der Inhalte keine Gewähr. Es wird keine Garantie übernommen und keine Zusicherung von Produkteigenschaften gemacht. Aus den Inhalten der Internetseiten ergeben sich keine Rechtsansprüche. Fehler im Inhalt werden bei Kenntnis darüber unverzüglich korrigiert. Die Inhalte der Internetseiten können durch zeitverzögerte Aktualisierung nicht permanent aktuell sein. Bitte fragen Sie uns daher zu dem Stand, technischen Details und Lieferbarkeit der Produkte und Dienstleistungen. Links auf andere Internetseiten werden nicht permanent kontrolliert. Somit übernehmen wir keine Verantwortung für den Inhalt verlinkter Seiten."
            },
            {
                title: "Herunterladen von Daten und Software",
                para: "Die Grand Casino LI AG übernimmt keine Gewähr für die Fehlerfreiheit von Daten und Software, die von den Internetseiten heruntergeladen werden können. Die Software wird von der Grand Casino LI AG auf Virenbefall überprüft. Wir empfehlen dennoch, Daten und Software nach dem Herunterladen auf Virenbefall mit jeweils neuster Virensuchsoftware zu prüfen."
            },
            {
                title: "Urheberrechte und sonstige Sonderschutzrechte",
                para: "Der Inhalt dieser Internetseiten ist urheberrechtlich geschützt. Es darf eine Kopie der Informationen der Internetseiten auf einem einzigen Computer für den nicht-kommerziellen und persönlichen internen Gebrauch gespeichert werden. Grafiken, Texte, Logos, Bilder usw. dürfen nur nach schriftlicher Genehmigung durch die Grand Casino LI AG heruntergeladen, vervielfältigt, kopiert, geändert, veröffentlicht, versendet, übertragen oder in sonstiger Form genutzt werden. Bei genannten Produkt- und Firmennamen kann es sich um eingetragene Warenzeichen oder Marken handeln. Die unberechtigte Verwendung kann zu Schadensersatzansprüchen und Unterlassungsansprüchen führen."
            },
            {
                title: "Haftung",
                para: "Die Grand Casino LI AG haftet nicht für Schäden insbesondere nicht für unmittelbare oder mittelbare Folgeschäden, Datenverlust, entgangenen Gewinn, System- oder Produktionsausfälle, die durch die Nutzung dieser Internetseiten oder das Herunterladen von Daten entstehen. Liegt bei einem entstandenen Schaden durch die Nutzung der Internetseiten oder das Herunterladen von Daten Vorsatz oder grobe Fahrlässigkeit vor, gilt der Haftungsausschluß nicht. Die durch die Nutzung der Internetseiten entstandene Rechtsbeziehung zwischen Ihnen und der Grand Casino LI AG unterliegt dem Recht des Fürstentum Liechtensteins. Bei Rechtsstreitigkeiten mit Vollkaufleuten, die aus der Nutzung dieser Internetseiten resultieren, ist der Gerichtsstand das Amtsgericht Vaduz."
            },
            {
                title: "Links zu anderen Websites",
                para: "Die Webseiten der Grand Casino LI AG enthalten gegebenenfalls Links zu anderen Websites. Die Grand Casino LI AG hat keinen Einfluss auf den redaktionellen Inhalt fremder Webseiten und darauf, dass deren Betreiber die Datenschutzbestimmungen einhalten. Werbung  Die Webseiten der Grand Casino LI AG enthalten im Regelfall keine Werbeflächen. Im gegenteiligen Fall erfolgt die Auslieferung der Werbung über externe AdServer. Die im Zusammenhang mit Onlinewerbung erfassten Daten (AdImpressions, AdKlicks) dienen ausschließlich der statistischen Auswertung und zur Erstellung von Reportings an Werbekunden. Dabei werden keine personenbezogenen Daten verwendet. Bei der Auslieferung von Werbung können möglicherweise Cookies zum Einsatz kommen, ohne dass die Grand Casino LI AG hierauf Einfluss hat."
            }
        ]
    }
    return (
        <div className='py-24 bg-lightBlack'>
            <div className="container mx-auto px-5">
                <h1 className='text-4xl  text-[#DEBF64] pt-24 pb-8'>IMPRESSUM</h1>

                {
                    impressumData?.shortContact.map((data, i) => (
                        <p className='text-white text-xl' key={i}>{data}</p>
                    ))
                }
                <Link to={`mailto:${impressumData.email}`} className='text-xl text-[#DEBF64] block py-4'><span className='pe-2 text-white'>Email:</span>{impressumData.email}</Link>

                <h5 className='text-white text-xl  pb-2 pt-5'>{impressumData.reg.title}</h5>
                <p className='text-white text-xl pb-2'>{impressumData.reg.address}</p>
                <h5 className='text-white text-xl  pb-2 pt-5'>{impressumData.auf.title}</h5>
                <p className='text-white text-xl pb-2'>{impressumData.auf.address}</p>
                <h5 className='text-white text-xl  pb-2 pt-5'>{impressumData.st.title}</h5>
                <p className='text-white text-xl pb-2'>{impressumData.st.address}</p>
                
                {
                    impressumData.articles.map((data, i) => (
                        <div key={i} className='py-4 text-xl text-white'>
                            <h5 className='pb-2 '>{data.title}</h5>
                            <p>{data.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Impressum;