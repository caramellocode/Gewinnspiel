import React, { Suspense, lazy } from 'react';

// Lazy load components
const HeroSection = lazy(() => import("../../Components/HeroSection/HeroSection"));
const FloatingButton = lazy(() => import("../InnerPage/FloatingButton"));
const Facilities = lazy(() => import("../../Components2/Facilities/Facilities"));
const Agency = lazy(() => import("../../Components2/Agency/Agency"));
const Blogs = lazy(() => import("../../Components2/Blogs/Blogs"));
const Places = lazy(() => import("../../Components2/Places/Places"));
const Rooms = lazy(() => import("../../Components2/Rooms/Rooms"));
const Testimonials = lazy(() => import("../../Components2/Testimonials/Testimonials"));

const Home2 = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <FloatingButton />
        <Facilities />
      </Suspense>
    </>
  );
};

export default Home2;

