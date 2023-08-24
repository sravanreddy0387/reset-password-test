import React, { useState } from "react";

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
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />
        <button disabled={!isValidPassword}>Reset Password</button>
       
      </div>
    );
  };
  
  export default PasswordReset;