import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_PROD_URL;
const CODE = import.meta.env.VITE_APP_CODE;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;
const SUBSCRIPTION_ID = import.meta.env.VITE_SUBSCRIPTION_ID;

export const fetchGovernanceOverview = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/governance/overview`, {
            params: {
                code: CODE,
                tenantId: TENANT_ID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("overview", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching overview:', error);
    }
};

export const fetchGovernanceSubscriptions= async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/governance/subscriptions`, {
             params: {
                code: CODE,
                tenantId: TENANT_ID
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

export const fetchGovernanceRisk= async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/governance/risk`, {
             params: {
                code: CODE,
                tenantId: TENANT_ID,
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







