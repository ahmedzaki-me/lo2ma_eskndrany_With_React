import { Link } from "react-router";
import "./footer.css";
import Logo from "../assets/imgs/logo.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="social">
          <Link to={"/home"}>
            <img src={Logo} alt="logo" />
          </Link>
          <div className="links">
            <a
              href="https://www.facebook.com/share/1FGDBcf73y/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/lo2ma_eskndrany?igsh=YTRsbWl0ZnY0Zm90"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://wa.me/+201554942616" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="contact">
          <address>
            <a href="https://maps.app.goo.gl/wcHvHkhausgpLsYE9" target="_blank">
              <i className="fas fa-map-marker-alt fa-fw"></i>
              <div className="address">
                مرسي مطروح طريق الكورنيش خلف النورس بجوار حديقة العوام
              </div>
            </a>
          </address>
          <div className="Business">
            <i className="far fa-clock fa-fw"></i>
            <div className="info">Business Hours: From 2:00PM To 2:00AM</div>
          </div>
          <div className="numbers">
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className="nums" dir="ltr">
              <a href="tel:+201515199857">+201515199857</a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight" dir="ltr">
        <div className="container">
          <div>
            Made With Love By:
            <a href="https://wa.me/+201286113602" target="_blank">
              <span className="zaki"> Ahmed Zaki </span>
            </a>
            &copy;&nbsp;{new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
