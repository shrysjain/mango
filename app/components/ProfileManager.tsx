import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileManager: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">My Profile</h2>
      {user && (
        <ul className="space-y-2">
          <li><span className="font-semibold">Email:</span> {user.email}</li>
          <li><span className="font-semibold">Joined:</span> {new Date(user.createdAt).toLocaleDateString()}</li>
          <li><span className="font-semibold">Last Updated:</span> {new Date(user.updatedAt).toLocaleDateString()}</li>
        </ul>
      )}
    </div>
  );
};

export default ProfileManager;
