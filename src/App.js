import './App.css';
import Spline from '@splinetool/react-spline';
import { Wrapper } from './components/Wrapper';
import { Content } from './components/Content';
import Logo from './images/logo.svg';
import IconTwitter from './images/icon-twitter.svg';
import IconYoutube from './images/icon-youtube.svg';
import IconLaptop from './images/icon-laptop.svg';
import { Menu } from './components/Menu';
import { Social } from './components/Social';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/nGrfc2dxvZr6Ggek/scene.splinecode"
        />
        <Content>
          <Menu>
            <li>
              <img src={Logo} alt="Logo" />
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Download</a>
            </li>
            <li>
              <a href="/">App</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <button>Get Started</button>
            </li>
          </Menu>
          <h1>Collaborate with people</h1>
          <p>
            Bring your team together and build your community by using our
            cross-platform app that lets you collaborate via chat, voice and by
            sharing and storing unlimited media files. A world of topics is
            waiting for you. Join the private beta.
          </p>
          <button>
            {' '}
            <img src={IconLaptop} alt="Download" /> Download for Mac
          </button>
        </Content>
        <Social>
          <div />
          <img src={IconTwitter} alt="Twitter" />
          <img src={IconYoutube} alt="Youtube" />
        </Social>
      </Wrapper>
    </div>
  );
}

export default App;
