import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const InteractionContext = createContext();

const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const deleteInteraction = (id) => {
    toast.warn("Interaction deleted successfully")
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
