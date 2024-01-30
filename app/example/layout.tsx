import type { ReactNode } from "react";

export default function MovieLayout({
  children,
  slot,
}: {
  children: ReactNode;
  slot: ReactNode;
}) {
  return (
    <>
      {children}
      {slot}
    </>
  );
}
