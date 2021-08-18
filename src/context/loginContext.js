import React from 'react';

const loginContext=React.createContext();
const LoginProvider=loginContext.Provider
const LoginConsumer=loginContext.Consumer


export {LoginProvider, LoginConsumer}
export default loginContext