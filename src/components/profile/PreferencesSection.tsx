import React from 'react';
import { Bell, Globe } from 'lucide-react';
import { UserProfile } from '../../types/user';

interface PreferencesSectionProps {
  profile: UserProfile;
  onUpdatePreferences: (preferences: Partial<UserProfile>) => void;
}

export function PreferencesSection({ profile, onUpdatePreferences }: PreferencesSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Preferences</h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center mb-2">
            <Globe className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">Preferred Language</span>
          </div>
          <select
            value={profile.preferredLanguage}
            onChange={(e) => onUpdatePreferences({ preferredLanguage: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Bell className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">Notifications</span>
          </div>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={profile.notificationPreferences.email}
                onChange={(e) => onUpdatePreferences({
                  notificationPreferences: {
                    ...profile.notificationPreferences,
                    email: e.target.checked
                  }
                })}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Email notifications</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={profile.notificationPreferences.sms}
                onChange={(e) => onUpdatePreferences({
                  notificationPreferences: {
                    ...profile.notificationPreferences,
                    sms: e.target.checked
                  }
                })}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">SMS notifications</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}