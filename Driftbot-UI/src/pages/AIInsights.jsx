
import AIInsightCard from "../components/cards/AIInsightCard";
import { Card } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { fetchAiInsights, fetchAiInsightsById} from '../Services/AiInsightsApi';


export default function AIInsights() {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const [aiinsights, setAiInsights] = useState(null);

  const [users, setUsers] = useState({});

  useEffect(() => {

    async function fetchAiInsightsData() {
      try {
        const fetchedData = await fetchAiInsights();
        console.log("ai insights", fetchedData);
        setAiInsights(fetchedData.data);

      } catch (error) {
        console.error("Failed to fetch or process data", error);
        setAiInsights([]);
        fetchAiInsights(null);
      } finally {
        setLoading(false);
      }
    }

    fetchAiInsightsData();

  }, []);

  return (
    <div>

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-5xl font-bold">
          AI Insights
        </h1>

        <p className="text-gray-500 mt-2">
          AI-powered analysis and remediation
          recommendations
        </p>

      </div>

      {/* SUMMARY */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-5
        mb-8
      "
      >

        <Card className="p-6">

          <p className="text-gray-500">
            Recommendations
          </p>

          <h2 className="text-4xl font-bold">
            14
          </h2>

        </Card>

        <Card className="p-6">

          <p className="text-gray-500">
            Critical Risks
          </p>

          <h2 className="text-4xl font-bold text-red-500">
            3
          </h2>

        </Card>

        <Card className="p-6">

          <p className="text-gray-500">
            Avg Confidence
          </p>

          <h2 className="text-4xl font-bold text-green-600">
            92%
          </h2>

        </Card>

      </div>

      {/* AI CARDS */}

      <div className="space-y-6">

        <AIInsightCard
          title="Public SSH Exposure"
          severity="Critical"
          confidence={98}
          explanation="
          Network Security Group allows
          SSH access from the internet.
          "
          recommendation="
          Restrict SSH access to approved
          corporate IP ranges.
          "
        />

        <AIInsightCard
          title="Storage Account Public Access"
          severity="High"
          confidence={94}
          explanation="
          Storage account permits
          anonymous access.
          "
          recommendation="
          Disable public access and
          enforce private endpoints.
          "
        />

        <AIInsightCard
          title="Tagging Policy Drift"
          severity="Low"
          confidence={89}
          explanation="
          Resource group missing
          required governance tags.
          "
          recommendation="
          Apply standard ownership
          and cost-center tags.
          "
        />

      </div>

    </div>
  );
}
