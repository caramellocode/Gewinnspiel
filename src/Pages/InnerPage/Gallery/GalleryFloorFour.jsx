/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GalleryFloorFour = () => {
    const locationPath = useLocation()
    const galleryPokerRoomData = [
        {
            id: 1,
            title: "Terrassen Opening 2024",
            date: "Mai 13, 2024",
            img: "/images/inner/floor/1.jpg"
        },
        {
            id: 2,
            title: "ISG Trophy 2023",
            date: "Mai 13, 2024",
            img: "/images/inner/floor/2.jpg"
        },
        {
            id: 3,
            title: "Beats & Cocktails 2023",
            date: "Mai 13, 2024",
            img: "/images/inner/floor/3.jpg"
        },
        {
            id: 4,
            title: "Adventszauber",
            date: "November 23, 2022",
            img: "/images/inner/floor/4.jpg"
        },
        {
            id: 5,
            title: "AfterWork",
            date: "Oktober 27, 2022",
            img: "/images/inner/floor/5.jpg"
        },
        {
            id: 6,
            title: "AfterWork Opening",
            date: "September 28, 2022",
            img: "/images/inner/floor/6.jpg"
        }
    ]
    return (
        <div className='py-32 bg-[url(/images/inner/background.jpg)]'>
            <div className="container mx-auto px-3">
                <h1 className='text-center text-[#DEBF64] text-5xl pt-5 font-bold'>Floor Four</h1>
                <p className='text-2xl text-white text-center py-4'>ONLINE-GALERIE</p>

                <div className="pt-5">
                    <div className="flex flex-col md:flex-row flex-wrap">
                        {
                            galleryPokerRoomData.map((data, i) => (
                                <div className="w-full md:w-1/3 flex flex-col" key={i}>
                                    <div className='m-2 bg-white p-4 rounded-lg'>
                                        <img src={data.img} className='w-full rounded-md hover:grayscale-0 grayscale' alt="casino" />
                                        <div className="content pt-3">
                                            <h4 className='text-center text-3xl pb-2 font-bold'>{data.title}</h4>
                                            <p className='text-sm text-[#DEBF64] text-center'>{data.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex md:flex-row flex-col gap-4 justify-center items-center pt-6">
                        <Link to={/^\/mobile\//.test(locationPath.pathname) == true ? '/mobile/gallery-pokerrom' : locationPath.pathname == "/mobile" ? '/mobile/gallery-pokerrom' : '/gallery-pokerrom'} className='uppercase w-[200px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 text-base font-Garamond font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack text-white flex justify-center items-center'>Poker Room</Link>
                        <Link to={/^\/mobile\//.test(locationPath.pathname) == true ? '/mobile/gallery-casino' : locationPath.pathname == "/mobile" ? '/mobile/gallery-casino' : '/gallery-casino'} className='uppercase w-[200px] h-[48px] lg:h-[56px] bg-khaki relative before:w-8 before:h-[1px] before:bg-khaki before:absolute before:left-0 before:top-16 text-base font-Garamond font-medium mt-[-6px] hover-animBg after:bg-normalBlack after:rounded-none hover:before:bg-normalBlack text-white flex justify-center items-center'>Casino</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryFloorFour;