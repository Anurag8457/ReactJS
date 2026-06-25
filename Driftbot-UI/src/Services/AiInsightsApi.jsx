import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_PROD_URL;
const CODE = import.meta.env.VITE_APP_CODE;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;
const SUBSCRIPTION_ID = import.meta.env.VITE_SUBSCRIPTION_ID;

export const fetchAiInsights = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/ai/insights`, {
            params: {
                code: CODE,
                tenantId: TENANT_ID,
                subscriptionId: SUBSCRIPTION_ID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("aiinsights", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching overview:', error);
    }
};

export const fetchAiInsightsById= async () => {
    var insightId = '';
    try {
        const response = await axios.get('${API_BASE_URL}/api/ai/insights', {
             params: {
                insightId: insightId,
                code: CODE,
                tenantId: TENANT_ID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("aiinsightsbyid", response.data);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching drift trend:', error);
    }
};

