import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError() as { statusText: string, message: string };
    console.error(error);

    return (
        <div className="error-pg">
            <h1 className="error-pg__heading">Oops!</h1>
            <p className="error-pg__message">Sorry, an unexpected error has occurred.</p>
            <p className="error-pg__error">
              <i></i>
              <i>{error.statusText !== '' ? error.statusText : (error.message !== '' ? error.message : null)}</i>
            </p>
        </div>
    );
}

export default ErrorPage;
