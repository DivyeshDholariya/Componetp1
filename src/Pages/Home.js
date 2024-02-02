import Blog from "../Component/Blog/Blog";
import Client from "../Component/Client/Client";
import Getstart from "../Component/Getstart/Getstart";
import Services from "../Component/Services/Services";
import Slider from "../Component/Slider/Slider";
import Soultion from "../Component/Soultion/Soultion";

function Home() {
    return(
        <div>
            <Slider></Slider>
            <Services></Services>
            <Client></Client>
            <Soultion></Soultion>
            <Getstart></Getstart>
            <Blog></Blog>

            
        </div>
    );
}
export default Home;