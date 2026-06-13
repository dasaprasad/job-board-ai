import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero">
          <h1>Find your next opportunity</h1>
          <p>Browse jobs from top companies and apply faster.</p>
        </section>

        <input
          className="search-input"
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredJobs.length === 0 ? (
          <div className="job-card">No jobs found.</div>
        ) : (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </main>
    </>
  );
}