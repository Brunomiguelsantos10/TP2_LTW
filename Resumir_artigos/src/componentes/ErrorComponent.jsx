// components/ErrorComponent.jsx
function ErrorComponent({ error }) {
  return (
    <div className="error">
      <h3>Ocorreu um erro...</h3>
      <p>{error}</p>
    </div>
  );
}

export default ErrorComponent;