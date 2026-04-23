import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

declare global {
  interface Window {
    Paddle?: any;
    openSallaSecretsCheckout?: () => void;
  }
}

if (typeof window !== "undefined" && window.Paddle) {
  try {
    window.Paddle.Environment.set("production");
    window.Paddle.Setup({ token: "live_6b5592ef0b62e6ee7cb653c6c21" });
  } catch (err) {
    console.error("Paddle initialization failed:", err);
  }
}

window.openSallaSecretsCheckout = function openSallaSecretsCheckout() {
  if (!window.Paddle) {
    console.error("Paddle.js not loaded yet.");
    return;
  }
  window.Paddle.Checkout.open({
    items: [{ priceId: "pri_01kppatkv4ps1y5y8kh3kdedsy", quantity: 1 }],
    settings: { displayMode: "overlay" },
  });
};

createRoot(document.getElementById("root")!).render(<App />);
