import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs/>
    </div>
  );
}

export default App;
