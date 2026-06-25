import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_PROD_URL;
const CODE = import.meta.env.VITE_APP_CODE;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;
const SUBSCRIPTION_ID = import.meta.env.VITE_SUBSCRIPTION_ID;
const RANGE = import.meta.env.VITE_RANGE;

export const fetchOverview = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/dashboard/overview`, {
            params: {
                code: CODE,
                tenantId: TENANT_ID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching overview:', error);
    }
};

export const fetchDriftTrend = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/dashboard/trends`, {
             params: {
                code: CODE,
                subscriptionId: SUBSCRIPTION_ID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("drift", response.data);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching drift trend:', error);
    }
};

// export const fetchSeverityDistribution = async () => {
//     try {
//         const response = await axios.get('${API_BASE_URL}/api/dashboard/severity-distribution');
//         console.log("severity", response.data);
//         return response.data;
//     }
//     catch (error) {
//         console.error('Error fetching severity distribution:', error)
//     }
// };

// export const fetchScanList = async () => {
//     try {
//         const response = await axios.get('${API_BASE_URL}/api/dashboard/scan/list')
//         console.log("scan", response.data);
//         return response.data;
//     }
//     catch (error) {
//         console.error('Error fetching scan list:', error);
//     }
// };

// export const fetchDriftReports = async () => {
//     try {
//         const response = await axios.get('${API_BASE_URL}/api/reports/drift');
//         console.log("drift report", response.data);
//         return response.data;
//     }
//     catch (error) {
//         console.error('Error fetching drift reports:', error);
//     }
// };

// export const fetchEnvironment = async () => {
//     try {
//         const response = await axios.get('${API_BASE_URL}/api/environments');
//         console.log("fetch environment", response.data);
//         return response.data;
//     }
//     catch (error) {
//         console.error('Error fetching drift reports:', error);
//     }
// };

// export const createEnvironment = async () => {
//     const requestBody = {
//         "environmentId": "env-91011",
//         "name": "QA Environment",
//         "status": "Active",
//         "createdAt": "2026-06-12T09:00:00Z"
//     };
//     try {
//         const response = await axios.post('${API_BASE_URL}/api/environments', requestBody);
//         setResponseMsg(`Environment created with ID: ${response.data.environmentId}`);
//     }
//     catch (error) {
//         setErrorMsg(
//             error.response?.data?.error || 'Failed to create environment. Please try again.'
//         );
//     }
// };

// export const fetchAiInsights = async () => {
//     try {
//         const response = await axios.get('${API_BASE_URL}/api/ai-insights');
//         console.log("ai insights", response.data);
//         return response.data;
//     }
//     catch (error) {
//         console.error('Error fetching Ai Insights:', error);
//     }
// };

// export const fetchGovernanceSettings = async () => {
//     try {
//         const response = await axios.get('${API_BASE_URL}/api/governance/settings');
//         sconsole.log("governance settings", response.data);
//         return response.data;
//     }
//     catch (error) {
//         console.error('Error fetching Ai Insights:', error);
//     }
// };

// // Trigger Run Scan
// export const runScan = async () => {
//     try {
//         setLoading(true);
//         await axios.post('/api/scan/run');
//         alert('Scan triggered successfully');
//         // Optionally, refresh overview after scan trigger
//         fetchOverview();
//     } catch (error) {
//         console.error('Error triggering scan:', error);
//         alert('Failed to trigger scan');
//     } finally {
//         setLoading(false);
//     }
// };
// // Export dashboard data (CSV or PDF)
// export const exportDashboard = async () => {
//     try {
//         setExporting(true);
//         const response = await axios.get('${API_BASE_URL}/api/dashboard/export', {
//             responseType: 'blob', // important for file downloads
//         });
//         // Create a blob link to download
//         const url = window.URL.createObjectURL(new Blob([response.data]));
//         const link = document.createElement('a');
//         link.href = url;

//         // Assuming server sends filename via Content-Disposition
//         const disposition = response.headers['content-disposition'];
//         let fileName = 'dashboard_export';
//         if (disposition) {
//             const filenameMatch = disposition.match(/filename="?(.+)"?/);
//             if (filenameMatch.length === 2) {
//                 fileName = filenameMatch[1];
//             }
//         }
//         link.setAttribute('download', fileName);
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//     } catch (error) {
//         console.error('Error exporting dashboard:', error);
//         alert('Failed to export dashboard');
//     } finally {
//         setExporting(false);
//     }
// };






