import { FC, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { Technology } from "../model/types";

const Technologies: FC = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const fetchTechnologies = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/technology/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Technology[] = await response.json();
      setTechnologies(data);
    } catch (error) {
      console.error("Failed to fetch technologies:", error);
    }
  };

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex justify-center">
      <section className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {technologies.map((technology) => {
          return (
            <Card
              title={technology.name}
              description={technology.shortDescription}
              imageUrl={technology.logoUrl}
              buttonText={"Details"}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Technologies;
