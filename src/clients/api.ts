import axios from 'axios'



export const apiClient = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzBiN2NmY2E2NzEzNjIzY2VhNWNjOSIsInVzZXJuYW1lIjoiYWJlIiwiZW1haWwiOiJhYmVAZ21haWwuY29tIiwicm9sZSI6InVzZXIifSwiaWF0IjoxNzY0OTU2MjkxLCJleHAiOjE3NjQ5NjM0OTF9.P6WN68BTrBlzx3BbynPMJAahxAHFA2C7F4_3-CwbkmA"
    }
});