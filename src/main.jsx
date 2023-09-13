import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MarketingSection from './components/pages/Marketing/index.jsx';
import BusinessSection from './components/pages/Business/index.jsx';
import BrandingSection from './components/pages/Branding/index.jsx';
import DevelopmentSection from './components/pages/Development/index.jsx';
import BundleSection from './components/pages/Bundle/index.jsx';
import Consulting from './components/pages/Consulting/index.jsx';
import About from './components/pages/About/index.jsx';
import Detail from './components/Artist/Detail/Detail.jsx';
import './index.css'
import '../style.scss';

import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import ServicesTattoo from './components/ServicesTattoo/ServicesTattoo.jsx';
import PiercingTattoo from './components/PiercingTattoo/PiercingTattoo.jsx';
import LinkComponent from './components/LinkComponent/LinkComponent.jsx';
import Contact from './components/Contact/Contact.jsx';
import Rewards from './components/Rewards/Rewards.jsx';
import SendContact from './components/SendContact/SendContact.jsx';

// PROCESS
import Design from './components/Process/Design.jsx';
import CoverUp from './components/Process/CoverUp.jsx';
import Sleeve from './components/Process/Sleeve.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';


// PRIVACY
import Privacy from './components/Privacy/Privacy.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/branding',
    element: <BrandingSection />
  },
  {
    path: '/business',
    element: <BusinessSection />
  },
  {
    path: '/development',
    element: <DevelopmentSection />
  },
  {
    path: '/bundle',
    element: <BundleSection />
  },
  {
    path: '/marketing',
    element: <MarketingSection />
  },
  {
    path: '/consulting',
    element: <Consulting />
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: "/artist/:id",
    element: <Detail/>
  },
  {
    path: "/services/tattoo",
    element: <ServicesTattoo />
  },
  {
    path: "/services/piercing",
    element: <PiercingTattoo />
  },
  {
    path: '/links',
    element: <LinkComponent />
  },
  {
    path: '/design-process',
    element: <Design />
  },
  {
    path: '/coverup-process',
    element: <CoverUp />
  },
  {
    path: '/sleeve-process',
    element: <Sleeve />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/awards',
    element: <Rewards />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/contact-us',
    element: <SendContact />
  },
  {
    path: '/privacy-policy',
    element: <Privacy />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);