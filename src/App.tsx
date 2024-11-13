import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@/store";
import { Header, Hero } from "@/components";
import "@/styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Header />
      <main>
        <Hero />
        <div id="about" style={{ height: "100vh" }}>
          Hakkımda
        </div>
        <div id="skills" style={{ height: "100vh" }}>
          Beceriler
        </div>
        <div id="qualifıcation" style={{ height: "100vh" }}>
          Yetkinlik
        </div>
      </main>
    </Provider>
  </StrictMode>
);
