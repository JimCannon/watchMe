import {createContext} from 'react';

export const UserContext = createContext('hej');
export const UserProvider = (props: {children: any}) => {
  const {children} = props;
  const tvshow = useProvideTvShow();

  function useProvideTvShow() {
    return 'niklas';
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <UserContext.Provider value={tvshow}>{children}</UserContext.Provider>
  );
};
