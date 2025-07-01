import {
  Square3Stack3DIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/16/solid";
import { FC } from "react";
import { useNavigate } from "react-router";

const Hero: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero bg-gradient-to-br from-base-200 to-base-300 min-h-screen">
      <div className="hero-content text-center max-w-xs sm:max-w-xl lg:max-w-4xl px-4 sm:px-6">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="badge badge-secondary badge-sm sm:badge-md font-medium text-xs sm:text-sm">
            For Developers, By Developers
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text leading-tight">
            StackPedia
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-base-content/80 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
            Discover, Compare & Master Modern Tech Stacks
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-base-content/70 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed">
            Navigate the ever-evolving landscape of development technologies.
            Explore comprehensive overviews, compare frameworks, and build the
            perfect tech stack for your next project.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4">
            <button className="btn btn-primary btn-sm sm:btn-md px-4 sm:px-6 text-sm sm:text-base w-full sm:w-auto">
              Explore Tech Stacks
            </button>
            <button
              onClick={() => navigate("/technologies")}
              className="btn btn-primary btn-sm sm:btn-md px-4 sm:px-6 text-sm sm:text-base w-full sm:w-auto"
            >
              Browse Technologies
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto">
            <div className="stat bg-base-100 border border-base-300 rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4">
              <div className="stat-figure text-primary">
                <Square3Stack3DIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="stat-title text-xs sm:text-sm font-medium">
                Tech Stacks
              </div>
              <div className="stat-value text-lg sm:text-xl lg:text-2xl font-bold">
                100+
              </div>
            </div>

            <div className="stat bg-base-100 border border-base-300 rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4">
              <div className="stat-figure text-primary">
                <WrenchScrewdriverIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="stat-title text-xs sm:text-sm font-medium">
                Technologies
              </div>
              <div className="stat-value text-lg sm:text-xl lg:text-2xl font-bold">
                500+
              </div>
            </div>

            <div className="stat bg-base-100 border border-base-300 rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4">
              <div className="stat-figure text-primary">
                <UsersIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="stat-title text-xs sm:text-sm font-medium">
                Developers
              </div>
              <div className="stat-value text-lg sm:text-xl lg:text-2xl font-bold">
                10K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
