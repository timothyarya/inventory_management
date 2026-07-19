import "@/app/globals.css";

export default function HomeLayout({ children }) {
  return (
        <main
          className="flex flex-col justify-start items-center min-h-dvh px-20 py-17 bg-dark-bg w-full"
        >
          {children}
        </main>
  );
}
