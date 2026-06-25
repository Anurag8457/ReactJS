
import KPICard from "../components/cards/KPICards";
import Skeleton from "@mui/material/Skeleton"
import DriftTrendChart from "../Components/Charts/DriftTrendChart";
import SeverityChart from "../Components/Charts/SeverityChart";
import CircularProgress from "@mui/material/CircularProgress";
import CloudIcon from "@mui/icons-material/Cloud";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import axios from "axios";
import { fetchOverview, fetchDriftTrend } from '../Services/DashboardApi';
import { data } from "react-router-dom";
import { Link } from 'react-router-dom';
import AiAssistantPopup from "./AiAssistantPopup";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [responseMsg, setResponseMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [overview, setOverview] = useState([]);
  const [driftTrend, setDriftTrend] = useState([]);
  const [severityDistribution, setSeverityDistribution] = useState([]);
  const [settings, setGovernanceSettings] = useState([]);

  useEffect(() => {
    async function fetchOverviewData() {
      setLoading(true);
      try {
        const fetchedData = await fetchOverview();
        console.log("overview", fetchedData);
        setOverview(fetchedData.data);

      } catch (error) {
        console.error("Failed to fetch or process data", error);
        setOverview([]);
        fetchOverview(null);
      } finally {
        setLoading(false);
      }
    }
    async function fetchDriftTrendData() {
      try {
        const data = await fetchDriftTrend();
        console.log("data", data);

        const severity = data?.data;

        const severityDistributionArray = severity?.severityDistribution
          ? Object.entries(severity.severityDistribution).map(([key, value]) => {
            const keyStr = String(key || '');
            return {
              name: keyStr.charAt(0).toUpperCase() + keyStr.slice(1),
              value,
            };
          })
          : [];

        console.log("sev", severityDistributionArray);
        setSeverityDistribution(severityDistributionArray);

        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const daygraph = data.data.driftVolume.map(item => {
          const dateObj = new Date(item.date);
          const day = dayNames[dateObj.getDay()]; // getDay() returns 0-6 (Sun to Sat)
          return {
            day: day,
            drift: item.count,
          };
        });

        setDriftTrend(daygraph);

      } catch (error) {
        console.error("Failed to fetch or process data", error);
        setSeverityDistribution([]);
        setDriftTrend([]);
      } finally {
        setLoading(false);
      }
    }
    fetchOverviewData();
    fetchDriftTrendData();

  }, []);

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Executive Overview
      </h1>

      {/* KPI CARDS */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
      >
        <Link to="/environment">
          <KPICard
            title="Managed Environments"
            value={overview ? overview.healthScore : ''}
            icon={<CloudIcon />}
            color="#FFE9DD"
          />
        </Link>

        <Link to="/reports">
          <KPICard
            title="Active Drift Issues"
            value={overview ? overview.activeDrifts : ''}
            icon={<WarningIcon />}
            color="#FFE2E2"
          />
        </Link>

        <Link to="/governance">
          <KPICard
            title="Compliance Score"
            value={overview ? overview.complianceScore + "%" : ''}
            icon={<CheckCircleIcon />}
            color="#E8FFF0"
          />
        </Link>

        <Link to="/ai-insights">
          <KPICard
            title="Mean Resolution Time"
            value={overview ? overview.avgResolutionTimeHours : ''}
            icon={<AccessTimeIcon />}
            color="#E6F0FF"
          />
        </Link>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="h-350px flex justify-center items-center" >
          <CircularProgress sx={{
            color: '#FF530D', // your custom orange color
          }}
          />
        </div>
      )}

      {/* CHARTS */}

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-6
        mt-8
      "
      >

        <Card
          className="p-5"
        >
          <h2 className="text-2xl font-bold mb-4">
            Drift Trend
          </h2>

          <DriftTrendChart driftData={driftTrend} />
        </Card>

        <Card
          className="p-5"
        >
          <h2 className="text-2xl font-bold mb-4">
            Severity Distribution
          </h2>

          <SeverityChart severityData={severityDistribution} />
        </Card>
        <AiAssistantPopup />

      </div>

    </div>
  );
}



