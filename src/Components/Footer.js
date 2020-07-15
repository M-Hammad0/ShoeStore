import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return <div id="Footer">
    <div className="row foot-row">
      <div className="col-lg-3">
      <FacebookIcon className="social"/>
      <TwitterIcon className="social"/>
      <YouTubeIcon className="social"/>
      <PinterestIcon className="social"/>
      <InstagramIcon className="social"/>
      </div>
      <div className="col-lg-3">
        <ul>
          <li> About Us</li>
          <li> Contact</li>
          <li>Blog</li>
      </ul>
</div>
        <div className="col-lg-3">
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-lg-3 footer-4">
        <li><a href="https://github.com/M-Hammad0">Github</a></li>
        </div>
      </div>
    </div>
}

export default Footer;

