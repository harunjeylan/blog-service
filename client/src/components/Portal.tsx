"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};
const Portal = ({ children }: PortalProps) => {
  const [mountedElement, setMountedElement] = useState<Element | null>(null);

  useEffect(() => {
    setMountedElement(document.querySelector("#service-portal"));

    return () => setMountedElement(null);
  }, []);

  return mountedElement ? createPortal(children, mountedElement) : null;
};

export default Portal;
