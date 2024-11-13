import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoSection from './components/LogoSection';
import SearchBar from './components/Searchbar';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import SignupModal from './components/SignupModal';

function App() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleCreateAccount = () => {
    setShowSignupModal(true);
  };

  const handleCloseModal = () => {
    setShowSignupModal(false);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLoginClick = () => {
    setShowForgotPassword(false);
  };

  const pageVariants = {
    enter: {
      x: "100%",
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: "-100%",
      opacity: 0
    }
  };

  const pageTransition = {
    duration: 0.5,
    ease: "easeInOut"
  };

  return (
    <div className="h-screen flex flex-col bg-white p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row flex-grow w-full items-center justify-center">
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:pr-10 sm:ml-[90px] sm:mb-0 mb-10">
          <LogoSection />
          <SearchBar />
          <VideoSection />
        </div>

        {/* Form container */}
        <div className="w-full sm:w-1/2 h-full flex justify-center items-center sm:pl-10">
          <div className="w-full max-w-md h-auto relative">
            <AnimatePresence mode="wait">
              {!showForgotPassword ? (
                <motion.div
                  key="login"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={pageTransition}
                  className="w-full"
                >
                  <LoginForm 
                    onForgotPasswordClick={handleForgotPasswordClick}
                    onCreateAccountClick={handleCreateAccount} 
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="forgotPassword"
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={pageTransition}
                  className="w-full"
                >
                  <ForgotPasswordForm 
                    onBackToLoginClick={handleBackToLoginClick} 
                    onCreateAccountClick={handleCreateAccount} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Footer />

      {/* Signup Modal */}
      {showSignupModal && (
        <SignupModal show={showSignupModal} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
