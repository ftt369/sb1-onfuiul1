import React from 'react';
import { User } from 'lucide-react';
import { UserProfile } from '../../types/user';

interface ProfileHeaderProps {
  profile: UserProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="bg-blue-100 p-3 rounded-full">
        <User className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          {profile.firstName} {profile.lastName}
        </h2>
        <p className="text-sm text-gray-500">Case #{profile.caseNumber}</p>
      </div>
    </div>
  );
}