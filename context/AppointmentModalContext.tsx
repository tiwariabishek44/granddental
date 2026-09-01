"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppointmentOptions {
  treatment?: string;
  doctor?: string;
}

interface AppointmentModalContextType {
  isOpen: boolean;
  options: AppointmentOptions;
  openAppointmentModal: (opts?: AppointmentOptions) => void;
  closeAppointmentModal: () => void;
}

const AppointmentModalContext = createContext<AppointmentModalContextType | undefined>(undefined);

export function AppointmentModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<AppointmentOptions>({});

  const openAppointmentModal = (opts?: AppointmentOptions) => {
    setOptions(opts || {});
    setIsOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsOpen(false);
  };

  return (
    <AppointmentModalContext.Provider
      value={{
        isOpen,
        options,
        openAppointmentModal,
        closeAppointmentModal,
      }}
    >
      {children}
    </AppointmentModalContext.Provider>
  );
}

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext);
  if (!context) {
    throw new Error("useAppointmentModal must be used within an AppointmentModalProvider");
  }
  return context;
}
