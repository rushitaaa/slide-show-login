import { useState } from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import LoginForm from "@/components/LoginForm";
import NewsWeatherPanel from "@/components/NewsWeatherPanel";
import loginBg from "@/assets/login-bg.jpg";

const Index = () => {
  const [showNews, setShowNews] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative font-body">
      {/* News/Weather Panel — sits behind, revealed when login slides */}
      <div className="absolute inset-y-0 left-0 w-1/2 z-0">
        <NewsWeatherPanel />
      </div>

      {/* Login Panel — slides right when toggled */}
      <div
        className="absolute inset-0 z-10 flex transition-transform duration-500 ease-in-out"
        style={{ transform: showNews ? "translateX(50%)" : "translateX(0)" }}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setShowNews(!showNews)}
          className="absolute top-5 left-5 z-30 p-2.5 rounded-xl bg-card/80 backdrop-blur border border-border/50 shadow-md hover:shadow-lg hover:bg-card transition-all group"
          aria-label="Toggle news panel"
        >
          {showNews ? (
            <PanelLeftClose className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          ) : (
            <PanelLeftOpen className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          )}
        </button>

        {/* Left: Login Form */}
        <div className="w-1/2 flex items-center justify-center bg-background px-8 relative">
          <LoginForm />
        </div>

        {/* Right: Image */}
        <div
          className={`w-1/2 relative overflow-hidden transition-opacity duration-500 ${
            showNews ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img
            src={loginBg}
            alt="City skyline at dusk"
            className="absolute inset-0 w-full h-full object-cover"
            width={960}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--accent))]/60 to-transparent" />
          <div className="absolute bottom-12 left-10 right-10">
            <h2 className="text-3xl font-bold font-display text-primary-foreground leading-tight">
              Stay informed.<br />Stay connected.
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
              Access your dashboard for the latest news and weather updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
