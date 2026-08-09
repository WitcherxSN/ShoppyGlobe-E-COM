import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main>
      <h1>404 - Page Not Found</h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <p>
        Invalid URL: <strong>{location.pathname}</strong>
      </p>

      <Link to="/">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;