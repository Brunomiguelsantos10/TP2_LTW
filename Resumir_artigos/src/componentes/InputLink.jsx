// components/InputLink.jsx
function InputLink({ textoLink, setLink, summarize }) {
  return (
    <div className="input-container">
      <input
        type="url"
        value={textoLink}
        className="input-field"
        placeholder="Cole o link do artigo"
        onChange={(e) => setLink(e.target.value)}
        onFocus={(e) => e.target.value = ""}
      />
      <button onClick={summarize} className="submit-button">
        Resumir
      </button>
    </div>
  );
}

export default InputLink;
