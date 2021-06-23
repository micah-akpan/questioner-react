const Footer = () => (
  <footer className="app-footer">
    <div className="container">
      <div className="app-footer__content">
        <p className="copyright">&copy; Questioner {new Date().getFullYear()}</p>
        <section className="footer-sec__links">
          <ul>
            <li><a href="#!">Terms of service</a></li>
            <li><a href="#!">Privacy Policy</a></li>
            <li><a href="#!">Contact</a></li>
            <li><a href="#!">How it works</a></li>
          </ul>
        </section>

        <section className="footer-sec__social-media">
          <ul>
            <li>
              <a href="#!" title="Follow us on Facebook">
                <img src="src/resources/icons/facebook.svg" alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="#!" title="Follow us on Twitter">
                <img src="src/resources/icons/twitter.svg" alt="twitter logo" />
              </a>
            </li>
            <li>
              <a href="#!" title="Follow us on Medium">
                <img src="src/resources/icons/medium.svg" alt="medium logo" />
              </a>
            </li>
            <li>
              <a href="#!" title="Follow us on Instagram">
                <img src="src/resources/icons/instagram.svg" alt="instagram logo" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
);

export default Footer;
