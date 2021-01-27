import Header from '../../Components/Header/Header';
import Home from '../Home/Home';
// import AddPhoto from '../AddPhoto/AddPhoto';
// import ShowImages from '../ShowImages/ShowImages';
import AboutOwner from '../AboutOwner/AboutOwner';
import Service from '../Service/Service';
import ShowClockImages from '../ShowClockImages/ShowClockImages';
import ShowFrameImages from '../ShowFrameImages/ShowFrameImages';
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
            <section id='ShowClockImages'>
                <ShowClockImages />
            </section>
            <section id='ShowFrameImages'>
                <ShowFrameImages />
            </section>
            {/* <section id='AddPhoto'>
                <AddPhoto />
            </section>
            <section id='ShowPhoto'>
                <ShowImages />
            </section> */}
        </div>
    );
}

export default Content;