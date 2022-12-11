import {createContext, Dispatch, SetStateAction, useState} from 'react';
import {ITvShow} from '../../types/TvShow';

const TvShowContext = createContext<TvShowContextParams>({});

interface TvShowContextParams {
  searchResult?: ITvShow[];
  setSearchResult?: Dispatch<SetStateAction<ITvShow[] | []>>;
}

export const TvShowContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [searchResult, setSearchResult] = useState<ITvShow[] | []>(
    [] as ITvShow[],
  );

  return (
    <TvShowContext.Provider value={{searchResult, setSearchResult}}>
      {children}
    </TvShowContext.Provider>
  );
};

export default TvShowContext;
