
import { Card } from "@mui/material";
import GovernanceChart from "../components/charts/GovernanceChart";
import GovernanceTable from "../components/tables/GovernanceTable";
import axios from "axios";
import { useState, useEffect } from "react";
import { fetchGovernanceOverview, fetchGovernanceSubscriptions, fetchGovernanceRisk } from '../Services/GovernanceApi';


export default function Governance() {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const [monthlyCompliance, setMonthlyCompliance] = useState([]);
  const [governanceOverview, setGovernanceOverview] = useState(null);
  const [governanceSubscriptions, setGovernanceSubscriptions] = useState(null);
  const [governanceRisk, setGovernanceRisk] = useState(null);

  useEffect(() => {
    async function fetchAndProcessData() {
      try {
        const fetchedData = await fetchGovernanceSubscriptions();

        const dataArray = Array.isArray(fetchedData.data) ? fetchedData.data : [];
        if (!Array.isArray(fetchedData.data)) {
          console.warn("Expected data.data to be an array", fetchedData.data);
        }
        setGovernanceSubscriptions(fetchedData.data); // Keep original regardless

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const grouped = dataArray.reduce((acc, item) => {
          const date = new Date(item.lastScanTime);
          if (isNaN(date)) return acc;

          const monthIndex = date.getMonth();

          if (!acc[monthIndex]) acc[monthIndex] = [];
          acc[monthIndex].push(item.complianceScore);

          return acc;
        }, {});

        const formatted = Object.entries(grouped).map(([monthIndex, scores]) => ({
          month: monthNames[monthIndex],
          score: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
        }));

        setMonthlyCompliance(formatted);
        console.log("formatted", formatted);
      } catch (error) {
        console.error("Failed to fetch or process data", error);
        setMonthlyCompliance([]);
        fetchGovernanceSubscriptions(null);
      } finally {
        setLoading(false);
      }
    }
    async function fetchGovernanceOverviewData() {
      try {
        const fetchedData = await fetchGovernanceOverview();
        console.log("governance overview", fetchedData);
        setGovernanceOverview(fetchedData.data);

      } catch (error) {
        console.error("Failed to fetch or process data", error);
        setGovernanceOverview([]);
        fetchGovernanceOverview(null);
      } finally {
        setLoading(false);
      }
    }
    async function fetchGovernanceRiskData() {
      try {
        const fetchedData = await fetchGovernanceRisk();
        console.log("governance risk", fetchedData);
        setGovernanceRisk(fetchedData.data);

      } catch (error) {
        console.error("Failed to fetch or process data", error);
        setGovernanceRisk([]);
        fetchGovernanceRisk(null);
      } finally {
        setLoading(false);
      }
    }
    fetchAndProcessData();
    fetchGovernanceOverviewData();
    fetchGovernanceRiskData();

  }, []);

  //  const fetchGovernanceOverview = async () => {
  //   try {
  //     const response = await axios.get('/api/governance/overview');
  //     setGovernanceOverview(response.data);
  //   } catch (error) {
  //     console.error('Error fetching overview:', error);
  //   }
  // };

  // const fetchPolicyCompliance = async () => {
  //   try {
  //     const response = await axios.get('/api/governance/policy-compliance');
  //     setPolicyCompliance(response.data);
  //   } catch (error) {
  //     console.error('Error fetching overview:', error);
  //   }
  // };

  //  const fetchActiveViolation = async () => {
  //   try {
  //     const response = await axios.get('/api/governance/active-violations');
  //     setActiveViolations(response.data);
  //   } catch (error) {
  //     console.error('Error fetching overview:', error);
  //   }
  // };

  // const createRemediationAction = async () => {
  //   const requestBody = {
  //     "remediationComment": "Auto-remediation triggered via UI"
  //   };
  //   try {
  //     const response = await axios.post('/api/governance/violation/{id}/remediate', requestBody);
  //     setResponseMsg(response.message);
  //     setremediationData(response.data)
  //   } catch (error) {
  //    setErrorMsg(
  //       error.response?.data?.error || 'Failed to create Remediation action. Please try again.'
  //     );
  //   }
  // };

  // const fetchGovernancePolicies = async () => {
  //   try {
  //     const response = await axios.get('/api/governance/policies');
  //     setGovernancePolicies(response.data);
  //   } catch (error) {
  //     console.error('Error fetching overview:', error);
  //   }
  // };

  // const fetchGovernancePolicyById = async () => {
  //   try {
  //     const response = await axios.get('/api/governance/policy/{id}');
  //     setGovernancePolicyByID(response.data);
  //   } catch (error) {
  //     console.error('Error fetching overview:', error);
  //   }
  // };

  //  const createGovernancePolicy = async () => {
  //   const requestBody = {
  //     "name": "Require MFA for Admin Access",
  //     "category": "Identity",
  //     "description": "Ensure MFA is enabled for all admin accounts",
  //     "rules": [
  //       {
  //         "type": "enforce",
  //         "resourceType": "User",
  //         "condition": "mfa_enabled == true"
  //       }
  //     ],
  //     "enabled": true
  //   };
  //   try {
  //     const response = await axios.post('/api/governance/policy', requestBody);
  //     setResponseMsg(response.message);
  //     setGovernancePolicy(response.data)
  //   } catch (error) {
  //    setErrorMsg(
  //       error.response?.data?.error || 'Failed to create Governance Policy. Please try again.'
  //     );
  //   }
  // };

  // const updateGovernancePolicy = async () => {
  //   const requestBody = {
  //     "name": "Require MFA for Admin & Power Users",
  //     "description": "Ensure MFA is enabled for all admin and power users",
  //     "enabled": true
  //   }
  //   try {
  //     const response = await axios.put('/api/governance/policy/{id}', requestBody);
  //     setResponseMsg(response.message);
  //     setupdatedPolicy(response.data)
  //   } catch (error) {
  //    setErrorMsg(
  //       error.response?.data?.error || 'Failed to create Governance Policy. Please try again.'
  //     );
  //   }
  // };

  //  const deletePolicyById = async () => {
  //   try {
  //     const response = await axios.delete('/api/governance/policy/{id}');
  //     setResponseMsg(response.message);
  //   } catch (error) {
  //     console.error('Error deleting policy:', error);
  //   }
  // };

  return (
    <div>

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-5xl font-bold">
          Governance
        </h1>

        <p className="text-gray-500 mt-2">
          Compliance monitoring and policy enforcement
        </p>

      </div>

      {/* KPI SECTION */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-8
      "
      >

        <Card className="p-6">
          <p className="text-gray-500">
            Compliance Score
          </p>

          <h2 className="text-4xl font-bold text-green-600">
            {governanceOverview ? governanceOverview.complianceScore+"%" : "NA"}
          </h2>
        </Card>

        <Card className="p-6">
          <p className="text-gray-500">
            Active Violations
          </p>

          <h2 className="text-4xl font-bold text-red-500">
            {governanceOverview ? governanceOverview.activeDrifts : "NA"}
          </h2>
        </Card>

        <Card className="p-6">
          <p className="text-gray-500">
            Policies Monitored
          </p>

          <h2 className="text-4xl font-bold">
            47
          </h2>
        </Card>

        <Card className="p-6">
          <p className="text-gray-500">
            Resolved This Month
          </p>

          <h2 className="text-4xl font-bold text-blue-600">
            23
          </h2>
        </Card>

      </div>

      {/* COMPLIANCE TREND */}

      <Card className="p-6 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Governance Trend
        </h2>

        <GovernanceChart governanceData={monthlyCompliance} />

      </Card>

      {/* POLICY TABLE */}

      <Card className="p-6 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Policy Violations
        </h2>

        <GovernanceTable governanceTableData={governanceRisk} />

      </Card>

      {/* POLICY SUMMARY */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      "
      >

        <Card className="p-6">

          <h3 className="font-bold mb-2">
            Security Policies
          </h3>

          <p className="text-green-600 text-3xl font-bold">
            96%
          </p>

        </Card>

        <Card className="p-6">

          <h3 className="font-bold mb-2">
            Tagging Policies
          </h3>

          <p className="text-yellow-600 text-3xl font-bold">
            82%
          </p>

        </Card>

        <Card className="p-6">

          <h3 className="font-bold mb-2">
            Cost Policies
          </h3>

          <p className="text-green-600 text-3xl font-bold">
            91%
          </p>

        </Card>

      </div>

    </div>
  );
}
