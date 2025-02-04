import { useContext } from "react";
import { CommunityContext } from "../context/CommunityProvider";

export const useCommunity = () => {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error("useModal must be used within a CommunityProvider");
  }
  return context;
};
