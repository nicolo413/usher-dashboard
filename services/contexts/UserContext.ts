import { createContext, useContext, useState } from "react";

type PromoterContextType = {
  promoter: PromoterProfile | null;
  populatePromoter: (newPromoter: PromoterProfile | null) => void;
};

const defaultValue: PromoterContextType = {
  promoter: null,
  populatePromoter: () => {},
};

export const PromoterContext = createContext<PromoterContextType>(defaultValue);

export const PromoterProvider = ({ children }: any) => {
  const [promoter, setPromoter] = useState<PromoterProfile | null>(null);

  const populatePromoter = (newPromoter: PromoterProfile | null) => {
    setPromoter(newPromoter);
  };

  return (
    <PromoterContext.Provider value={{ promoter, populatePromoter }}>
      {children}
    </PromoterContext.Provider>
  );
};

export const usePromoterContext = () => useContext(PromoterContext);
