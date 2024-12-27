import React from 'react';
import { 
  BarChart2, 
  FileText, 
  BookOpen, 
  Calendar,
  Settings,
  HelpCircle
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: BarChart2 },
  { name: 'Documents', icon: FileText },
  { name: 'Learning', icon: BookOpen },
  { name: 'Calendar', icon: Calendar },
  { name: 'Settings', icon: Settings },
  { name: 'Help', icon: HelpCircle },
];

export function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-800">
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <item.icon className="mr-3 h-6 w-6 text-gray-400" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}