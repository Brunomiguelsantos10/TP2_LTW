// App.jsx
import { useState, useEffect } from "react";
import "./index.css";
import Header from "./componentes/Header";
import InputLink from "./componentes/InputLink";
import Results from "./componentes/Results";
import History from "./componentes/History";
import ErrorComponent from "./componentes/ErrorComponent";
import Loading from "./componentes/Loading";

function App() {
  const [history, setHistory] = useState([]);
  const [link, setLink] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("history_links"));
    if (savedHistory) setHistory(savedHistory);
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem("history_links", JSON.stringify(history));
    }
  }, [history]);

  const summarize = () => {
    if (link.trim()) {
      fetchSummary(link);
    }
  };

  const fetchSummary = async (articleURL) => {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
      articleURL
    )}&lang=en&engine=2`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "53634ad726mshf6fb7a156308848p1e558ejsn2130fcf2820c",
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    setLoading(true);

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        setResult(data.summary);
        setHistory([{ link, result: data.summary }, ...history]);
      } else {
        setError(response.statusText || "Error fetching the summary");
        setResult("");
      }
    } catch (err) {
      setError(err.message || "Unexpected error");
      setResult("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="intro-section">
          <h1>Faça Resumo de Artigos com</h1>
          <h1 className="highlight">API de OpenAI</h1>
          <p>
            Esta é uma ferramenta para trabalhar com artigos e que pode ser usado</p><p> para transformar artigos longos num resumo claro e conciso
          </p>
        </div>
        <div className="content-section">
          <InputLink textoLink={link} setLink={setLink} summarize={summarize} />

          {history.map((item, index) => (
            <History
              key={index}
              link={item.link}
              result={item.result}
              setResult={setResult}
              setLink={setLink}
            />
          ))}

          {loading && <Loading />}
          {result && !loading && <Results result={result} />}
          {error && !loading && !result && <ErrorComponent error={error} />}
        </div>
      </div>
    </>
  );
}

export default App;