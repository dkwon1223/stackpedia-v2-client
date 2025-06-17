import { ChangeEvent, FC, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useTechnologies } from "../../api/queries/technologies";
import { LOGO_REGISTRY } from "../../data/logoRegistry";
import ErrorPage from "../ErrorPage/ErrorPage";
import { AxiosError } from "axios";
import { useCategories } from "../../api/queries/categories";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const Technologies: FC = () => {
  const [categoryId, setCategoryId] = useState<string>();
  const [search, setSearch] = useState<string>("");
  const {
    data: technologies,
    isPending,
    isError,
    error,
    isFetching,
    refetch,
  } = useTechnologies(categoryId);
  const { data: categories } = useCategories();

  const getErrorStatusCode = () => {
    if (error && error instanceof AxiosError) {
      return error.response?.status || 500;
    }
    return 500;
  };

  const getErrorMessage = () => {
    if (error && error instanceof AxiosError) {
      return (
        error.response?.data?.message ||
        error.message ||
        "Failed to load technologies"
      );
    }
    return "Failed to load technologies";
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const filteredTechnologies = technologies?.filter((tech) => {
    return tech.name.toLowerCase().includes(search.toLocaleLowerCase());
  })

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col justify-start items-center">
      <div className="w-full mb-2 flex justify-center">
        <label className="input">
          <MagnifyingGlassIcon height={'1em'} />
          <input type="search" className="grow text-primary-content" placeholder="Search by name" onChange={handleSearch}/>
        </label>
      </div>
      <div className="divider divider-secondary text-primary">category</div>
      <form className="w-full filter gap-2 mb-2">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <input className="btn btn-square" onClick={() => setCategoryId(undefined)} type="reset" value="×" />
          {categories?.map((category) => (
            <input
              key={category.name}
              onClick={() => setCategoryId(category.id)}
              className="btn btn-secondary"
              type="radio"
              name="categories"
              aria-label={category.name}
            />
          ))}
        </div>
      </form>
      <div className="w-full divider divider-primary mb-4"></div>
      {isPending && (
        <span className="loading loading-bars w-[10%] text-primary"></span>
      )}
      {isError && (
        <ErrorPage
          errorStatusCode={getErrorStatusCode()}
          reason={getErrorMessage()}
          refetch={refetch}
          isFetching={isFetching}
        />
      )}
      <section className="max-w-7xl min-h-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {filteredTechnologies ? 
          filteredTechnologies.map((technology) => 
            <Card
              key={technology.name}
              title={technology.name}
              description={technology.shortDescription}
              logo={LOGO_REGISTRY[technology.slug]}
              buttonText={"Details"}
            />
          )
          : 
          technologies && technologies.map((technology) => 
            <Card
              key={technology.name}
              title={technology.name}
              description={technology.shortDescription}
              logo={LOGO_REGISTRY[technology.slug]}
              buttonText={"Details"}
            />
          )
        }
      </section>
    </main>
  );
};

export default Technologies;
