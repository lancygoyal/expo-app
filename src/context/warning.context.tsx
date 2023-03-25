import React, { createContext, useState, useCallback } from "react";
import type { FC, ReactNode } from "react";

type WarningProps = {
  title: string;
  message: string;
  onExit?: () => void | undefined;
  visible: boolean;
};

type ContextProps = {
  showWarning: (newWarning: Partial<WarningProps>) => void;
  hideWarning: () => void;
  warning: WarningProps;
};

const initialWarning: WarningProps = {
  message: "",
  title: "",
  onExit: undefined,
  visible: false,
};

export const WarningContext = createContext<ContextProps>({
  showWarning: () => {},
  hideWarning: () => {},
  warning: initialWarning,
});

export const WarningProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [warning, setWarning] = useState<WarningProps>(initialWarning);

  const show = useCallback((newWarning: Partial<WarningProps>) => {
    setWarning({ ...initialWarning, ...newWarning, visible: true });
  }, []);

  const hide = useCallback(() => {
    setWarning({ ...warning, visible: false });
  }, [warning]);

  return (
    <WarningContext.Provider
      value={{
        hideWarning: hide,
        showWarning: show,
        warning: warning,
      }}
    >
      {children}
    </WarningContext.Provider>
  );
};
