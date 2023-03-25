import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
// import ICON_CANCEL from "@/assets/images/icons/ic-cancel.png";

import type { FC, ReactNode } from "react";
import type { ImageSourcePropType } from "react-native";

type ToastProps = {
  message: string;
  icon: string;
  iconSrc: ImageSourcePropType;
  visible: boolean;
  isPermanent: boolean;
};

type ContextProps = {
  show: (newToast: Partial<ToastProps>) => void;
  hide: () => void;
  error: (message: string) => void;
  toast: ToastProps;
};

const initialToast: ToastProps = {
  message: "",
  icon: "checkmark-circle-outline",
  iconSrc: 0,
  visible: false,
  isPermanent: false,
};

export const ToastContext = createContext<ContextProps>({
  show: () => {},
  hide: () => {},
  error: () => {},
  toast: initialToast,
});

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastProps>(initialToast);
  const timeout = useRef<NodeJS.Timeout>();

  const show = useCallback((newToast: Partial<ToastProps>) => {
    setToast({ ...initialToast, ...newToast, visible: true });
  }, []);

  const hide = useCallback(() => {
    setToast({ ...toast, visible: false });
  }, [toast]);

  const error = useCallback((message: string) => {
    show({
      message,
      iconSrc: null, // ICON_CANCEL,
    });
  }, []);

  useEffect(() => {
    if (toast?.visible && !toast?.isPermanent) {
      timeout.current = setTimeout(hide, 1500);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
  }, [hide, toast]);

  return (
    <ToastContext.Provider
      value={{
        hide,
        show,
        error,
        toast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
