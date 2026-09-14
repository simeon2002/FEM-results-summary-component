import data from "./data.json";

export default function App() {
  const results = data;
  const avgResult = Math.round(data.reduce((sum, result) => sum + result.score, 0) / data.length);

  return (
    <div className="app-container">
      <div className="container">
        <Score avgResult={avgResult} />
        <ScoreSummary results={results} />
      </div>
    </div>
  );
}

function Score({ avgResult }) {
  return (
    <div className="score-container">
      <p className="score-container__title">Your Result</p>
      <ScoreDisplay avgResult={avgResult} />
      <div className="score-container__desc-container">
        <h2 className="heading-secondary score-container__desc-title">Great</h2>
        <p className="score-container__desc-text">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  );
}

function ScoreDisplay({ avgResult }) {
  return (
    <div className="score">
      <div className="score__scores-container">
        <span className="score__number">{avgResult}</span>
        <span className="score__total">of 100</span>
      </div>
    </div>
  );
}

function ScoreSummary({ results }) {
  return (
    <div className="summary">
      <h3 className="summary__title">Summary</h3>
      {results.map(result => (
        <ScoreSummaryCard result={result} key={result.category} />
      ))}
      <Button>Continue</Button>
    </div>
  );
}

function Button({ children }) {
  <button className="btn">Continue</button>;
}

function ScoreSummaryCard({ result }) {
  return (
    <div className="summary-card">
      <div className="summary-card__title-container">
        <img src={result.icon} alt={result.category} className="summary-card__icon icon" />
        <h4 className="summary-card__category">{result.category}</h4>
      </div>
      <div className="summary-card__score-container">
        <span className="summary-card__score">{result.score}</span>
        <span>/</span>
        <span className="summary-card__score-total">100</span>
      </div>
    </div>
  );
}
