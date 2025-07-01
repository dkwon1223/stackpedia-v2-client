import { ArrowLeftIcon, ArrowPathIcon, ExclamationTriangleIcon, HomeIcon, HomeModernIcon, LockClosedIcon, MagnifyingGlassCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { ErrorPageProps } from "./props";
import { FC, ReactNode } from "react";

const ErrorPage: FC<ErrorPageProps> = ({
  errorStatusCode = 500,
  reason = "An unexpected error occurred",
  refetch,
  isFetching
}) => {
  const getErrorTitle = (statusCode: number): string => {
    switch (statusCode) {
      case 400:
        return "Bad Request";
      case 401:
        return "Unauthorized";
      case 403:
        return "Forbidden";
      case 404:
        return "Page Not Found";
      case 500:
        return "Internal Server Error";
      case 502:
        return "Bad Gateway";
      case 503:
        return "Service Unavailable";
      default:
        return "Something Went Wrong";
    }
  };

  const getErrorIcon = (statusCode: number): ReactNode => {
    switch (statusCode) {
      case 404:
        return <MagnifyingGlassCircleIcon height={'4rem'} />;
      case 401:
        return <LockClosedIcon height={'4rem'} />;
      case 403:
        return <LockClosedIcon height={'4rem'} />;
      case 500: 
        return <ExclamationTriangleIcon height={'4rem'} color="inherit"/>;
      case 502:
        return <ExclamationTriangleIcon height={'4rem'} />;
      case 503:
        return <ExclamationTriangleIcon height={'4rem'} />;
      default:
        return <XCircleIcon height={'4rem'} />;
    }
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-[90vh] w-full bg-base-200 flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        <div className="flex justify-center text-error">
          {getErrorIcon(errorStatusCode)}
        </div>
        
        <div className="text-8xl font-bold text-error mb-4">
          {errorStatusCode}
        </div>

        <h1 className="text-3xl font-bold text-base-content mb-4">
          {getErrorTitle(errorStatusCode)}
        </h1>

        <h2 className="text-xl text-base-content/80 mb-6">
          Sorry, something went wrong
        </h2>

        <p className="text-base-content/60 mb-8 leading-relaxed">{reason}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleGoBack} className="btn btn-neutral">
            <ArrowLeftIcon height={'1em'} />
            Go Back
          </button>
          {refetch &&
            <button onClick={refetch} className="btn btn-error" disabled={isFetching}>
              <ArrowPathIcon height={'1em'} />
              Retry
            </button>
          }
          <button onClick={handleGoHome} className="btn btn-secondary">
            <HomeIcon height={'1em'} />
            Go Home
          </button>
        </div>

        <div className="mt-8 text-sm text-base-content/40">
          If this problem persists, please{" "}
          <a href="mailto:support@yoursite.com" className="link link-primary">
            contact support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
