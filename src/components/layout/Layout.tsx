import React from "react";

interface HeaderProps {
  changePage: (page: string) => void;
  title?: string;
  children?: React.ReactNode;
}

const PageLayout: React.FC<HeaderProps> = ({changePage, title, children}) => {
  return (
    <div className={`container p-4 is-fullheight is-flex is-flex-direction-column is-gap-4`}>
      <header className={`header`}>
        <nav className={`navbar`}>
          <div className={`navbar-start is-hidden-touch`}>
            <button className="button is-light is-outlined" onClick={() => changePage('frontPage')}>
              <span>Back</span>
            </button>
          </div>
          <div className={`navbar-center is-flex is-align-items-center`}>
        <h1 className={`title`}>{title}</h1>
          </div>
          <div className={`navbar-end is-hidden-touch`}>
          </div>
        </nav>
      </header>
      <div className={`is-flex-grow-1 is-flex is-flex-direction-column is-gap-4`}>
        {children}
      </div>
    </div>
  );
}

export default PageLayout;