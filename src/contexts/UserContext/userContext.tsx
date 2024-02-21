// UserContext.js
import { createContext, useState, useContext, useEffect } from 'react';

const UserContext: any = createContext({});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('../../api/user'); 
        const userData = await response.json();
        setUser(userData.avatar);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
