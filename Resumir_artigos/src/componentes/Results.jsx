// components/Results.jsx
function Results({ result }) {
  const paragraphs = result.split("\n");

  return (
    <div className="results">
      <h3>Este é o resultado do resumo:</h3>
      <div className="result-container">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default Results;