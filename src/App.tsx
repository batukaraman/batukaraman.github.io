import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@/store";
import {
  About,
  GoTop,
  Header,
  Hero,
  Projects,
  Qualification,
  Services,
  Skills,
} from "@/components";
import "@/styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Services />
      </main>
      <GoTop />
    </Provider>
  </StrictMode>
);
