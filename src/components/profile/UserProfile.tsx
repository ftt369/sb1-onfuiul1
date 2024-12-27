import React from 'react';
import { ProfileHeader } from './ProfileHeader';
import { ContactInfo } from './ContactInfo';
import { PreferencesSection } from './PreferencesSection';
import { useUserProfile } from '../../hooks/useUserProfile';

export function UserProfile() {
  const { profile, updateProfile } = useUserProfile();

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <ProfileHeader profile={profile} />
      <div className="space-y-4">
        <ContactInfo profile={profile} />
        <PreferencesSection 
          profile={profile}
          onUpdatePreferences={updateProfile}
        />
      </div>
    </div>
  );
}