
import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_PROD_URL;
const CODE = import.meta.env.VITE_APP_CODE;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;
const SUBSCRIPTION_ID = import.meta.env.VITE_SUBSCRIPTION_ID;

export const runScan = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/scan/run`, {
            params: {
                code: CODE,
                tenantId: TENANT_ID,
                subscriptionId: SUBSCRIPTION_ID
            },
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "iacTypes": ["Terraform", "Bicep", "ARM"],
                "ignoreTransientDrift": true
            }
        });
        console.log("run scan data", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching overview:', error);
    }
};

 







