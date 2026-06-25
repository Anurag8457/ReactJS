
import ComplianceChart from "../components/charts/ComplianceChart";
import DriftTable from "../components/tables/DriftTable";
import { useState, useEffect } from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { fetchDriftReports, fetchDriftReportDetails } from '../Services/DriftReportsApi';
import {
  Card,
  Button,
  FormControl,
  Select,
  MenuItem,
  TextField,
  CircularProgress,
  Skeleton,
} from "@mui/material";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";



export default function Reports() {

  const [loading, setLoading] = useState(true)
  const [reports, setdriftReports] = useState([]);
  const [monthlyCompliance, setMonthlyCompliance] = useState([]);
  const [reportDetails, setdriftReportsDetails] = useState([]);

  async function downloadCSV() {
    try {
      const dataResponse = await fetchDriftReportDetails();
      const data = dataResponse?.data || [];
      if (!data.length) {
        alert("No data to download");
        return;
      }

      const headers = Object.keys(data[0]);
      const csvRows = [];

      csvRows.push(headers.join(','));
      for (const row of data) {
        const values = headers.map(header => {
          const escaped = ('' + row[header]).replace(/"/g, '""'); // Escape quotes
          return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
      }

      const csvString = csvRows.join('\n');
      const blob = new Blob([csvString], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.csv';
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CSV", error);
      alert("Failed to download CSV");
    }
  }
  async function downloadPDF() {
    try {
      const dataResponse = await fetchDriftReportDetails();
      const data = dataResponse?.data || [];
      if (!data.length) {
        alert("No data to download");
        return;
      }

      const doc = new jsPDF();

      const headers = Object.keys(data[0]);
      const columns = headers.map(header => ({ header, dataKey: header }));

      const rows = data.map(row => {
        const obj = {};
        headers.forEach(h => {
          obj[h] = row[h] ?? '';
        });
        return obj;
      });

      doc.text("Drift Report Data", 14, 15);

      // Note the change here — call autoTable passing doc instance and options
      autoTable(doc, {
        startY: 20,
        columns,
        body: rows,
        headStyles: { fillColor: [255, 165, 0] },
        styles: { fontSize: 8 },
      });

      doc.save("drift-report.pdf");
    } catch (error) {
      console.error("Error generating PDF", error);
      alert("Failed to download PDF");
    }
  }


  useEffect(() => {
    async function fetchAndProcessDriftReports() {
      try {
        const data = await fetchDriftReports();

        const driftData = Array.isArray(data.data) ? data.data : [];
        if (!Array.isArray(data.data)) {
          console.warn("Expected data.data to be an array", data.data);
        }

        setdriftReports(driftData); // Keep original data if needed

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // Group compliance scores by month
        const groupedByMonth = driftData.reduce((acc, item) => {
          const date = new Date(item.lastScanTime);
          if (isNaN(date)) return acc;

          const monthIndex = date.getMonth();

          if (!acc[monthIndex]) acc[monthIndex] = [];
          acc[monthIndex].push(item.complianceScore);

          return acc;
        }, {});

        // Calculate average compliance and format output
        const monthlyCompliance = Object.entries(groupedByMonth)
          .map(([monthIndex, scores]) => ({
            month: monthNames[monthIndex],
            compliance: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
          }))
          .sort((a, b) => monthNames.indexOf(a.month) - monthNames.indexOf(b.month));

        setMonthlyCompliance(monthlyCompliance);
        console.log("formatted monthly compliance", monthlyCompliance);
      } catch (error) {
        console.error("Failed to fetch or process data", error);
        setMonthlyCompliance([]);
        setdriftReports([]);
      } finally {
        setLoading(false);
      }
    }
    async function fetchDriftReportDetailsData() {
      try {
        const fetchedData = await fetchDriftReportDetails();
        console.log("report details", fetchedData);
        setdriftReportsDetails(fetchedData.data);

      } catch (error) {
        console.error("Failed to fetch or process data", error);
        setdriftReportsDetails([]);
        fetchDriftReportDetails(null);
      } finally {
        setLoading(false);
      }
    }
    fetchAndProcessDriftReports();
    fetchDriftReportDetailsData();
  }, []);
  return (
    <div>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-5xl font-bold">
            Drift Reports
          </h1>

          <p className="text-gray-500">
            Detailed analysis of drift across environments
          </p>
        </div>

        <div className="flex gap-3">

          <Button variant="outlined"
            startIcon={<InsertDriveFileIcon style={{ fontSize: 18, color: 'var(--color-gray-500)' }} />}
            sx={{
              borderRadius: "8px",
              backgroundColor: 'white',
              color: 'var(--color-gray-500)',
              borderColor: 'var(--color-gray-500)',
              fontWeight: 700
            }}
            onClick={() => downloadCSV()}
          >
            Export CSV
          </Button>

          <Button variant="outlined"
            startIcon={<InsertDriveFileIcon style={{ fontSize: 18, color: 'var(--color-gray-500)' }} />}
            sx={{
              borderRadius: "8px",
              backgroundColor: 'white',
              color: 'var(--color-gray-500)',
              borderColor: 'var(--color-gray-500)',
              fontWeight: 700
            }}
            onClick={() => downloadPDF()}
          >
            Export PDF
          </Button>

        </div>

      </div>

      {/* FILTERS */}

      <Card className="p-5 mb-6">

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-5
          gap-4
        "
        >

          <FormControl fullWidth>
            <Select defaultValue="all"
              sx={{
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--color-orange-500)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--color-orange-500)',
                }
              }}
            >
              <MenuItem value="all">
                All Environments
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <Select defaultValue="all"
              sx={{
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--color-orange-500)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--color-orange-500)',
                }
              }}>
              <MenuItem value="all">
                All Severity
              </MenuItem>
            </Select>
          </FormControl>

          {/* <FormControl fullWidth>
            <Select defaultValue="all">
              <MenuItem value="all">
                All IaC Types
              </MenuItem>
            </Select>
          </FormControl> */}

          <TextField
            type="date"
            fullWidth
            sx={{
              // Outline border color (default)
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "none",
                },
                // Border color on hover
                "&:hover fieldset": {
                  borderColor: "var(--color-orange-500)",
                },
                // Border color when focused
                "&.Mui-focused fieldset": {
                  borderColor: "var(--color-orange-500)",
                },
              }
            }}
          ></TextField>

          <Button
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: "12px",
              backgroundColor: 'var(--color-orange-500)'
            }}
          >
            Apply
          </Button>

        </div>

      </Card >

      {/* CHART */}

      < Card className="p-5 mb-6" >

        <h2 className="text-2xl font-bold mb-4">
          Compliance Trend
        </h2>

        {
          loading ? (
            <div className="h-350px flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <ComplianceChart complianceData={monthlyCompliance || []} />
          )
        }

      </Card >

      {/* TABLE */}

      < Card className="p-5" >

        {
          loading ? (
            <div className="space-y-3" >
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />
            </div>
          ) : (
            <DriftTable />
          )
        }

      </Card >

    </div >
  );
}
