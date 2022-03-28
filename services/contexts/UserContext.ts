import * as React from 'react';
import { createContext } from "react";

type PromoterContextType = {
  promoter: PromoterProfile | null;
  setPromoter: React.Dispatch<React.SetStateAction<PromoterProfile | null>>
};

export const PromoterContext = createContext<PromoterContextType | null>(null);

// export const PromoterProvider = ({ children }: any) : React.ReactElement => {
//   const [promoter, setPromoter] = useState<PromoterProfile | null>(null);

//   const populatePromoter = (newPromoter: PromoterProfile | null) => {
//     setPromoter(newPromoter);
//   };

//   return (
//     <PromoterContext.Provider value={{ promoter, populatePromoter }}>
//       {children}
//     </PromoterContext.Provider>
//   );
// };

// export const usePromoterContext = () => useContext(PromoterContext);
