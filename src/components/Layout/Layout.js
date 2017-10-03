import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { initialize, addTranslationForLanguage, setActiveLanguage } from 'react-localize-redux';
import SideMenuBar from '../SideMenuBar/SideMenuBar';
import NavBar from '../NavBar/NavBar';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Help from '../Help/Help';
import './Layout.scss';
import English from '../../data/en.json';
import German from '../../data/de.json';
import French from '../../data/fr.json';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.closeChat = this.closeChat.bind(this);
    this.minimizeChat = this.minimizeChat.bind(this);
  }
  componentWillMount() {
    const languages = ['en', 'fr', 'de'];
    this.props.dispatch(initialize(languages));
    this.props.dispatch(addTranslationForLanguage(English, 'en'));
    this.props.dispatch(addTranslationForLanguage(French, 'fr'));
    this.props.dispatch(addTranslationForLanguage(German, 'de'));
    this.props.dispatch(setActiveLanguage('en'));
  }
  closeChat() {
    const x = document.getElementById('chatBox');
    x.style.display = 'none';
  }
  minimizeChat() {
    const x = document.getElementById('chatboxContent');
    x.classList.toggle('display');
  }
  render() {
    const { location } = this.props;
    const mypath = location.pathname;
    console.log(location.pathname);
    return (
      <div>
        {mypath === '/Login' ? this.props.children :
        <div>
          <SideMenuBar />
          <main className="app">
            <div className="app-wrapper">
              <NavBar />
              <div className="app-container">
                <div className="ChatBox" id="chatBox">
                  <div className="chatHeader">
                    <Col xs={2} md={2} className="no-padding chatIcon">
                      <img src="/assets/images/icons/ico-comments.svg" alt="" />
                    </Col>
                    <Col xs={9} md={9} className="no-padding">
                      <h1>Chatbot</h1>
                    </Col>
                    <div className="minimizeButton" onClick={() => this.minimizeChat()}>
                      <img src="/assets/images/icons/icon-remove.svg" alt="" />
                    </div>
                    <div className="box-icon box-icon--close js-box-close" data-checkbox="compare-02" onClick={() => this.closeChat()}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.75 27.75">
                        <title>icon-close</title>
                        <path
                          d="M.54,3.44l3-3L13.9,10.79,24.69,0l3.06,3.06L17,13.85,27.48,24.37l-3,3L14,16.85,3.06,27.75,0,24.69l10.9-10.9Z"
                          fill="#bdccd4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="chatboxContent" id="chatboxContent">
                    <Col lg={11} md={11} sm={11} className="outChatBubble">
                      Hello How are you..!
                    </Col>
                    <br className="spacer" />
                    <Col lg={11} md={11} sm={11} className="inChatBubble">
                      Hi.. I am good..!
                    </Col>
                    <br className="spacer" />
                    <Col lg={11} md={11} sm={11} className="outChatBubble">
                      Hello How are you..!
                    </Col>
                    <br className="spacer" />
                    <Col lg={11} md={11} sm={11} className="inChatBubble">
                      Hi.. I am good..!
                    </Col>
                    <br className="spacer" />
                    <Col lg={11} md={11} sm={11} className="outChatBubble">
                      Hello How are you..!
                    </Col>
                    <br className="spacer" />
                    <Col lg={11} md={11} sm={11} className="inChatBubble">
                      Hi.. I am good..!
                    </Col>
                    <br className="spacer" />
                  </div>
                  <div className="chatTextboxWrap">
                    <input type="text" name="" placeholder="Your Message" />
                  </div>
                </div>
                {mypath === '/' ? '' :
                <div className="container">
                  <div className="page-nav">
                    <BreadCrumbs />
                    <Help />
                  </div>
                </div>
                }
                {this.props.children}
              </div>
            </div>
          </main>
        </div>
        }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { locale: state.locale };
}

export default connect(mapStateToProps)(Layout);
