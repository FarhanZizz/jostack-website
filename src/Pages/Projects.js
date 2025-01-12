import React from "react";
import EmerlyLark from "../Projects/Emerlylark";
import Styleus from "../Projects/Styleus";
import TicketDone from "../Projects/Ticketdone";
const Projects = () => {
  return (
    <div>
      <div className="bg-[#141517] p-5 py-28 text-white lg:px-20 lg:py-32">
        <h1 className="text-3xl font-semibold capitalize lg:text-6xl">
          Our Projects
        </h1>
        <p className="mt-5 text-lg capitalize lg:w-4/6 lg:text-2xl">
          These are practical projects that showcase our work. Explore these
          examples for hands-on insights and a deeper understanding of our
          approach and solutions.
        </p>

        <div className="space-y-24 pt-24">
          <EmerlyLark />
          <hr />
          <Styleus />
          <hr />
          <TicketDone />
          <h1 className="text-center text-3xl">
            Stay tuned, more exciting projects are on the way!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
