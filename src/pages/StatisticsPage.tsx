import React from 'react';
import {Game} from "../types/Game.ts";
import Layout from "../components/layout/Layout.tsx";

interface StatisticsPageProps {
  changePage: (page: string) => void;
  games?: Game[]
}

const StatisticsPage: React.FC<StatisticsPageProps> = ({changePage, games}) => {
  return (
    <Layout changePage={changePage} title="Statistics">
      <div className="box">
        <h2 className="subtitle">Games Played</h2>
        <p>{games?.length}</p>
      </div>
    </Layout>
  )
}

export default StatisticsPage;