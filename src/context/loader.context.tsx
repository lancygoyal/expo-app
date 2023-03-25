import React, { createContext, useState, useCallback } from "react";
import type { FC, ReactNode } from "react";

type LoadingProps = {
  title: string;
  visible: boolean;
};

type ContextProps = {
  showLoading: (newLoading: Partial<LoadingProps>) => void;
  hideLoading: () => void;
  loading: LoadingProps;
};

const initialLoading: LoadingProps = {
  title: "",
  visible: false,
};

export const LoadingContext = createContext<ContextProps>({
  showLoading: () => {},
  hideLoading: () => {},
  loading: initialLoading,
});

export const LoadingProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<LoadingProps>(initialLoading);

  const show = useCallback((newLoading: Partial<LoadingProps>) => {
    setLoading({ ...initialLoading, ...newLoading, visible: true });
  }, []);

  const hide = useCallback(() => {
    setLoading({ ...loading, visible: false });
  }, [loading]);

  return (
    <LoadingContext.Provider
      value={{
        hideLoading: hide,
        showLoading: show,
        loading: loading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
