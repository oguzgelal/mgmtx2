
export const isLoggedIn = user => {
  return user && user.token && user.token !== '';
};
