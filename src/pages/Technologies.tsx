import { FC } from "react";
import Card from "../components/Card/Card";
import { useTechnologies } from "../api/queries/technologies";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { LOGO_REGISTRY } from "../data/logoRegistry";

const Technologies: FC = () => {
  const { data: technologies, isPending, isError, error } = useTechnologies();
  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex justify-center items-center">
      {isPending && <span className="loading loading-bars w-[10%] text-primary"></span>}
      {isError && (
        <div role="alert" className="alert alert-error">
          <ExclamationCircleIcon height={'2em'} width={'2em'}/>
          <span>{error?.message}</span>
        </div>
      )}
      <section className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {technologies &&
          technologies.map((technology) => {
            return (
              <Card
                title={technology.name}
                description={technology.shortDescription}
                logo={LOGO_REGISTRY[technology.slug]}
                buttonText={"Details"}
              />
            );
          })}
      </section>
    </main>
  );
};

export default Technologies;
