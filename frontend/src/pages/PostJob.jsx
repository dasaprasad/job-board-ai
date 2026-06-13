import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function PostJob() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    jobType: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    api.post("/jobs", form)
      .then(() => {
        setMessage("Job posted successfully!");
        setForm({ title: "", description: "", location: "", salary: "", jobType: "" });
      })
      .catch(() => setMessage("Failed to post job."));
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="form-card">
          <h1>Post a Job</h1>

          {message && <p className={message.includes("success") ? "success" : "error"}>{message}</p>}

          <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Job Title" value={form.title} onChange={handleChange} required />
            <textarea name="description" placeholder="Job Description" value={form.description} onChange={handleChange} required />
            <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
            <input name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} required />
            <input name="jobType" placeholder="Job Type" value={form.jobType} onChange={handleChange} required />
            <button type="submit">Post Job</button>
          </form>
        </div>
      </main>
    </>
  );
}