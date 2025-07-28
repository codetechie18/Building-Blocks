import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Filter, 
  Calendar, 
  BarChart3,
  AlertTriangle,
  Shield,
  Eye,
  ChevronDown
} from 'lucide-react';

const MapView = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [timeFilter, setTimeFilter] = useState('week');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for map markers
  const incidents = [
    { id: 1, type: 'theft', lat: 40.7128, lng: -74.0060, severity: 'medium', time: '2 hours ago' },
    { id: 2, type: 'vandalism', lat: 40.7589, lng: -73.9851, severity: 'low', time: '4 hours ago' },
    { id: 3, type: 'assault', lat: 40.7505, lng: -73.9934, severity: 'high', time: '6 hours ago' },
    { id: 4, type: 'drug', lat: 40.7282, lng: -73.7949, severity: 'high', time: '1 day ago' },
    { id: 5, type: 'theft', lat: 40.6892, lng: -74.0445, severity: 'medium', time: '2 days ago' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Incidents', count: 156 },
    { value: 'theft', label: 'Theft/Burglary', count: 45 },
    { value: 'assault', label: 'Assault', count: 23 },
    { value: 'vandalism', label: 'Vandalism', count: 34 },
    { value: 'drug', label: 'Drug Activity', count: 18 },
    { value: 'other', label: 'Other', count: 36 }
  ];

  const timeFilters = [
    { value: 'day', label: 'Last 24 Hours' },
    { value: 'week', label: 'Last Week' },
    { value: 'month', label: 'Last Month' },
    { value: 'year', label: 'Last Year' }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'theft': return '🏪';
      case 'assault': return '⚠️';
      case 'vandalism': return '🎨';
      case 'drug': return '💊';
      default: return '📍';
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
 

<div className="min-h-screen pt-8 pb-8 bg-white text-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <motion.div
      className="mb-8"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <MapPin className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-black">Community Safety Map</h1>
          </div>
          <p className="text-gray-600">
            Interactive map showing reported incidents in your area
          </p>
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 rounded-lg transition-colors md:hidden"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </motion.div>

    <div className="grid lg:grid-cols-4 gap-8">
      {/* Filters Sidebar */}
      <motion.div
        className={`lg:col-span-1 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {/* Quick Stats */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-black mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Total Reports</span>
              <span className="text-black font-medium">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Resolved</span>
              <span className="text-green-600 font-medium">143</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Active</span>
              <span className="text-orange-500 font-medium">13</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Safety Score</span>
              <span className="text-blue-600 font-medium">87%</span>
            </div>
          </div>
        </div>

        {/* Time Filter */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-black mb-4 flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Time Period</span>
          </h3>
          <div className="space-y-2">
            {timeFilters.map((filter) => (
              <label
                key={filter.value}
                className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  timeFilter === filter.value
                    ? 'bg-blue-100 text-black'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <input
                  type="radio"
                  name="timeFilter"
                  value={filter.value}
                  checked={timeFilter === filter.value}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 ${
                  timeFilter === filter.value
                    ? 'border-blue-600 bg-blue-600'
                    : 'border-gray-400'
                }`}>
                  {timeFilter === filter.value && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                  )}
                </div>
                <span className="text-sm">{filter.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Incident Type Filter */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-black mb-4 flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Incident Types</span>
          </h3>
          <div className="space-y-2">
            {filterOptions.map((filter) => (
              <label
                key={filter.value}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                  selectedFilter === filter.value
                    ? 'bg-blue-100 text-black'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="incidentFilter"
                    value={filter.value}
                    checked={selectedFilter === filter.value}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedFilter === filter.value
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-400'
                  }`}>
                    {selectedFilter === filter.value && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="text-sm">{filter.label}</span>
                </div>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded-full">
                  {filter.count}
                </span>
              </label>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Map Area */}
      <motion.div
        className="lg:col-span-3"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 h-[600px]">
           {/* Map Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-black">Interactive Map</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-black text-sm">High</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-black text-sm">Medium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-black text-sm">Low</span>
                  </div>
                </div>
              </div>
                 
                 

         {/* Mock Map Container */}
              <div className="relative w-full h-full bg-gradient-to-br   rounded-lg border border-white/10 overflow-hidden">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-12 grid-rows-8 h-full">
                    {Array.from({ length: 96 }).map((_, i) => (
                      <div key={i} className="border border-white/20"></div>
                    ))}
                  </div>
                </div>

                {/* Mock Incident Markers */}
                {incidents.map((incident, index) => (
                  <div
                    key={incident.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${30 + (index * 10)}%`
                    }}
                  >
                    <div className={`w-6 h-6 rounded-full ${getSeverityColor(incident.severity)} flex items-center justify-center text-white text-xs font-bold animate-pulse`}>
                      {getTypeIcon(incident.type)}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white p-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="font-medium capitalize">{incident.type}</div>
                      <div className="text-gray-300">{incident.time}</div>
                      <div className={`text-xs px-1 py-0.5 rounded mt-1 ${
                        incident.severity === 'high' ? 'bg-red-500' :
                        incident.severity === 'medium' ? 'bg-orange-500' : 'bg-green-500'
                      }`}>
                        {incident.severity} severity
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors">
                    <BarChart3 className="w-4 h-4" />
                  </button>
                </div>

                {/* Center Message */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-black/10 backdrop-blur-lg p-8 rounded-lg border border-white/20">
                    <MapPin className="w-12 h-12 text-[#00C9A7] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-2">Interactive Map View</h3>
                    <p className="text-black     mb-4">
                      This would be integrated with a real mapping service like Google Maps or Mapbox
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-black">
                      <span>📍 {incidents.length} incidents shown</span>
                      <span>🔄 Real-time updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
           <div className="mt-6 p-6 bg-white rounded-2xl shadow-md border border-blue-100">
  <h3 className="text-xl font-semibold text-[#002855] mb-4">Recent Map Activity</h3>
  <div className="space-y-3">
    {incidents.slice(0, 3).map((incident) => (
      <div key={incident.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${getSeverityColor(incident.severity)}`}></div>
          <span className="text-[#002855] capitalize">{incident.type} incident</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-[#002855]">
          <span>{incident.time}</span>
          <MapPin className="w-4 h-4" />
        </div>
      </div>
    ))}
  </div>
</div>

          </motion.div>

    </div>
  </div>
</div>

  );
};

export default MapView;