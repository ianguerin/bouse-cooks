import React from 'react';
import axios from 'axios';

const CONGRATS_TIME_LIMIT = 4000;

const NAME_MAP = {
  'uncle-chicken': 'Uncle Chicken',
  'cha-cha': 'Cha-cha',
  boba: 'Boba',
  unclear: 'mystery chicken'
};

export default class Eggs extends React.Component {
  constructor(props) {
    super(props);

    this.updateIDKEgg = this.updateIDKEgg.bind(this);

    this.updateBobaEgg = this.updateBobaEgg.bind(this);
    this.updateUncleChickenEgg = this.updateUncleChickenEgg.bind(this);
    this.updateChaChaEgg = this.updateChaChaEgg.bind(this);

    this.removeCongrats = this.removeCongrats.bind(this);

    this.state = {
      congrats: ''
    };
  }

  removeCongrats() {
    this.setState({ congrats: '' });
  }

  updateEgg(name) {
    axios
      .post(`/api/add-egg/${name}`)
      .then(res => {
        if (res.status !== 200) {
          return;
        }

        this.setState({ congrats: name });
        setTimeout(this.removeCongrats, CONGRATS_TIME_LIMIT);
      })
      .catch(console.log);
  }

  updateIDKEgg() {
    this.updateEgg('unclear');
  }

  updateBobaEgg() {
    this.updateEgg('boba');
  }

  updateUncleChickenEgg() {
    this.updateEgg('uncle-chicken');
  }

  updateChaChaEgg() {
    this.updateEgg('cha-cha');
  }

  render() {
    return (
      <div className="content eggs">
        <div className="eggs-inner">
          {this.state.congrats !== '' && (
            <div className="congrats">
              Congrats on the egg, {NAME_MAP[this.state.congrats]}!
            </div>
          )}
          <div className="who-laid">Who laid the egg?</div>
          <div className="centered chicken boba" onClick={this.updateBobaEgg}>
            Boba
          </div>
          <div
            className="centered chicken cha-cha"
            onClick={this.updateChaChaEgg}
          >
            Cha-cha
          </div>
          <div
            className="centered chicken uncle-chicken"
            onClick={this.updateUncleChickenEgg}
          >
            Uncle Chicken
          </div>
          <div className="centered chicken unclear" onClick={this.updateIDKEgg}>
            I Dunno
          </div>
        </div>
      </div>
    );
  }
}
