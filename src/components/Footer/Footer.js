import './style.css'

// import vk from './../../img/icons/vk.svg'
import gitHub from './../../img/icons/gitHub.svg'
import instagram from './../../img/icons/instagram.svg'
import telegram from './../../img/icons/telegram.svg'
// import twitter from './../../img/icons/twitter.svg'
// import linkedIn from './../../img/icons/linkedIn.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className='footer-link'>
          <ul className='links'>
            <li className='links-item'>
              <h1>Pages</h1>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
            </li>
            <li className='links-item'>
              <h1>Pages</h1>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
            </li>
            <li className='links-item'>
              <h1>Pages</h1>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
                <ul>
                  <a href='/'>Page 1</a>
                </ul>
            </li>
            <li className='links-item'>
              <h1>May be something</h1>
                <ul>
                  May be something
                </ul>
                <ul>
                  May be something
                </ul>
                <ul>
                  May be something
                </ul>
            </li>
          </ul>
        </div>
        <div className="footer__wrapper">
          <ul className="social">
            {/* <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li> */}
            <li className="social__item">
              <a href="https://www.instagram.com/cyber_ac_of_zx?utm_source=qr&igsh=eWxlZGtqejRsNzYy">
                <img src={instagram} alt="Link" />
              </a>
            </li>
            {/* <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li> */}
            <li className="social__item tg">
              <a href="https://t.me/AKM_SHOOT">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/ZX885">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            {/* <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li> */}
          </ul>
          <div className="copyright">
            <p>© 2024 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;