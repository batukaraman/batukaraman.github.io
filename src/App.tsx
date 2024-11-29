import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@/store";
import {
  About,
  GoTop,
  Header,
  Hero,
  Modal,
  Projects,
  Qualification,
  RequestModal,
  Services,
  Skills,
} from "@/components";
import "@/styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Header />
      <main style={{ marginBottom: "100vh" }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Services />
      </main>
      <RequestModal />
      <GoTop />
    </Provider>
  </StrictMode>
);
