import { createContext, useState } from "react";

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const deleteInteraction = (id) => {
  setInteractions((prev) => prev.filter((item) => item.id !== id));
};
  const addInteraction = (data) => {
  setInteractions((prev) =>[...prev, data]);
};
  console.log(addInteraction)
  console.log(interactions)


  return (
    <InteractionContext.Provider value={{ interactions, addInteraction , deleteInteraction}}>
      {children}
    </InteractionContext.Provider>
  );
};

export default InteractionProvider;
