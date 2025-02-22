/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Spielerschutz = () => {
    const spielerschutzData = {
        paragraph1: "Ein Besuch im Casino soll vergnügliches Spielen in angenehmer Atmosphäre bringen und ein spannendes Freizeiterlebnis sein. Die meisten Menschen spielen mit Verantwortung und entsprechend ihren Möglichkeiten. Das Grand Casino Liechtenstein ist sich der Tatsache bewusst, dass die Teilnahme am Glücksspiel aber für manche Menschen mit nachteiligen Entwicklungen verbunden sein kann. Daher informieren wir unsere Gäste darüber, was wir tun und was sie selbst tun können, damit Glücksspiel ein Vergnügen bleibt.",
        email: "sk@gcli.li",
        Antragsformular: [
            {
                language: "Englisch",
                link: "https://gcli.li/04_FO_05-Antrag-zur-freiwilligen-Spielsperre-_online_ENG.pdf"
            },
            {
                language: "Deutsch",
                link: "https://gcli.li/04_FO_04_V1.3_Antrag zur freiwilligen Spielsperre Online_DE.pdf"
            },
            {
                language: "Italienisch",
                link: "https://gcli.li/04_FO_05-Antrag-zur-freiwilligen-Spielsperre-_online_IT.pdf"
            }
        ],
        title: "FÜR ANGEHÖRIGE UND NAHSTEHENDE PERSONEN DES BETROFFENEN SPIELERS",
        quiz: "Wie kann ich als Familienmitglied oder nahstehende Person eines Spielers ein potenzielles Spielproblem dem Casino vermitteln?",
        ans: "Wenn Sie als Angehöriger oder Nahstehender einer Person, die Anzeichen für problematisches Spielverhalten aufweist, können Sie aktiv werden. Nehmen Sie direkt Kontakt mit uns auf. Sie können Ihre Besorgnis über das Verhalten der betreffenden Person äussern, sei es telefonisch, per E-Mail oder persönlich. Durch diese direkte Kontaktaufnahme mit dem Casino haben Sie einen wichtigen Schritt unternommen. Die Verantwortlichen des Sozialkonzeptes des Casinos werden die Angelegenheit umgehend angehen."
    }
    return (
        <div className='py-24 bg-lightBlack'>
            <div className="container mx-auto px-5">
                <h1 className='text-4xl  text-[#DEBF64] pt-24 pb-8'>SPIELERSCHUTZ</h1>

                <p className='text-white text-xl tracking-wide leading-[1.5] pb-1'>{spielerschutzData.paragraph1}</p>

                <Link className='text-xl text-[#DEBF64] tracking-wider leading-[1.5]' to={`mailto:${spielerschutzData.email}`}><span className='text-white font-semibold'>Email :</span> {spielerschutzData.email}</Link>

                <p className="py-3 text-xl text-white">Antragsformular: {
                    spielerschutzData.Antragsformular.map((data, i) => (
                        <Link className='text-[#DEBF64]' to={data.link} target='_blank' key={i}>{data.language} / </Link>
                    ))
                }</p>

                <h3 className='pt-9 pb-4 text-3xl  text-[#DEBF64]'>{spielerschutzData.title}</h3>

                <h5 className='text-xl  tracking-wide text-white'>{spielerschutzData.quiz}</h5>

                <p className='text-xl text-white pt-4 tracking-wide'>{spielerschutzData.ans}</p>
            </div>
        </div>
    );
};

export default Spielerschutz;