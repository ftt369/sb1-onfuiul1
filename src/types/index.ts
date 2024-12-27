export type UserRole = 
  | 'applicant-attorney'
  | 'defense-attorney'
  | 'pro-per-applicant'
  | 'lien-claimant'
  | 'insurance-manager';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

export interface DashboardMetric {
  label: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}