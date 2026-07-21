import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";

export default function MainappLayout({ children }) {
  return (
      <div
      className="h-dvh w-full flex flex-row"
      >
        <div className="hidden md:block">
          <Navbar />
        </div>
        <main
          className="flex-1 flex flex-col justify-start items-stretch h-full bg-dark-bg px-20 py-17 overflow-y-auto"
        >
          {children}
        </main>
      </div>
  );
}
