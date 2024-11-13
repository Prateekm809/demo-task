import React, { useState } from 'react';
import SignupModal from './SignupModal';

function LoginForm({ onForgotPasswordClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleCreateAccount = () => {
    setShowSignupModal(true);
  };

  const handleCloseModal = () => {
    setShowSignupModal(false);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email is invalid';

    if (!password) formErrors.password = 'Password is required';

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with login logic
      console.log('Login successful');
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm border border-gray-200 sm:mt-[110px] text-[16px]">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address or phone number"
            className="w-full p-4 border border-gray-300 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-300 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <button
            type="submit"
            className="w-full py-2 mb-2 bg-[#040c4a] text-white rounded font-semibold hover:bg-[#1c70de]"
          >
            Log In
          </button>
        </form>

        <a
          href="#"
          className="text-blue-600 text-md text-center block mb-4 hover:underline"
          onClick={onForgotPasswordClick}
        >
          Forgotten password?
        </a>
        <hr className="my-4 border-gray-300 w-full" />
        <button
          onClick={handleCreateAccount}
          className="w-full mt-4 p-3 bg-[#42A72B] text-white rounded font-semibold hover:bg-green-500"
        >
          Create New Account
        </button>
      </div>

      {/* Signup Modal */}
      {showSignupModal && (
        <SignupModal show={showSignupModal} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default LoginForm;
