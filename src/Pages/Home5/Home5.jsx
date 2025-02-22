import React, { Suspense, lazy } from 'react';

// Lazy load components
const HeroSection = lazy(() => import("../../Components5/HeroSection/HeroSection"));
const FloatingButton = lazy(() => import("../InnerPage/FloatingButton"));
const SponsoringComponent1 = lazy(() => import("./sponsoringcomponent1"));
const SponsoringComponent2 = lazy(() => import("./sponsoringComponent2"));
const SponsoringComponent3 = lazy(() => import("./sponsoringComponent3"));
const SponsoringComponent4 = lazy(() => import("./sponsoringComponent4"));
const SponsoringComponent5 = lazy(() => import("./sponsoringComponent5"));
const SponsoringComponent6 = lazy(() => import("./sponsoringComponent6"));
const SponsoringComponent7 = lazy(() => import("./sponsoringComponent7"));
const SponsoringComponent8 = lazy(() => import("./sponsoringComponent8"));
const SponsoringComponent9 = lazy(() => import("./sponsoringComponent9"));
const SponsoringComponent10 = lazy(() => import("./sponsoringComponent10"));
const SponsoringComponent11 = lazy(() => import("./sponsoringComponent11"));
const SponsoringComponent12 = lazy(() => import("./sponsoringComponent12"));
const SponsoringComponent13 = lazy(() => import("./sponsoringComponent13"));
const SponsoringComponent14 = lazy(() => import("./SponsoringComponent14"));
const SponsoringComponent15 = lazy(() => import("./sponsoringComponent15"));
const SponsoringComponent16 = lazy(() => import("./sponsoringComponent16"));
const SponsoringComponent17 = lazy(() => import("./sponsoringComponent17"));

const Home5 = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <FloatingButton />

        <SponsoringComponent1 />
        <SponsoringComponent2 />
        <SponsoringComponent3 />
        <SponsoringComponent4 />
        <SponsoringComponent5 />
        <SponsoringComponent6 />
        <SponsoringComponent7 />
        <SponsoringComponent8 />
        <SponsoringComponent9 />
        <SponsoringComponent10 />
        <SponsoringComponent11 />
        <SponsoringComponent12 />
        <SponsoringComponent13 />
        <SponsoringComponent14 />
        <SponsoringComponent15 />
        <SponsoringComponent16 />
        <SponsoringComponent17 />
      </Suspense>
    </>
  );
};

export default Home5;
