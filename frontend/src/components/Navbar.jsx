import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #ddd"
    }}>
      <h2>AI Job Board</h2>

      <div>
        <Link to="/">Jobs</Link>
        {" | "}
        <Link to="/post-job">Post Job</Link>
        <Link to="/applications">Applications</Link>
      </div>
    </nav>
  );
}