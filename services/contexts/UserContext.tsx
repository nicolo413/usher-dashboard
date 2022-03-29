import * as React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { PromoterProfile } from "../../utils/Types/userTypes";

type PromoterContextType = {
  promoter: PromoterProfile | null;
  populatePromoter: (newPromoter: PromoterProfile | null) => void;
};

const defaultValue: PromoterContextType = {
  promoter: null,
  populatePromoter: () => {},
};

export const PromoterContext = createContext<PromoterContextType>(defaultValue);

export function usePromoterContext() {
  return useContext(PromoterContext);
}
type Props = {
  children: ReactNode;
};

export const PromoterProvider = ({ children }: Props) => {
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

