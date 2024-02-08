"use client";

import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.replace("/example", { scroll: false })}>
      Close
    </button>
  );
}
