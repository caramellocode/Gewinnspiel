import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Main2 from "../Main/Main2";
import Main3 from "../Main/Main3";
import Main4 from "../Main/Main4";
import Main5 from "../Main/Main5";
import Home1 from "../Pages/Home1/Home1";
import Home2 from "../Pages/Home2/Home2";
import Home3 from "../Pages/Home3/Home3";
import Home4 from "../Pages/Home4/Home4";
import Home5 from "../Pages/Home5/Home5";
import About from "../Pages/InnerPage/About";
import Room from "../Pages/InnerPage/Room";
import Jackpott from "../Pages/InnerPage/Jackpott";
import RoomDetails from "../Pages/InnerPage/RoomDetails";
import Services from "../Pages/InnerPage/Services";
import ServiceDetails from "../Pages/InnerPage/ServiceDetails";
import ServiceDetails3 from "../Pages/InnerPage/ServiceDetails3";
import ServiceDetails2 from "../Pages/InnerPage/ServiceDetails2";
import AdventCalendar from "../Pages/InnerPage/AdventCalendar";
import Team from "../Pages/InnerPage/Team";
import Pricing from "../Pages/InnerPage/Pricing";
import Blog from "../Pages/InnerPage/Blog";
import BlogDetails from "../Pages/InnerPage/BlogDetails";
import Contact from "../Pages/InnerPage/Contact";
import Jobs from "../Pages/InnerPage/jobs";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Spiele from "../Pages/InnerPage/Spiele";
import Newsletter from "../Components3/Newsletter/Newsletter";
import Gallery from "../Pages/InnerPage/Gallery";
import GalleryPokerRoom from "../Pages/InnerPage/Gallery/GalleryPokerRoom";
import GalleryFloorFour from "../Pages/InnerPage/Gallery/GalleryFloorFour";
import GalleryCasino from "../Pages/InnerPage/Gallery/GalleryCasino";
import Spielerschutz from "../Pages/InnerPage/Spielerschutz/Spielerschutz";
import Einlassbestimmungen from "../Pages/InnerPage/Einlassbestimmungen/Einlassbestimmungen";
import Impressum from "../Pages/InnerPage/Impressum/Impressum";
import Datenschutz from "../Pages/InnerPage/Datenschutz/Datenschutz";
import JobsMobile from "../Pages/InnerPage/jobsMobile";
import Spielautomaten from "../Pages/InnerPage/Spielautomaten";
import AmericanRoulette from "../Pages/InnerPage/AmericanRoulette";
import Poker from "../Pages/InnerPage/Poker";
import Blackjack from "../Pages/InnerPage/Blackjack";
import TexasHoldem from "../Pages/InnerPage/TexasHoldem";
import WptPrime from "../Pages/InnerPage/Gallery/WptPrime";
import Lokales from "../Pages/InnerPage/Gallery/Lokales";
import LokaleHotels from "../Pages/InnerPage/Gallery/LokaleHotels";
import GenussFacilities from "../Components/Facilities/GenussFacilities";
import Sponsoring from "../Pages/InnerPage/Gallery/Sponsoring";
import WelcomeSectionSponsoring from "../Components4/WelcomeSection/WelcomesectionSponsoring";
import SponsoringComponent1 from "../Pages/Home5/sponsoringcomponent1";
import SponsoringComponent2 from "../Pages/Home5/sponsoringComponent2";
import SponsoringComponent3 from "../Pages/Home5/sponsoringComponent3";
import SponsoringComponent4 from "../Pages/Home5/sponsoringComponent4";
import SponsoringComponent5 from "../Pages/Home5/sponsoringComponent5";
import SponsoringComponent6 from "../Pages/Home5/sponsoringComponent6";
import SponsoringComponent7 from "../Pages/Home5/sponsoringComponent7";
import SponsoringComponent8 from "../Pages/Home5/sponsoringComponent8";
import SponsoringComponent9 from "../Pages/Home5/sponsoringComponent9";
import SponsoringComponent10 from "../Pages/Home5/sponsoringComponent10";
import SponsoringComponent11 from "../Pages/Home5/sponsoringComponent11";
import SponsoringComponent12 from "../Pages/Home5/sponsoringComponent12";
import SponsoringComponent13 from "../Pages/Home5/sponsoringComponent13";
import SponsoringComponent14 from "../Pages/Home5/SponsoringComponent14";
import SponsoringComponent15 from "../Pages/Home5/sponsoringComponent15";
import SponsoringComponent16 from "../Pages/Home5/sponsoringComponent16";
import SponsoringComponent17 from "../Pages/Home5/sponsoringComponent17";
import SponsoringComponent20 from "../Pages/Home5/sponsoringComponent20";
import SponsoringComponent21 from "../Pages/Home5/sponsoringComponent21";
import CookieConsent from "../Pages/Home1/CookieConsent";
import CookieConsent2 from "../Pages/Home1/CookieConsent2";
import Countdown from "../Pages/InnerPage/Gallery/Countdown";
import Countdown2 from "../Pages/InnerPage/Gallery/Countdown2";
import FloatingButton from "../Pages/InnerPage/FloatingButton";
import JackpottIframe from "../Components/JackpottIframe";
import Deepstack from "../Pages/InnerPage/Gallery/deepstack";
import EventCalendar from "../Pages/InnerPage/EventCalendar";
import Gewinnspiel from "../Pages/InnerPage/Gewinnspiel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home1 /> },
      { path: "about", element: <About /> },
      { path: "spiele", element: <Spiele /> },
      { path: "genuss-facilities", element: <GenussFacilities /> },
      { path: "sponsoring", element: <Sponsoring /> },
      { path: "countdown", element: <Countdown /> },
      { path: "countdown2", element: <Countdown2 />},
      { path: "cookie-consent", element: <CookieConsent /> },
      { path: "cookie-consent2", element: <CookieConsent2 /> },
      { path: "gewinnspiel", element: <Gewinnspiel /> },


      { path: "adventskalender", element: <AdventCalendar /> },
      { path: "sponsoring-component1", element: <SponsoringComponent1 /> },
      { path: "sponsoring-component2", element: <SponsoringComponent2 /> },
      { path: "sponsoring-component3", element: <SponsoringComponent3 /> },
      { path: "sponsoring-component4", element: <SponsoringComponent4 /> },
      { path: "sponsoring-component5", element: <SponsoringComponent5 /> },
      { path: "sponsoring-component6", element: <SponsoringComponent6 /> },
      { path: "sponsoring-component7", element: <SponsoringComponent7 /> },
      { path: "sponsoring-component8", element: <SponsoringComponent8 /> },
      { path: "sponsoring-component9", element: <SponsoringComponent9 /> },
      { path: "sponsoring-component10", element: <SponsoringComponent10 /> },
      { path: "sponsoring-component11", element: <SponsoringComponent11 /> },
      { path: "sponsoring-component12", element: <SponsoringComponent12 /> },
      { path: "sponsoring-component13", element: <SponsoringComponent13 /> },
      { path: "sponsoring-component14", element: <SponsoringComponent14 /> },
      { path: "sponsoring-component15", element: <SponsoringComponent15 /> },
      { path: "sponsoring-component16", element: <SponsoringComponent16 /> },
      { path: "sponsoring-component17", element: <SponsoringComponent17 /> },
      { path: "sponsoring-component20", element: <SponsoringComponent20 /> },
      { path: "sponsoring-component21", element: <SponsoringComponent21 /> },


      {
        path: "welcomesection-sponsoring",
        element: <WelcomeSectionSponsoring />,
      },
      { path: "floating-button", element: <FloatingButton /> },
      { path: "epm", element: <WptPrime /> },
      { path: "lokales", element: <Lokales /> },
      { path: "deepstack", element: <Deepstack />},
      { path: "lokale-hotels", element: <LokaleHotels /> },
      { path: "spielautomaten", element: <Spielautomaten /> },
      { path: "american-roulette", element: <AmericanRoulette /> },
      { path: "poker", element: <Poker /> },
      { path: "texas-holdem", element: <TexasHoldem /> },
      { path: "blackjack", element: <Blackjack /> },
      { path: "newsletter", element: <Newsletter /> },
      { path: "impressionen", element: <GalleryPokerRoom /> },
      { path: "jobsMobile", element: <JobsMobile /> },
      { path: "gallery-floor-four", element: <GalleryFloorFour /> },
      { path: "gallery-casino", element: <GalleryCasino /> },
      { path: "spielerschutz", element: <Spielerschutz /> },
      { path: "einlassbestimmungen", element: <Einlassbestimmungen /> },
      { path: "impressum", element: <Impressum /> },
      { path: "datenschutz", element: <Datenschutz /> },
      { path: "jobs", element: <Jobs /> },
      { path: "room", element: <Room /> },
      { path: "jackpott", element: <Jackpott /> },
      { path: "room_details", element: <RoomDetails /> },
      { path: "services", element: <Services /> },
      { path: "event-ladys", element: <ServiceDetails /> },
      { path: "automaten", element: <ServiceDetails3 /> },
      { path: "genuss-spiel", element: <ServiceDetails2 /> },
      { path: "our_team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "blog_details", element: <BlogDetails /> },
      { path: "kontakt", element: <Contact /> },
      { path: "jackpott-iframe", element: <JackpottIframe />},
      { path: "event-calendar", element: <EventCalendar /> }


    ],
  },
  // second homepage
  {
    path: "/events",
    element: <Main2 />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home2 /> },
      { path: "about", element: <About /> },
      { path: "room", element: <Room /> },
      { path: "jackpott", element: <Jackpott /> },
      { path: "room_details", element: <RoomDetails /> },
      { path: "services", element: <Services /> },
      { path: "service_details", element: <ServiceDetails /> },
      { path: "our_team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "blog_details", element: <BlogDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // Third home router
  {
    path: "/pokerroom",
    element: <Main3 />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home3 /> },
      { path: "about", element: <About /> },
      { path: "room", element: <Room /> },
      { path: "jackpott", element: <Jackpott /> },
      { path: "room_details", element: <RoomDetails /> },
      { path: "services", element: <Services /> },
      { path: "service_details", element: <ServiceDetails /> },
      { path: "our_team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "blog_details", element: <BlogDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // mobile
  {
    path: "/mobile/pokerroom",
    element: <Main3 />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home3 /> },
      { path: "about", element: <About /> },
      { path: "room", element: <Room /> },
      { path: "jackpott", element: <Jackpott /> },
      { path: "room_details", element: <RoomDetails /> },
      { path: "services", element: <Services /> },
      { path: "service_details", element: <ServiceDetails /> },
      { path: "our_team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "blog_details", element: <BlogDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // forth home router
  {
    path: "/floorfour",
    element: <Main4 />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home4 /> },
      { path: "about", element: <About /> },
      { path: "room", element: <Room /> },
      { path: "jackpott", element: <Jackpott /> },
      { path: "room_details", element: <RoomDetails /> },
      { path: "services", element: <Services /> },
      { path: "service_details", element: <ServiceDetails /> },
      { path: "our_team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "blog_details", element: <BlogDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // five home router
  {
    path: "/",
    element: <Main5 />,
    errorElement: <ErrorPage />,
    children: [
      { path: "grand-sponsoring", element: <Home5 /> },
      { path: "about", element: <About /> },
      { path: "room", element: <Room /> },
      { path: "jackpott", element: <Jackpott /> },
      { path: "room_details", element: <RoomDetails /> },
      { path: "services", element: <Services /> },
      { path: "service_details", element: <ServiceDetails /> },
      { path: "our_team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "blog_details", element: <BlogDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  // for mobile device app
  {
    path: "/mobile",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home1 /> },
      { path: "home", element: <Home1 /> },
      { path: "about", element: <About /> },
      { path: "spiele", element: <Spiele /> },
      { path: "newsletter", element: <Newsletter /> },
      { path: "gallery", element: <Gallery /> },
      { path: "jobsMobile", element: <JobsMobile /> },
      { path: "impressionen", element: <GalleryPokerRoom /> },
      { path: "gallery-floor-four", element: <GalleryFloorFour /> },
      { path: "gallery-casino", element: <GalleryCasino /> },
      { path: "spielerschutz", element: <Spielerschutz /> },
      { path: "einlassbestimmungen", element: <Einlassbestimmungen /> },
      { path: "impressum", element: <Impressum /> },
      { path: "datenschutz", element: <Datenschutz /> },
      { path: "jobs", element: <Jobs /> },
      { path: "room", element: <Room /> },
      { path: "jackpott", element: <Jackpott /> },
      { path: "room_details", element: <RoomDetails /> },
      { path: "services", element: <Services /> },
      { path: "event-ladys", element: <ServiceDetails /> },
      { path: "automaten", element: <ServiceDetails3 /> },
      { path: "genuss-spiel", element: <ServiceDetails2 /> },
      { path: "our_team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "blog", element: <Blog /> },
      { path: "blog_details", element: <BlogDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
