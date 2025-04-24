import { createContext, useState, useEffect } from "react";

export const MYCONTEXT = createContext();

export const MYCONTEXT_Providing = ({ children }) => {
  const [statedata, setStatedata] = useState();

  useEffect(() => {
    const call = localStorage.getItem("data_Mushafer");
    if (call) {
      setStatedata(JSON.parse(call));
      console.log("تم حفظ الداتا في اللوكال استوردج بنجاح");
    } else {
      console.log("مفيش حاجة اتحفظت يحبيب أخووق");
    }
  }, []);

  return (
    <MYCONTEXT.Provider value={statedata}>
      {children}
    </MYCONTEXT.Provider>
  );
};
