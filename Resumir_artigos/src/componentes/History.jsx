// components/History.jsx
function History({ link, result, setLink, setResult }) {
  const viewLink = () => {
    setLink(link);
    setResult(result);
  };

  return (
    <div className="history-item" onClick={viewLink}>
      <span className="history-link">{link}</span>
    </div>
  );
}

export default History;