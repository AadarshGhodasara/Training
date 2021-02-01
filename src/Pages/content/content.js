import React , {Suspense } from 'react';
import Loader from '../../Components/Loader/LoaderModal';
const Header = React.lazy(() => import('../../Components/Header/header.js'));
const Home = React.lazy(() => import('../Home/Home'));
const AboutOwner = React.lazy(() => import('../AboutOwner/AboutOwner'));
const Service = React.lazy(() => import('../Service/Service'));
const ContactUs = React.lazy(() => import('../ContactUs/ContactUs'));

// import ShowClockImages from '../ShowClockImages/ShowClockImages';
// import ShowFrameImages from '../ShowFrameImages/ShowFrameImages';

function Content(props) {



    return(
        <>
        <Suspense fallback={<Loader text='Loading...'/>}>
            <Header />
            <section id='Home'>
                <Home />
            </section>
            <section id='About'>
                <AboutOwner />
            </section>
            <section id='Service'>
                <Service />
            </section>
            
        
                    {/* <section id='AddClockPhoto'>
                    <AddClockPhoto />
                    </section>
                    <section id='AddFramePhoto'>
                        <AddFramePhoto />
                    </section> */}
                    {/* <section id='ShowClockImages'>
                        <ShowClockImages />
                    </section>
                    <section id='ShowFrameImages'>
                        <ShowFrameImages />
                    </section> */}
               


            <section id='ContactUs'>
                <ContactUs />
            </section>
            </Suspense>
        </>
    );
}

export default Content;