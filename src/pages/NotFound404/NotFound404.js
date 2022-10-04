import { useRouteError } from 'react-router-dom';

function NotFound404() {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);
  return <div>This is NotFound404</div>;
}

export default NotFound404;
