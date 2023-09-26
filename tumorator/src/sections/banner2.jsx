
import bannervideo from "../assets/bannervideo.mp4"
import poster from "../assets/pexels-tima-miroshnichenko-6011602.jpg"
import logo from "../assets/Ribbon.png"

const Banner2 = () => {
    return (
        <div className="background-video">
            <video id="background-video" autoPlay loop muted poster={bannervideo}>
                <source src={bannervideo} type="video/mp4"/>
            </video>
            <p className="text-container">
                <img src={logo} className="banner-logo"/>
                <br/>
                <span className="sub-text">
                 feeling lost and helpless?
                </span>
                <br/>
                <span className="main-text">
                find the help and support you need
                </span>
                <br/>
                <span className="secondary-text">
                    use <strong>Tumorator</strong> now.
                </span>
            </p>



        </div>
    )
}
export default Banner2;