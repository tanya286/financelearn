// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-white theme-dark:bg-gray-900 text-black theme-dark:text-white transition-colors duration-300">

      <Navbar />
      <main className="grow">
      <AppRoutes />
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;