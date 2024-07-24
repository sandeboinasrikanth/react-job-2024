import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <div>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
              <h2 className="text-2xl font-bold">For Developers</h2>
              <p>Browse our React Jobs and Start Your Career today</p>
              <a
                href="/jobs.html"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse jobs
              </a>
            </Card>
            <Card bg="bg-indigo-100">
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p>List your job to find the perfect developer for the role.</p>
              <a
                href="/jobs.html"
                className="inline-block bg-indigo-700 text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Add job
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCards;
