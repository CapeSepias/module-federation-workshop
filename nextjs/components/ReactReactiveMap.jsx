import { createContext, useContext, useState, useEffect } from "react";

const ReactiveMapContext = createContext();

export const validateContextProvider = (context, provider) => {
  if (!context) {
    throw new Error(`${provider} is not an ancestor of this component`);
  }
  return context;
};

export function ReactiveMapProvider({ children, reactiveMap }) {
  return (
    <ReactiveMapContext.Provider value={reactiveMap}>
      {children}
    </ReactiveMapContext.Provider>
  );
}

export function useReactiveKey(key) {
  return useReactiveMap().get(key);
}

export function useReactiveMap() {
  return validateContextProvider(
    useContext(ReactiveMapContext),
    "ReactiveMapContext"
  );
}

export function useReactiveValue(reactiveValue) {
  const [value, setValue] = useState();

  useEffect(() => {
    return reactiveValue.listen((newValue) => {
      setValue(newValue)
    });
  }, [reactiveValue]);

  return [value, setValue];
}
