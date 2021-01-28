import Header from '../../Components/Header/Header';
import Home from '../Home/Home';
import AboutOwner from '../AboutOwner/AboutOwner';
import Service from '../Service/Service';
import AddClockPhoto from '../AddPhoto/AddClockPhoto';
import AddFramePhoto from '../AddPhoto/AddFramePhoto';
// import ShowClockImages from '../ShowClockImages/ShowClockImages';
// import ShowFrameImages from '../ShowFrameImages/ShowFrameImages';
import ContactUs from '../ContactUs/ContactUs';
function Content() {

    

    return(
        <div >
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
            <section id='AddClockPhoto'>
                <AddClockPhoto />
            </section>
            <section id='AddFramePhoto'>
                <AddFramePhoto />
            </section>
            {/* <section id='ShowClockImages'>
                <ShowClockImages />
            </section>
            <section id='ShowFrameImages'>
                <ShowFrameImages />
            </section> */}
            <section id='ContactUs'>
                <ContactUs />
            </section>
        </div>
    );
}

export default Content;