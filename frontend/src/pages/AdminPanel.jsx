import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  Search,
  Filter,
  Eye,
  Edit,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Calendar
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AdminPanel = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('reports');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data
  const reports = [
    {
      id: 1,
      reportNumber: 'SR-2025-001',
      type: 'Theft',
      reporter: 'John Doe',
      location: 'Downtown Mall',
      date: '2025-01-15',
      status: 'investigating',
      severity: 'medium',
      assignedOfficer: 'Officer Johnson'
    },
    {
      id: 2,
      reportNumber: 'SR-2025-002',
      type: 'Vandalism',
      reporter: 'Jane Smith',
      location: 'Central Park',
      date: '2025-01-14',
      status: 'resolved',
      severity: 'low',
      assignedOfficer: 'Officer Davis'
    },
    {
      id: 3,
      reportNumber: 'SR-2025-003',
      type: 'Assault',
      reporter: 'Anonymous',
      location: 'Main Street',
      date: '2025-01-13',
      status: 'pending',
      severity: 'high',
      assignedOfficer: null
    },
    {
      id: 4,
      reportNumber: 'SR-2025-004',
      type: 'Drug Activity',
      reporter: 'Mike Wilson',
      location: 'School District',
      date: '2025-01-12',
      status: 'investigating',
      severity: 'high',
      assignedOfficer: 'Officer Brown'
    }
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'citizen', status: 'active', joinDate: '2024-12-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'citizen', status: 'active', joinDate: '2024-11-15' },
    { id: 3, name: 'Officer Johnson', email: 'johnson@police.gov', role: 'police', status: 'active', joinDate: '2024-10-20' },
    { id: 4, name: 'Admin User', email: 'admin@safereport.com', role: 'admin', status: 'active', joinDate: '2024-09-01' }
  ];

  const stats = [
    { title: 'Total Reports', value: '156', change: '+12%', trend: 'up', icon: FileText },
    { title: 'Active Users', value: '1,234', change: '+8%', trend: 'up', icon: Users },
    { title: 'Resolved Cases', value: '143', change: '+15%', trend: 'up', icon: CheckCircle },
    { title: 'Response Time', value: '2.3h', change: '-10%', trend: 'down', icon: Clock }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'investigating': return <AlertTriangle className="w-4 h-4 text-blue-400" />;
      case 'pending': return <Clock className="w-4 h-4 text-orange-400" />;
      case 'rejected': return <XCircle className="w-4 h-4 text-red-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
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

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'police': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'citizen': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const tabs = [
    { id: 'reports', label: 'Reports Management', icon: FileText },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'System Settings', icon: Settings }
  ];

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
            <Shield className="w-8 h-8 text-[#00C9A7]" />
            <h1 className="text-3xl font-bold text-white">
              {user?.role === 'admin' ? 'Admin Panel' : 'Police Dashboard'}
            </h1>
          </div>
          <p className="text-gray-300">
            Manage reports, users, and system settings
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-[#00C9A7]" />
                  <div className={`flex items-center space-x-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-300 text-sm">{stat.title}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex flex-wrap border-b border-white/20">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#00C9A7] border-b-2 border-[#00C9A7]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          {activeTab === 'reports' && (
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search reports..."
                        className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C9A7]"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00C9A7]"
                    >
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="investigating">Investigating</option>
                      <option value="resolved">Resolved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Reports Table */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Report
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Reporter
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredReports.map((report, index) => (
                        <tr key={report.id} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${getSeverityColor(report.severity)}`}></div>
                              <div>
                                <div className="text-white font-medium">{report.type}</div>
                                <div className="text-gray-400 text-sm">{report.reportNumber}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                            {report.reporter}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-1 text-gray-300">
                              <MapPin className="w-4 h-4" />
                              <span>{report.location}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-1 text-gray-300">
                              <Calendar className="w-4 h-4" />
                              <span>{report.date}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(report.status)}`}>
                              {getStatusIcon(report.status)}
                              <span>{report.status}</span>
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              <button className="text-[#00C9A7] hover:text-[#00A690] transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user.id} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-white font-medium">{user.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs border ${getRoleColor(user.role)}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-green-400">Active</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                          {user.joinDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <button className="text-[#00C9A7] hover:text-[#00A690] transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-blue-400 hover:text-blue-300 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Report Trends</h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300">Analytics dashboard would be integrated here</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Geographic Distribution</h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300">Heat map visualization would be here</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">System Configuration</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Auto-assign Reports
                    </label>
                    <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00C9A7]">
                      <option>Enabled</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Notifications
                    </label>
                    <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#00C9A7]">
                      <option>All</option>
                      <option>High Priority Only</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;