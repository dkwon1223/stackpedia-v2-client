import { Square3Stack3DIcon, UsersIcon, WrenchScrewdriverIcon } from "@heroicons/react/16/solid";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero bg-gradient-to-br from-base-200 to-base-300 min-h-screen">
      <div className="hero-content text-center max-w-4xl">
        <div className="space-y-8">
          <div className="badge badge-secondary badge-lg font-semibold">
            For Developers, By Developers
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text leading-tight">
            StackPedia
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-base-content/80 max-w-2xl mx-auto">
            Discover, Compare & Master Modern Tech Stacks
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Navigate the ever-evolving landscape of development technologies. 
            Explore comprehensive overviews, compare frameworks, and build the perfect 
            tech stack for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="btn btn-primary btn-lg px-8">
              Explore Tech Stacks
            </button>
            <button className="btn btn-primary btn-lg px-8">
              Browse Technologies
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="stat bg-base-100/70 rounded-2xl backdrop-blur-sm">
              <div className="stat-figure text-primary text-2xl"><Square3Stack3DIcon height={'1.5em'}/></div>
              <div className="stat-title text-lg">Tech Stacks</div>
              <div className="stat-value text-2xl">100+</div>
            </div>
            <div className="stat bg-base-100/70 rounded-2xl backdrop-blur-sm">
              <div className="stat-figure text-primary text-2xl"><WrenchScrewdriverIcon height={'1.5em'}/></div>
              <div className="stat-title text-lg">Technologies</div>
              <div className="stat-value text-2xl">500+</div>
            </div>
            <div className="stat bg-base-100/70 rounded-2xl backdrop-blur-sm">
              <div className="stat-figure text-primary text-2xl"><UsersIcon height={'1.5em'}/></div>
              <div className="stat-title text-lg">Developers</div>
              <div className="stat-value text-2xl">10K+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
