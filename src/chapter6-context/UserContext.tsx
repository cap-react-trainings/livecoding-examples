import React, { useContext, useEffect, useState } from "react";

interface User {
  id?: number;
  name?: string;
  surname?: string;
}

interface UserData {
  user: User;
}

const dummyUser = {};

export const UserContext = React.createContext<UserData>(undefined!);

export const UserContextProvider = (props: { children: React.ReactNode }) => {
  const [state, setState] = useState<UserData>({ user: dummyUser });

  const testPromise = Promise.resolve({
    id: 1,
    name: "Jessica",
    surname: "Smith",
  });

  useEffect(() => {
    testPromise.then((result) => {
      setState({ user: result });
    });
  }, []);

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};

export const useUser = (): UserData => {
  return useContext(UserContext);
};
