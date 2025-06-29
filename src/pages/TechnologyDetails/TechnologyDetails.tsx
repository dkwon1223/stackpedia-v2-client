import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useTechnology } from "../../api/queries/technologies";
import { AxiosError } from "axios";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useTheme } from "../../context/ThemeContext";
import { LOGO_REGISTRY } from "../../data/logoRegistry";
import { LogoConfig } from "../../model/types";
import TechnologyDefaultImage from "../../assets/logos/technology-default.png";
import ReactMarkdown from "react-markdown";

const TechnologyDetails: FC = () => {
  const { technologySlug } = useParams();
  const [logo, setLogo] = useState<LogoConfig>();
  const { theme } = useTheme();
  const {
    data: technology,
    isPending,
    isError,
    error,
    isFetching,
    refetch,
  } = useTechnology(technologySlug);

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
        `Failed to load technology: ${technologySlug}`
      );
    }
    return `Failed to load technology: ${technologySlug}`;
  };

  useEffect(() => {
    if (technologySlug) {
      setLogo(LOGO_REGISTRY[technologySlug]);
    }
  }, [technologySlug]);

  if (isPending) {
    return (
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col justify-start items-center bg-base-200">
        <div className="flex w-[80%] h-screen flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="skeleton h-[10em] w-[10em] shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-[2em] w-[12em]"></div>
              <div className="skeleton h-[4em] w-[18em]"></div>
            </div>
          </div>
          <div className="skeleton h-[20em] w-full"></div>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col justify-start items-center bg-base-200">
        <ErrorPage
          errorStatusCode={getErrorStatusCode()}
          reason={getErrorMessage()}
          refetch={refetch}
          isFetching={isFetching}
        />
      </main>
    );
  }

  return (
    <main className="w-full px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col justify-start items-center bg-base-200">
      <section className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <img
            src={
              (theme == "darkbub" && logo?.dark ? logo.dark : logo?.image) ||
              TechnologyDefaultImage
            }
            className="w-[10em] h-[10em] object-contain mb-6"
            alt={logo?.alt}
          />
          <h1 className="text-4xl font-bold mb-2">{technology?.name}</h1>
          <p className="text-xl text-base-content/70 mb-4">
            {technology?.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technology?.categories?.map((category) => (
              <div key={category.id} className="badge badge-primary badge-lg">
                {category.name}
              </div>
            ))}
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-base-300 shadow-lg mb-6">
          <div className="card-body">
            <h2 className="card-title">About</h2>
            <ReactMarkdown>
              {technology?.description}
            </ReactMarkdown>
          </div>
        </div>
        <div className="card bg-base-100 border-2 border-base-300 shadow-lg">
          <div className="card-body">
            <h2 className="card-title mb-4">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {technology?.websiteUrl && (
                <a
                  href={technology?.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Official Website
                </a>
              )}

              {technology?.documentationUrl && (
                <a
                  href={technology?.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Documentation
                </a>
              )}

              {technology?.githubUrl && (
                <a
                  href={technology?.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechnologyDetails;
