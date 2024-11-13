// SignupModal.js
import React from 'react';
import { motion } from 'framer-motion';

function SignupModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.75 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white rounded-lg p-6 shadow-xl w-full max-w-lg mx-4 "
      >
        <div className="flex justify-center items-center mb-6 w-full relative">
          <h2 className="text-2xl text-green-600 font-semibold text-center">
            Create New Account
          </h2>
          <button 
            onClick={onClose} 
            className="absolute right-0 text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

      
        <div className="grid grid-cols-2 gap-4 mb-4">
            
          <input
            type="text"
            placeholder="First Name"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="flex border border-gray-300 rounded">
                  <span className="p-3 bg-gray-50 border-r border-gray-300">🇮🇳 India</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Date of Birth</label>
                <div className="grid grid-cols-3 gap-4">
                  <select className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Day</option>
                  </select>
                  <select className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Month</option>
                  </select>
                  <select className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Year</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Gender</label>
                <div className="flex gap-4">
                  <label className="flex items-center border rounded p-3 flex-1">
                    <input type="radio" name="gender" className="mr-2" /> Male
                  </label>
                  <label className="flex items-center border rounded p-3 flex-1">
                    <input type="radio" name="gender" className="mr-2" /> Female
                  </label>
                  <label className="flex items-center border rounded p-3 flex-1">
                    <input type="radio" name="gender" className="mr-2" /> Other
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <select className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option>State</option>
                </select>
                <select className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option>City</option>
                </select>
              </div>

             
           

        <p className="text-sm text-gray-600 mb-6">
          By Continuing, You Agree to Lzy Crazy{" "}
          <a href="#" className="text-blue-600">Term & Conditions</a> and Confirm that You have Read Lzy Crazy{" "}
          <a href="#" className="text-blue-600">Privacy Policy</a>.
        </p>

        <button className="w-full p-3 bg-[#040c4a] text-white rounded font-semibold hover:bg-[#1c70de]">
          SIGNUP
        </button>
      </motion.div>
    </div>
  );
}

export default SignupModal;
