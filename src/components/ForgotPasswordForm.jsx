import React, { useState } from 'react';

function ForgotPasswordForm({ onBackToLoginClick, onCreateAccountClick }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      // Proceed with password reset logic
      console.log('Password reset email sent');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm border border-gray-200 mt-[110px] text-[16px]">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Please Enter registered email Id"
          className="w-full p-4 border border-gray-300 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 mb-2 bg-[#040c4a] text-white rounded font-semibold hover:bg-[#1c70de]"
        >
          Submit
        </button>
      </form>

      <a
        href="#"
        className="text-blue-600 text-md text-center block mb-4 hover:underline"
        onClick={onBackToLoginClick}
      >
        Back to Login
      </a>
      <hr className="my-4 border-gray-300 w-full" />
      <button
        onClick={onCreateAccountClick}
        className="w-full mt-4 p-3 bg-[#42A72B] text-white rounded font-semibold hover:bg-green-500"
      >
        Create New Account
      </button>
    </div>
  );
}

export default ForgotPasswordForm;
