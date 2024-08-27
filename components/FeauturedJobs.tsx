import React from "react";
import { FeauturedJob } from "./FeauturedJob";

export const FeauturedJobs = () => {
  const featuredJobs = [
    {
      mainJobTitle: "Software Engineer",
      isFeatured: "true",
      jobTags: ["JavaScript", "React", "Node.js"],
      fulltimeUrgent: ["Full-time", "Urgent"],
    },
    {
      mainJobTitle: "Data Scientist",
      isFeatured: "false",
      jobTags: ["Python", "Machine Learning", "Data Analysis"],
      fulltimeUrgent: ["Full-time"],
    },
    {
      mainJobTitle: "Project Manager",
      isFeatured: "true",
      jobTags: ["Management", "Agile", "Scrum"],
      fulltimeUrgent: ["Full-time", "Urgent"],
    },
    {
      mainJobTitle: "UI/UX Designer",
      isFeatured: "false",
      jobTags: ["Design", "Adobe XD", "Figma"],
      fulltimeUrgent: ["Part-time"],
    },
    {
      mainJobTitle: "DevOps Engineer",
      isFeatured: "true",
      jobTags: ["AWS", "Docker", "Kubernetes"],
      fulltimeUrgent: ["Full-time"],
    },
  ];

  return (
    <>
      <div className="m-4 md:max-w-[70vw] mx-auto md:grid md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {featuredJobs.map((item, index) => (
          <FeauturedJob
            key={index}
            mainJobTitle={item.mainJobTitle}
            isFeatured={item.isFeatured}
            jobTags={item.jobTags}
            fulltimeUrgent={item.fulltimeUrgent}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Load More Listings
        </button>
      </div>
    </>
  );
};
