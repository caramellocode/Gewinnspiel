/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Gallery = () => {

    const locationPath = useLocation();

    const galleryRouteData = [
        {
            id: 1,
            title: "Pokerroom",
            route: "/gallery-pokerrom",
            routeMobile: "/mobile/gallery-pokerrom",
            img: "/images/inner/gallery-pokerroom.jpg"
        },
        {
            id: 2,
            title: "Floor Four",
            route: "/gallery-floor-four",
            routeMobile: "/mobile/gallery-floor-four",
            img: "/images/inner/gallery-floor.jpg"
        },
        {
            id: 3,
            title: "Casino",
            route: "/gallery-casino",
            routeMobile: "/mobile/gallery-casino",
            img: "/images/inner/gallery-casino.jpg"
        }
    ]
    return (
        <div className='py-32 bg-[url("/images/inner/background.jpg")]'>
            <div className="container mx-auto px-3">
                <h1 className='text-center text-[#DEBF64] text-5xl pt-5 font-bold'>IMPRESSIONEN GALLERY</h1>
                <p className='text-2xl text-white text-center py-4'>GRAND CASINO LIECHTENSTEIN</p>
                <p className='text-xl text-white text-center pb-4'>Hier finden Sie alle Bilder von unseren Events</p>

                <div className="pt-5">
                    <div className="flex flex-col md:flex-row gap-5">
                        {
                            galleryRouteData.map((data, i) => (
                                <Link to={
                                    /^\/mobile\//.test(locationPath.pathname) == true ? data.routeMobile : locationPath.pathname == "/mobile" ? data.routeMobile : data.route
                                } className="w-full md:w-1/3 flex flex-col" key={i}>
                                    <div className='m-2 bg-white p-4 rounded-lg'>
                                        <img src={data.img} className='w-full rounded-md' alt="casino" />
                                        <div className="content pt-3">
                                            <h4 className='text-center text-3xl pb-2 font-bold'>{data.title}</h4>
                                            <p className='text-sm text-[#DEBF64] text-center'>Galerie öffnen »</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;