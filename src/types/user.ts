export type UserRole = 
  | 'applicant-attorney'
  | 'defense-attorney'
  | 'pro-per-applicant'
  | 'lien-claimant'
  | 'insurance-manager';

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  caseNumber?: string;
  phoneNumber?: string;
  preferredLanguage: string;
  notificationPreferences: {
    email: boolean;
    sms: boolean;
  };
}