import React from 'react';
import chaCha from '../../../images/real_cha_cha.jpg';
import boba from '../../../images/real_boba.jpg';
import uncleChicken from '../../../images/real_uncle_chicken.jpg';

export default class Facts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.facts = [
      {
        question: "my egg was not refrigerated. why wasn't it refrigerated?",
        answer:
          "When a chicken lays an egg, in a clean coop (bouse coop is v clean) the eggs are clean, and not covered in 💩. The eggs are covered in what is known as a \"bloom\" which acts as a natural bacterial defense for the egg. Washing it off might force bacteria into the egg, and the bloom helps it stay fresher, longer (refrigerators help too!). In the USA the eggs we buy at the supermarket have all been washed because the USDA requires it, and honestly, the eggs are often laid into less than sanitary conditions, so it might be necessary. Other countries in the world have different laws, like prohibiting the washing of eggs. In the bousecoop, we're gonna leave the eggs in a carton, unwashed, and refrigerated (the eggs won't last long because we're big fans for breakfast). The eggs will then be washed with a warmer water (hotter than the egg is) and cooked properly, to kill any bacteria (like salmonella 🦠) that may have been driven into the shell during the washing of the egg.",
        link: 'https://www.instagram.com/p/Brv-euIhG5Z/'
      },
      {
        question: 'my egg showed up broken. should I eat it?',
        answer: 'I would not eat that.'
      },
      {
        question: 'what kinda chicken is Uncle Chicken?',
        answer:
          'Uncle Chicken is a Light Sussex. This breed of chicken is usually bread for meat and for the cream colored eggs they lay. Uncle Chicken was born around sometime last March (2018)!',
        image: uncleChicken
      },
      {
        question: 'what kinda chicken is Boba?',
        answer:
          "Boba is an Ameraucana. Ameraucana's lay light blue eggs. That's why we picked her, because wow, such a pretty color. Boba was born sometime last March (2018) just like here coop mates.",
        image: boba
      },
      {
        question: 'what kinda chicken is Cha-cha?',
        answer:
          "Cha-cha is a Buff Orpington. And is probably the most outgoing, human-curious bird we'll ever meet. She lays big eggs for a tiny frame, and eats anything that moves. Or doesn't move. Or isn't food, she'll try twice.",
        image: chaCha
      }
    ];
  }

  renderFact(fact, i) {
    return (
      <div className="fact" key={i}>
        <div className="question">{fact.question}</div>
        <div className="answer">
          {fact.image && <img src={fact.image} />}
          <div>
            {fact.answer}
            {fact.link && (
              <span className="fact-link">
                fact taken from{' '}
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href={fact.link}
                >
                  our instagram
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  renderFacts(facts) {
    return facts.map(this.renderFact);
  }

  render() {
    return (
      <div className="content boux-facts">
        <h1>facts is facts</h1>
        {this.renderFacts(this.facts)}
      </div>
    );
  }
}
