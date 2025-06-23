import { ChangeEvent, FC, useState } from "react";
import Card from "../../components/Card/Card";
import { useTechnologies } from "../../api/queries/technologies";
import { LOGO_REGISTRY } from "../../data/logoRegistry";
import ErrorPage from "../ErrorPage/ErrorPage";
import { AxiosError } from "axios";
import { useCategories } from "../../api/queries/categories";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router";

const Technologies: FC = () => {
  const navigate = useNavigate();
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
  };

  const filteredTechnologies = technologies?.filter((tech) => {
    return tech.name.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col justify-start items-center">
      <search className="w-full flex justify-center items-center gap-2 h-[4em]">
        <div className="flex justify-center">
          <label className="input">
            <MagnifyingGlassIcon height={"1em"} />
            <input
              type="search"
              className="grow text-primary-content"
              placeholder="Search by name"
              onChange={handleSearch}
            />
          </label>
        </div>
        <div className="divider divider-horizontal divider-primary text-primary text-xs">Filter</div>
        <form>
          <div className="flex items-center justify-center">
            <select
              className="select select-bordered w-full max-w-xs"
              value={categoryId || ""}
              onChange={(e) => setCategoryId(e.target.value || undefined)}
            >
              <option value="">All Categories</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </search>
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
        {filteredTechnologies
          ? filteredTechnologies.map((technology) => (
              <Card
                key={technology.name}
                title={technology.name}
                description={technology.shortDescription}
                logo={LOGO_REGISTRY[technology.slug]}
                buttonText={"Details"}
                onButtonClick={() => navigate(`/technologies/${technology.slug}`)}
              />
            ))
          : technologies &&
            technologies.map((technology) => (
              <Card
                key={technology.name}
                title={technology.name}
                description={technology.shortDescription}
                logo={LOGO_REGISTRY[technology.slug]}
                buttonText={"Details"}
                onButtonClick={() => navigate(`/technologies/${technology.slug}`)}
              />
            ))}
      </section>
    </main>
  );
};

export default Technologies;
