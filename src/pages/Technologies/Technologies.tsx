import { ChangeEvent, FC, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useTechnologies } from "../../api/queries/technologies";
import { LOGO_REGISTRY } from "../../data/logoRegistry";
import ErrorPage from "../ErrorPage/ErrorPage";
import { AxiosError } from "axios";
import { useCategories } from "../../api/queries/categories";

const Technologies: FC = () => {
  const [categoryId, setCategoryId] = useState<string>();
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

  const handleCategorySelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(event.target.value);
  }

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col justify-center items-center">
      <select
        defaultValue="Filter by category"
        className="select select-primary mb-4"
        onChange={handleCategorySelect}
      >
        <option disabled={true}>Filter by category</option>
        {categories?.map((category) => (
          <option value={category.id}>{category.name}</option>
        ))}
      </select>
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
        {technologies &&
          technologies.map((technology) => {
            return (
              <Card
                key={technology.name}
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
