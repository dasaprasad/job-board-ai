import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <Link to={`/jobs/${job.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="job-card">
        <h2>{job.title}</h2>
        <p>{job.description}</p>

        <span className="badge">{job.location}</span>
        <span className="badge">{job.salary}</span>
        <span className="badge">{job.jobType}</span>
      </div>
    </Link>
  );
}