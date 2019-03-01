import React from 'react';
import venmoQR from '../../venmo_ianguerin.png';
import chaCha from '../../cha_cha.jpg';
import boba from '../../boba.jpg';
import uncleChicken from '../../uncle_chicken.jpg';
import { instaLink } from '../constants';

export default class BouxThanks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="content boux-thanks">
        <div className="v-centered">
          <h1>hope you enjoyed your 🥚!</h1>
          <div>
            if you think it{"'"}s
            <br />
            as lovely as we do,
            <br />
            consider donating
            <br />
            the price of shipping
            <br />
            which is about $5
            <br />
            (to{' '}
            <a href="https://venmo.com/code?user_id=1145883928297472041">
              ian{"'"}s venmo
            </a>
            )<br />
            so that we can keep
            <br />
            sending these
            <br />
            bouse coop boxes (bouxes)
            <br />
            <a
              className="venmo-qr"
              href="https://venmo.com/code?user_id=1145883928297472041"
            >
              <img src={venmoQR} />
            </a>
          </div>
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
          ...
          <div>
            don{"'"}t forget to post a pic and tag us on instagram!
            <a
              className="external"
              target="_blank"
              rel="noopener noreferrer"
              href={instaLink}
            >
              @bousecoop
            </a>
          </div>
        </div>
      </div>
    );
  }
}
