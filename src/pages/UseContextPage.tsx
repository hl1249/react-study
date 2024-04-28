import { createContext, useContext, useState } from "react";



const GrandsonComponent = () => {
  const Dep = useContext(FatherContext)
  return (
    <div>
      <h3>GrandsonComponent-{Dep.value}</h3>
    </div>
  );
};

const ChildComponent = () => {
  const Dep = useContext(FatherContext)
  console.log(Dep)

  const setFatherValue = () => {
    // 修改顶层组件的值
    Dep.setValue("修改了");
  }


  return (
    <div>
      <h2>ChildComponent-{Dep.value}</h2>
      <GrandsonComponent />
      <button onClick={setFatherValue}>修改顶层组件的值</button>
    </div>
  );
};

interface ContextValueType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const FatherContext = createContext<ContextValueType>({ value: '芜湖', setValue: () => {} });

const UseContextPage: React.FC = () => {

  
  const [value,setValue] = useState<string>('芜湖')

  const contextValue:ContextValueType = {
    value,
    setValue
  }

  return (
    <FatherContext.Provider value={contextValue}>
      <div>
        <h1>UseContextPage-{value}</h1>
        <ChildComponent />
      </div>
    </FatherContext.Provider>
  );
};

export default UseContextPage;
