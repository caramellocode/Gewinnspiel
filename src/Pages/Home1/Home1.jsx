import React, { Suspense, lazy } from 'react';

// Lazy load components
const Action = lazy(() => import("../../Components/CallDoAction/Action"));
const Facilities = lazy(() => import("../../Components/Facilities/Facilities"));
const HeroSection = lazy(() => import("../../Components/HeroSection/HeroSection"));
const HotelAndFacilities = lazy(() => import("../../Components/HotelAndFacilities/HotelAndFacilities"));
const HotelAndResort = lazy(() => import("../../Components/HotelAndResort/HotelAndResort"));
const IframeComponent = lazy(() => import('../../Components/IframeComponent'));
const LatestBlog = lazy(() => import("../../Components/LatestBlog/LatestBlog"));
const AnimatedImage = lazy(() => import('../InnerPage/AnimatedImage'));
const Offers = lazy(() => import("../../Components/Offers/Offers"));
const Testimonial = lazy(() => import("../../Components/Testimonial/Testimonial"));
const PokerCoinAnimation = lazy(() => import('../InnerPage/PokerCoinAnimation'));
const GenussFacilities = lazy(() => import('../../Components/Facilities/GenussFacilities'));
const SponsoringComponent1 = lazy(() => import('../Home5/sponsoringcomponent1'));
const Countdown = lazy(() => import('../InnerPage/Gallery/Countdown'));
const SponsoringComponent4 = lazy(() => import('../Home5/sponsoringComponent4'));
const FloatingButton = lazy(() => import('../InnerPage/FloatingButton'));
const CookieConsent = lazy(() => import('./CookieConsent'));
const Jackpott = lazy(() => import('../InnerPage/Jackpott'));
const SponsoringComponent20 = lazy(() => import('../Home5/sponsoringComponent20'));
const AdventCalendar = lazy(() => import('../InnerPage/AdventCalendar'));

import "../../Pages/InnerPage/AdventCalender.css";
import '../InnerPage/PokerCoinAnimation.css';

const Home1 = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CookieConsent />
        <HeroSection />
        <FloatingButton />
        <HotelAndResort />
        <HotelAndFacilities />
        <Jackpott />
        <Action />
        <Facilities />
        <GenussFacilities />
        <SponsoringComponent1 />
        {/* Add more components as needed */}
      </Suspense>
    </>
  );
};

export default Home1;
