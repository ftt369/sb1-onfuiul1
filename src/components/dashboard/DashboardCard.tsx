import React from 'react';
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from 'lucide-react';
import { DashboardMetric } from '../../types';

interface DashboardCardProps {
  metric: DashboardMetric;
}

export function DashboardCard({ metric }: DashboardCardProps) {
  const getTrendIcon = () => {
    if (!metric.trend) return null;
    
    const iconProps = { className: 'w-4 h-4 ml-2' };
    
    return metric.trend === 'up' ? (
      <ArrowUpIcon {...iconProps} className={`${iconProps.className} text-green-500`} />
    ) : metric.trend === 'down' ? (
      <ArrowDownIcon {...iconProps} className={`${iconProps.className} text-red-500`} />
    ) : (
      <MinusIcon {...iconProps} className={`${iconProps.className} text-gray-500`} />
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{metric.label}</h3>
        {getTrendIcon()}
      </div>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
        {metric.change && (
          <span className={`ml-2 text-sm ${
            metric.trend === 'up' ? 'text-green-600' : 
            metric.trend === 'down' ? 'text-red-600' : 
            'text-gray-600'
          }`}>
            {metric.change > 0 ? '+' : ''}{metric.change}%
          </span>
        )}
      </div>
    </div>
  );
}