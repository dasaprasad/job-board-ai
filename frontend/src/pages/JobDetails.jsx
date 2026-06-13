import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  function handleApply() {
    api.post("/applications", {
      jobId: job.id,
      candidateId: 1,
      status: "PENDING"
    })
    .then(() => setMessage("Application submitted successfully!"))
    .catch(() => setMessage("Failed to submit application."));
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <main className="container">
          <div className="details-card">Loading job details...</div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="details-card">
          <h1>{job.title}</h1>
          <p>{job.description}</p>

          <span className="badge">{job.location}</span>
          <span className="badge">{job.salary}</span>
          <span className="badge">{job.jobType}</span>

          <br /><br />

          {message && (
            <p className={message.includes("success") ? "success" : "error"}>
              {message}
            </p>
          )}

          <button onClick={handleApply}>Apply Now</button>
        </div>
      </main>
    </>
  );
}