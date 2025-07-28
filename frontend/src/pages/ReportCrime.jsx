import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  MapPin, 
  Camera, 
  FileText, 
  Clock, 
  Send,
  X,
  Upload
} from 'lucide-react';

const ReportCrime = () => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    location: '',
    date: '',
    time: '',
    anonymous: false,
    severity: 'medium'
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const crimeTypes = [
    'Theft/Burglary',
    'Assault',
    'Vandalism',
    'Drug Activity',
    'Fraud',
    'Domestic Violence',
    'Harassment',
    'Traffic Violation',
    'Suspicious Activity',
    'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      type: '',
      description: '',
      location: '',
      date: '',
      time: '',
      anonymous: false,
      severity: 'medium'
    });
    setImages([]);
    setLoading(false);
    
    alert('Report submitted successfully!');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(prev => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen pt-8 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-[#00C9A7]" />
            <h1 className="text-3xl font-bold text-white">Report an Incident</h1>
          </div>
          <p className="text-gray-300">
            Help keep your community safe by reporting incidents. All reports are taken seriously and handled with care.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Crime Type */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Type of Incident *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {crimeTypes.map((type) => (
                  <label
                    key={type}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 text-center ${
                      formData.type === type
                        ? 'border-[#00C9A7] bg-[#00C9A7]/10'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      checked={formData.type === type}
                      onChange={handleChange}
                      className="sr-only"
                      required
                    />
                    <span className={`text-sm ${
                      formData.type === type ? 'text-white font-medium' : 'text-gray-300'
                    }`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Severity */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Severity Level
              </label>
              <div className="flex space-x-4">
                {[
                  { value: 'low', label: 'Low', color: 'bg-green-500' },
                  { value: 'medium', label: 'Medium', color: 'bg-orange-500' },
                  { value: 'high', label: 'High', color: 'bg-red-500' }
                ].map((severity) => (
                  <label
                    key={severity.value}
                    className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                      formData.severity === severity.value
                        ? 'border-[#00C9A7] bg-[#00C9A7]/10'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="severity"
                      value={severity.value}
                      checked={formData.severity === severity.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-3 h-3 rounded-full ${severity.color}`}></div>
                    <span className={`text-sm ${
                      formData.severity === severity.value ? 'text-white font-medium' : 'text-gray-300'
                    }`}>
                      {severity.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent transition-all duration-200"
                  placeholder="Enter the location where incident occurred"
                />
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C9A7] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Provide a detailed description of what happened..."
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Evidence (Photos)
              </label>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-6 hover:border-[#00C9A7] transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <Upload className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-gray-300 text-center">
                    Click to upload images or drag and drop
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    PNG, JPG up to 10MB each
                  </p>
                </label>
              </div>

              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Evidence ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Anonymous Option */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="w-4 h-4 text-[#00C9A7] bg-white/10 border-white/20 rounded focus:ring-[#00C9A7] focus:ring-2"
              />
              <label className="text-gray-300">
                Submit this report anonymously
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#00C9A7] to-[#00A690] text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit Report</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Emergency Notice */}
        <motion.div 
          className="mt-8 bg-red-500/20 border border-red-500/50 rounded-lg p-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-400 mt-0.5" />
            <div>
              <h3 className="text-red-200 font-semibold mb-2">Emergency Situations</h3>
              <p className="text-red-300 text-sm">
                If you are experiencing an emergency or immediate danger, please call 911 immediately. 
                This form is for non-emergency reporting only.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReportCrime;