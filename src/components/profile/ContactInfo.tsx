import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { UserProfile } from '../../types/user';

interface ContactInfoProps {
  profile: UserProfile;
}

export function ContactInfo({ profile }: ContactInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Contact Information</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <Mail className="w-4 h-4 text-gray-400 mr-2" />
          <span className="text-sm text-gray-600">{profile.email}</span>
        </div>
        {profile.phoneNumber && (
          <div className="flex items-center">
            <Phone className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">{profile.phoneNumber}</span>
          </div>
        )}
      </div>
    </div>
  );
}