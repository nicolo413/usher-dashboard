import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPromoterProfile } from "../services/api/auth";
import { usePromoterContext } from "../services/contexts/UserContext";

export default function App() {
  const router = useRouter();
  const { promoter, populatePromoter } = usePromoterContext();
  const [status, setStatus] = useState<"loading" | "loaded">("loading");

  useEffect(() => {
    getPromoterProfile()
      .then((prom) => {
        populatePromoter(prom);
        setStatus("loaded");
      })
      .catch((error) => console.error(error));
  }, []);

  if (status === "loaded") {
    if (!promoter) router.push("/auth");
    else router.push("/dashboard");
  }
  return null;
}
