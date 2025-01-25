import { SocialIcon } from "react-social-icons";
import footer from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={footer.foot}>
        {/* <form>
          <label>feedback</label>
          <br />
          <input type="text" />
          <input type="submit" value="send" />
        </form> */}

        <div className={footer.CustomerHelpAndSupport}>
          <p>
            <a href="#jjj.com">Support</a>
          </p>
          <p>
            <a href="privacy-policy.com">privacy policy</a>
          </p>
          <p>
            <a href="3jdsjj.com">terms & condition</a>
          </p>
          <p>
            <Link to="/Owner/SignUp">List Property</Link>
          </p>
        </div>

        <div className={footer.social}>
          <ul>
            <li>
              <SocialIcon
                bgColor="none"
                fgColor="#fff"
                url="https://instagram.com"
              />
            </li>
            <li>
              <SocialIcon
                bgColor="none"
                fgColor="#fff"
                url="https://facebook.com"
              />
            </li>
            <li>
              <SocialIcon
                bgColor="none"
                fgColor="#fff"
                url="https://twitter.com"
              />
            </li>
          </ul>
        </div>
        <div className={footer.copyRight}>
          <p>| All rights reserved © 2024 findhome |</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
