import { NavLink, useRouteError } from "react-router";

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Opps! Something went wrong.</h1>
      <p>{error.data}</p>
      <NavLink to="/">Home</NavLink>
    </>
  );
}

export default ErrorBoundary;
