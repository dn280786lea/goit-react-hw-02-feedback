import React from 'react';
import './feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return (this.state.good / total) * 100;
  };
  render() {
    return (
      <div>
        <h2 className="title">Please leave feedbeek</h2>
        <button
          type="button"
          className="feedback-btn"
          onClick={() => this.handleFeedback('good')}
        >
          Good
        </button>
        <button
          type="button"
          className="feedback-btn"
          onClick={() => this.handleFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          type="button"
          className="feedback-btn"
          onClick={() => this.handleFeedback('bad')}
        >
          Bad
        </button>
        <div>
          <div className="statistics">
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>
              Positive Feedback: {this.countPositiveFeedbackPercentage()}%
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
