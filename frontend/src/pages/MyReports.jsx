import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  MapPin, 
  Clock, 
  Eye, 
  Edit,
  Trash2,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Filter
} from 'lucide-react';

const MyReports = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock reports data
  const reports = [
    {
      id: 1,
      type: 'Theft',
      description: 'Bike stolen from apartment complex',
      location: 'Downtown Mall Parking',
      date: '2025-01-15',
      time: '14:30',
      status: 'investigating',
      severity: 'medium',
      reportNumber: 'SR-2025-001',
      updates: [
        { date: '2025-01-15', message: 'Report received and assigned to Officer Johnson' },
        { date: '2025-01-16', message: 'Security footage requested from nearby businesses' }
      ]
    },
    {
      id: 2,
      type: 'Vandalism',
      description: 'Graffiti on community center wall',
      location: 'Central Park Community Center',
      date: '2025-01-10',
      time: '09:15',
      status: 'resolved',
      severity: 'low',
      reportNumber: 'SR-2025-002',
      updates: [
        { date: '2025-01-10', message: 'Report received and documented' },
        { date: '2025-01-12', message: 'Maintenance crew cleaned the graffiti' },
        { date: '2025-01-13', message: 'Case closed - Area restored' }
      ]
    },
    {
      id: 3,
      type: 'Suspicious Activity',
      description: 'Unknown individuals loitering near school',
      location: 'Roosevelt Elementary School',
      date: '2025-01-08',
      time: '15:45',
      status: 'pending',
      severity: 'high',
      reportNumber: 'SR-2025-003',
      updates: [
        { date: '2025-01-08', message: 'Report received - awaiting assignment' }
      ]
    },
    {
      id: 4,
      type: 'Noise Complaint',
      description: 'Loud music and disturbance late at night',
      location: '123 Oak Street',
      date: '2025-01-05',
      time: '23:30',
      status: 'resolved',
      severity: 'medium',
      reportNumber: 'SR-2025-004',
      updates: [
        { date: '2025-01-05', message: 'Report received' },
        { date: '2025-01-06', message: 'Officer visited location and spoke with residents' },
        { date: '2025-01-06', message: 'Issue resolved - No further complaints' }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'investigating': return <AlertTriangle className="w-5 h-5 text-blue-400" />;
      case 'pending': return <Clock className="w-5 h-5 text-orange-400" />;
      case 'rejected': return <XCircle className="w-5 h-5 text-red-400" />;
      default: return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'investigating': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'pending': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'rejected': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredReports = reports.filter(report => 
    filterStatus === 'all' || report.status === filterStatus
  );

  const sortedReports = [...filteredReports].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'status') {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-[#00C9A7]" />
            <h1 className="text-3xl font-bold text-white">My Reports</h1>
          </div>
          <p className="text-gray-300">
            Track and manage all your submitted incident reports
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {[
            { label: 'Total Reports', value: reports.length, color: 'from-blue-500 to-blue-600' },
            { label: 'Resolved', value: reports.filter(r => r.status === 'resolved').length, color: 'from-green-500 to-green-600' },
            { label: 'Investigating', value: reports.filter(r => r.status === 'investigating').length, color: 'from-orange-500 to-orange-600' },
            { label: 'Pending', value: reports.filter(r => r.status === 'pending').length, color: 'from-purple-500 to-purple-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3`}>
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters and Controls */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00C9A7]"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="investigating">Investigating</option>
                <option value="resolved">Resolved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00C9A7]"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="status">Status</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Reports List */}
        <motion.div 
          className="space-y-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {sortedReports.length === 0 ? (
            <motion.div 
              variants={fadeInUp}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Reports Found</h3>
              <p className="text-gray-300">You haven't submitted any reports yet.</p>
            </motion.div>
          ) : (
            sortedReports.map((report, index) => (
              <motion.div
                key={report.id}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                  {/* Report Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${getSeverityColor(report.severity)}`}></div>
                        <h3 className="text-xl font-semibold text-white">{report.type}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{report.description}</p>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{report.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{report.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{report.time}</span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="text-white font-medium mb-2 flex items-center space-x-2">
                        {getStatusIcon(report.status)}
                        <span>Case Updates</span>
                      </h4>
                      <div className="space-y-2">
                        {report.updates.map((update, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-[#00C9A7] rounded-full mt-2"></div>
                            <div>
                              <p className="text-gray-300 text-sm">{update.message}</p>
                              <p className="text-gray-400 text-xs">{update.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        Report #{report.reportNumber}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-[#00C9A7] hover:text-[#00A690] text-sm transition-colors">
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                        {report.status === 'pending' && (
                          <>
                            <button className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm transition-colors">
                              <Edit className="w-4 h-4" />
                              <span>Edit</span>
                            </button>
                            <button className="flex items-center space-x-1 text-red-400 hover:text-red-300 text-sm transition-colors">
                              <Trash2 className="w-4 h-4" />
                              <span>Delete</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MyReports;