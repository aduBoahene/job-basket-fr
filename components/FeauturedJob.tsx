import React from "react";

interface FeauturedJobProps {
  mainJobTitle: string;
  isFeatured: string;
  jobTags: string[];
  fulltimeUrgent: string[];
}

export const FeauturedJob = ({
  mainJobTitle,
  isFeatured,
  jobTags,
  fulltimeUrgent,
}: FeauturedJobProps) => {
  return (
    <>
      <div className="flex border border-2 p-4 justify-between mb-8 mx-4">
        <div className="flex"> {/* Adjusted */}
          <div className="bg-blue-400 w-16 h-16 rounded-lg mr-4"></div>
          <div className="flex flex-col gap-2">
            <h4 style={{ fontFamily: "Poppins-Medium" }}>
              {mainJobTitle}
              <span
                className="text-green-700 ml-2"
                style={{ fontFamily: "Poppins-Light" }}
              >
                {isFeatured ? "Featured": ""}
              </span>
            </h4>
            <div className="flex flex-wrap"> {/* Adjusted */}
              {
                jobTags.map((item, idx) => (
                  <ImageText key={idx} jobTitle={item} />
                ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-2"> {/* Adjusted */}
              {fulltimeUrgent.map((item, idx) => (
                <Duration key={idx} fulltime={item} /> 
              ))}
            </div>
          </div>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

interface ImageTextProps {
  jobTitle: string;
}

function ImageText({ jobTitle }: ImageTextProps) {
  return (
    <div className="flex items-center mr-2 mb-2"> {/* Adjusted */}
      <div className="bg-blue-400 w-3 h-3 rounded-lg md:mr-4"></div>
      <span style={{ fontFamily: "Poppins-Light" }} className="text-gray-400">
        {jobTitle}
      </span>
    </div>
  );
}

interface DurationProps {
  fulltime: string;
}

function Duration({ fulltime }: DurationProps) {
  return (
    <span className="border px-4 rounded-xl bg-blue-200 text-blue-400 border-0 py-0 flex justify-center items-center">
      {fulltime}
    </span>
  );
}
