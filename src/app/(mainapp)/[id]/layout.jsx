import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";

export default function MainappLayout({ children }) {
  return (
      <div
      className="h-dvh w-full flex flex-row"
      >
        <Navbar />
        <main
          className="flex-1 flex flex-col justify-start items-stretch h-full px-20 py-17 bg-dark-bg overflow-y-auto"
        >
          {children}
        </main>
      </div>
  );
}
