import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    api.get("/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      <main className="container">
        <div className="details-card">
          <h1>Applications</h1>

          {applications.length === 0 ? (
            <p>No applications yet.</p>
          ) : (
            applications.map((app) => (
              <div className="job-card" key={app.id}>
                <h3>Application #{app.id}</h3>
                <p>Job ID: {app.jobId}</p>
                <p>Candidate ID: {app.candidateId}</p>
                <span className="badge">{app.status}</span>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}