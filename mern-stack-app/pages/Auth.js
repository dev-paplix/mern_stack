
const BACKEND_URI = "http://10.0.2.2:5000/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleLogin = async (email, password, navigation, setError) => {
  try {
    const response = await fetch(`${BACKEND_URI}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    const data = await response.json();

     await AsyncStorage.setItem('token', data.token);

    // Navigate to Home on success
    navigation.replace('Home');
  } catch (err) {
    setError(err.message);
  }
};
