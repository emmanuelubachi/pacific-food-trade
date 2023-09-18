import SimpleBarchart from "@/components/SimpleBarchart";
import React from "react";

const FeedingThePacific = () => {
  return (
    <>
      <header className="bg-gradient-to-br from-orange-100 to-orange-50 min-h-[80vh] lg:pt-24 pt-24">
        <div className="m-auto flex justify-center">
          <h1
            className="mb-4 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold leading-none tracking-tight 
            text-stone-600 "
          >
            Feeding the Pacific
          </h1>
        </div>
      </header>
      <main>
        <section className="bg-gradient-to-tr from-orange-100 to-orange-50">
          <div className="m-auto min-h-screen max-w-screen-2xl pt-4 px-2">
            <h2
              className="mb-8 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold leading-none tracking-tight 
            text-stone-600 "
            >
              Where does the food come from?
            </h2>

            <div
              className="gap-8 items-center
            max-[768px]:mx-auto 
            max-w-screen-xl
            md:grid md:grid-cols-2
            xl:gap-16"
            >
              <div>
                <p className="mb-3 text-lg text-stone-500 md:text-xl">
                  Deliver great service experiences fast - without the
                  complexity of traditional ITSM solutions.Accelerate critical
                  development work and deploy.
                </p>
                <p className="text-stone-500">
                  Track work across the enterprise through an open,
                  collaborative platform. Link issues across Jira and ingest
                  data from other software development tools, so your IT support
                  and operations teams have richer contextual information to
                  rapidly respond to requests, incidents, and changes.
                </p>
              </div>
              <div className=" w-auto h-96 ">
                <SimpleBarchart />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FeedingThePacific;
