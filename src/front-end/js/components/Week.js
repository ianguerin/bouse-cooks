import React from 'react';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);

    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    this.fetchData(this.props.match.params.week);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.week !== this.props.match.params.week) {
      await this.fetchData(this.props.match.params.week);
    }
  }

  async fetchData(week = '') {
    this.setState({
      data: []
    });

    const response = await fetch(`/api/week/${week}`);
    const json = await response.json();

    this.setState({
      data: Array.from(json)
    });
  }

  render() {
    const content =
      this.state.data.length > 0 ? (
        <div>
          <span className="cook-combo">
            cook combo: {this.state.data[0].moddedWeek}
            <div className="pagination">
              <Link
                className="next-week"
                to={`/cookbot/week/${this.state.data[0].actualWeek + 1}`}
              >
                Next Week{' '}
              </Link>
              {this.state.data[0].actualWeek > 0 && (
                <Link
                  className="last-week"
                  to={`/cookbot/week/${this.state.data[0].actualWeek - 1}`}
                >
                  Last Week
                </Link>
              )}
            </div>
          </span>
          <div className="cooking-days">
            {this.state.data.map(el => (
              <div key={el.date} className="cooking-day">
                <div className="datum">
                  <div className="title">Date:</div>
                  <div className="value">{el.date}</div>
                </div>
                <div className="datum">
                  <div className="title">Cooks:</div>
                  <div className="value">
                    {el.cooks.map(cook => cook.name).join(', ')}
                  </div>
                </div>
                <div className="datum">
                  <div className="title">Suggestions:</div>
                  <div className="value list">
                    {el.suggestions.map(suggestion => (
                      <a
                        key={suggestion.href}
                        href={suggestion.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {suggestion.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="centered">loading something good...</div>
      );

    return <div className="content week">{content}</div>;
  }
}