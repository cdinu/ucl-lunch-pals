"use client";
import EateriesList from "@/components/EateriesList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EateriesList />
    </main>
  );
}
