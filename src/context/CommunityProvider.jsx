import { createContext, useState } from "react";

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const communityOptions = [
    "Front-End Development",
    "Data Science/AI",
    "Back-End Development",
    "Graphics Design",
    "Software Engineering",
    "Cyber Security",
    "Product Design",
    "Product Management",
  ];

  return (
    <CommunityContext.Provider
      value={{ selectedCommunity, setSelectedCommunity, communityOptions }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
