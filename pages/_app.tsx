import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-col h-screen bg-blue-50 px-0 lg:px-24">
      <Nav setIsModalOpen={setIsModalOpen} />
      <div className="flex-col h-screen bg-blue-50 px-0 lg:px-24">
        <Component
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          {...pageProps}
        />
      </div>
    </div>
  );
}

export default MyApp;
