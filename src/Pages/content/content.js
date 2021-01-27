import Header from '../../Components/Header/header';
import Home from '../Home/Home';
import AddPhoto from '../addPhoto/AddPhoto';
import ShowImages from '../showImages/showImages';
import AboutOwner from '../AboutOwner/AboutOwner';
import Service from '../Service/Service';
// import ''.
// window.scroll({
//     behavior: 'smooth'
//   });
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
            <section id='AddPhoto'>
                <AddPhoto />
            </section>
            <section id='ShowPhoto'>
                <ShowImages />
            </section>
        </div>
    );
}

export default Content;