import React, { useState } from "react";
import "./PasswordReset.css";

const PasswordReset: React.FC = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  
    const checkPasswordValidity = (password: string): boolean => {
      const hasMinLength = password.length >= 8;
      const hasNumber = /\d/.test(password);
      const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const hasNoRestriction = password.length > 15;
      return (
        (hasMinLength && hasNumber && hasSpecialCharacters) || hasNoRestriction
      );
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = event.target.value;
      setNewPassword(newPassword);
      setIsValidPassword(checkPasswordValidity(newPassword));
    };
  
    return (
      <div className="container">
        <h2>Password Reset</h2>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />
        <button disabled={!isValidPassword}>Reset Password</button>
        <p className="validation-message">
          Password must be at least 8 characters long, including at least one
          number and at least two special characters, or be greater than 15
          characters with no restriction.
        </p>
      </div>
    );
  };
  
  export default PasswordReset;