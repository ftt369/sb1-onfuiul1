import { useState, useCallback } from 'react';
import { UserProfile } from '../types/user';

// Mock initial profile data - replace with API call in production
const mockProfile: UserProfile = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  role: 'pro-per-applicant',
  caseNumber: 'ADJ12345678',
  phoneNumber: '(555) 123-4567',
  preferredLanguage: 'en',
  notificationPreferences: {
    email: true,
    sms: false,
  },
};

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(mockProfile);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile(current => ({
      ...current,
      ...updates,
    }));
    // In production, make API call to update profile
  }, []);

  return {
    profile,
    updateProfile,
  };
}