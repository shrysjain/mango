import React, { useState } from 'react';
import axios from 'axios';

const PasswordUpdateForm: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/update-password', { currentPassword, newPassword });
      alert('Password updated successfully!');
    } catch (error) {
      console.error('Failed to update password:', error);
      alert('Failed to update password');
    }
  };

  return (
    <form onSubmit={handleUpdatePassword} className="space-y-4">
      <input
        type="password"
        placeholder="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        required
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
        className="border border-gray-300 px-3 py-2 rounded-md w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Update Password
      </button>
    </form>
  );
};

export default PasswordUpdateForm;
