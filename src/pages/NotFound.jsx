import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist.
        </p>

        <p className="invalid-url">
          Invalid URL: <strong>{location.pathname}</strong>
        </p>

        <Link className="not-found-btn" to="/">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;