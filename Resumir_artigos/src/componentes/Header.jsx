// components/Header.jsx
function Header() {
  return (
    <header className="header-container">
      <img src="/src/assets/img.png" alt="Logo" className="logo" />
      <div className="auth-buttons">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Login</button>
      </div>
    </header>
  );
}

export default Header;