import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <TriangleAlertIcon className="h-12 w-12 text-red-500" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Oops! Something went wrong.
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            We're sorry, but the page you were trying to access is not
            available. Please try again later or navigate back to the homepage.
          </p>
        </div>
        <div className="">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:!bg-white hover:!text-black focus:outline-none duration-300 ease-in-out"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
