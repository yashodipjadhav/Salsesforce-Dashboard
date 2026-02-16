import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import DashboardHeader from "../components/DashboardHeader"; 
import GaugeChart from "../components/GaugeChart";
import DonutChart from "../components/DonutChart";
import PipelineChart from "../components/PipelineChart";
import ForecastChart from "../components/ForecastChart";
import Leaderboard from "../components/Leaderboard";
import TopAccountsChart from "../components/TopAccountsChart";
import Header from "../components/Header";

import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    
    <div className="header-placeholder">
      <Header />
    <div className="dashboard">
      <Navbar />

      <div className="content">
        <div className="main">
          {/* Missing Header Section Added Here */}
          <DashboardHeader />

          <div className="grid">
            <Card title="My Closed Buisness">
              <GaugeChart />
            </Card>

            <Card title="My Pipeline">
              <PipelineChart />
            </Card>

            <Card title="My Activities">
              <DonutChart />
            </Card>

            <Card title="My Top Accounts">
              <TopAccountsChart />
            </Card>

            <Card title="My Forecast">
              <ForecastChart />
            </Card>

            <Card title="Team Leaderboard">
              <Leaderboard />
            </Card>
          </div>

        
        </div>

        <Sidebar />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;