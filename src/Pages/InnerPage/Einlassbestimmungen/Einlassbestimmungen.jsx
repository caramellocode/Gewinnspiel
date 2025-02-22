/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Einlassbestimmungen = () => {
    const einlassbestimmungenData = {
        paragraph1: "Wir ersuchen Sie das Grand Casino Liechtenstein in entsprechender Kleidung zu besuchen. «Come as you feel good» in Büro- und Businesskleidung! Für Damen und Herren – sportlich & elegant passt immer! So sind Sie richtig angezogen mit STIL. Wir ersuchen unsere männlichen Gäste um lange Hosen. Ebenso bitten wir um Verständnis, dass wir Personen in Trainings- oder Arbeitskleidung keinen Eintritt in unser Casino gewähren.",
        link: {
            title: "Hausordnung",
            pageLink: "https://gcli.li/hausordnung/"
        },
        title: "VORAUSSETZUNGEN",
        subtitle: "Ihnen wird der Eintritt ins Grand Casino Liechtenstein ab dem vollendeten 18. Lebensjahr gestattet. Ein Pass und/oder Personalausweis ist ausnahmslos erforderlich.",
        articles: [
            {
                title: "Für folgende Länder ist der Eintritt mit gültigem Personalausweis und/oder Reisepass erforderlich:",
                para: "Fürstentum Liechtenstein, Schweiz, Österreich, Deutschland, Italien, Belgien, Bulgarien, Dänemark, Estland, Finnland, Frankreich, Griechenland, Irland, Island, Kroatien, Lettland, Litauen, Luxemburg, Malta, Niederlande, Norwegen, Polen, Portugal, Rumänien, Schweden, Slowakei, Slowenien, Spanien, Tschechien, Ungarn, Vereintes Königreich, Zypern"
            },
            {
                title: "Für folgende Länder ist der Eintritt nur mit gültigem Reisepass erforderlich:",
                para: "Bosnien, Montenegro, Serbien, Kosovo, Mazedonien, Albanien, Türkei und alle übrigen Länder"
            }
        ]
    }
    return (
        <div className='py-24 bg-lightBlack'>
            <div className="container mx-auto px-5">
                <h1 className='text-4xl font-semibold text-[#DEBF64] pt-24 pb-8'>DRESSCODE FÜR DAMEN UND HERREN</h1>

                <p className='text-white text-xl tracking-wide leading-[1.5] pb-1'>{einlassbestimmungenData.paragraph1}</p>

                <Link className='text-xl text-[#DEBF64] tracking-wider leading-[1.5] underline underline-offset-8 pt-4 block' to={`${einlassbestimmungenData.link.pageLink}`}> {einlassbestimmungenData.link.title}</Link>

                <h3 className='pt-9 pb-4 text-3xl font-semibold text-[#DEBF64]'>{einlassbestimmungenData.title}</h3>

                <h5 className='text-xl font-bold tracking-wide text-white'>{einlassbestimmungenData.subtitle}</h5>

                {
                    einlassbestimmungenData.articles.map((data, i) => (
                        <div key={i} className='text-xl text-white pt-9 tracking-wide'>
                            <h5 className=' underline-offset-8 pb-3 font-semibold'>{data.title}</h5>
                            <p className='pb-5'>{data.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Einlassbestimmungen;