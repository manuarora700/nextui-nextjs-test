import Image from "next/image";
import AvatarPage from "./avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-grid-slate-200">
      <AvatarPage />
    </main>
  );
}
