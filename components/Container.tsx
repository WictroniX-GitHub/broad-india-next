"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
}
