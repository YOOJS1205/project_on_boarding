import axios from 'axios';

interface FormValue {
  id: string;
  password: string;
}

export const loginAPI = async (
  id: string,
  password: string,
): Promise<FormValue> => {
  try {
    const res = await axios.post('/login', {
      id: id,
      password: password,
    });
    localStorage.setItem('id', res.data.id);
    localStorage.setItem('password', res.data.password);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const joinAPI = async (id: string, password: string): Promise<void> => {
  try {
    await axios.post('/join', {
      id: id,
      password: password,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUserAPI = async () => {
  try {
    const res = await axios.get('/user');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
