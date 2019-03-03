import React from 'react';
import venmoQR from '../../../images/venmo_ianguerin.png';
import chaCha from '../../../images/cha_cha.jpg';
import boba from '../../../images/boba.jpg';
import uncleChicken from '../../../images/uncle_chicken.jpg';
import { instaLink } from '../../constants';

export default class Thanks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="content boux-thanks">
        <div className="v-centered">
          <h1>
            we hope you enjoy your <span className="not-bold-emoji">🥚</span>!
          </h1>
          <div className="body">
            if you think it{"'"}s as lovely as we do, consider donating the
            price of shipping which is about $5 (to{' '}
            <a href="https://venmo.com/code?user_id=1145883928297472041">
              ian{"'"}s venmo
            </a>
            ) so that we can keep sending these bouse coop boxes (bouxes)
          </div>
          <br />
          <br />
          with ❤ -
          <div className="chickens">
            <a
              className="external"
              target="_blank"
              rel="noopener noreferrer"
              href={instaLink}
            >
              <div className="bar">
                <img src={boba} />
                <img src={chaCha} />
                <img src={uncleChicken} />
              </div>
            </a>
          </div>
          <div style={{ 'margin-top': '32px' }}>
            don{"'"}t forget to post a pic and tag us on{' '}
            <a
              className="external"
              target="_blank"
              rel="noopener noreferrer"
              href={instaLink}
            >
              instagram! @bousecoop
            </a>
            <br />
            <br />
            <br />
            <a
              className="venmo-qr"
              href="https://venmo.com/code?user_id=1145883928297472041"
            >
              <img src={venmoQR} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
