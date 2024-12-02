import React from 'react';
import Layout from "../components/layout/Layout.tsx";
import ThemeSwitcher from "../components/themeswitcher/ThemeSwitcher.tsx";

interface Props {
  changePage: (page: string) => void;
}

const SettingsPage: React.FC<Props> = ({changePage}) => {
  return (
    <Layout changePage={changePage} title="Settings">
      <div className={`field`}>
        <h2 className={`subtitle`}>Theme</h2>
        <div className={`control`}>
          <ThemeSwitcher />
        </div>
      </div>
    </Layout>
  )
}

export default SettingsPage;