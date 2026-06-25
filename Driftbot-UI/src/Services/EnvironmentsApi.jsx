import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_PROD_URL;
const CODE = import.meta.env.VITE_APP_CODE;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;
const SUBSCRIPTION_ID = import.meta.env.VITE_SUBSCRIPTION_ID;
const severityLevel = import.meta.env.VITE_SEVERITYLEVEL;
const TimeRange = import.meta.env.VITE_TIMERANGE;

export const fetchDriftReports = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/reports/drifts/tenant`, {
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

export const fetchDriftReportDetails = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/reports/drifts/subscription/${SUBSCRIPTION_ID}`,
            {
                params: {
                    code: CODE,
                    tenantId: TENANT_ID,
                    severityLevel: severityLevel,
                    timeRange: TimeRange,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    }
    catch (error) {
        console.error('Error fetching drift trend:', error);
    }
};







