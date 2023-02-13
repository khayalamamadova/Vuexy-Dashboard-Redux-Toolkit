export const addUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const removeUser = () => {
    localStorage.removeItem('user');
  };
  
  export const getUser = () => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
  };