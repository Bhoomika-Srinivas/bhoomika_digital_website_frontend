export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000',
  AWS_REGION: import.meta.env.VITE_AWS_REGION ?? 'ap-south-1',
  APP_NAME: 'Bhoomika Digital',
} as const;
