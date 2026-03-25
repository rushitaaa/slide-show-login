import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <AnimatePresence>
          {showNews && <NewsWeatherPanel />}
        </AnimatePresence>
      </div>

      {/* Login Panel — slides right when toggled */}
      <motion.div
        className="absolute inset-0 z-10 flex"
        animate={{ x: showNews ? "50%" : "0%" }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
      >
        {/* Toggle Button */}
        <motion.button
          onClick={() => setShowNews(!showNews)}
          className="absolute top-5 left-5 z-30 p-2.5 rounded-xl bg-card/80 backdrop-blur border border-border/50 shadow-md hover:shadow-lg hover:bg-card transition-all group"
          aria-label="Toggle news panel"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {showNews ? (
            <PanelLeftClose className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          ) : (
            <PanelLeftOpen className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          )}
        </motion.button>

        {/* Left: Login Form */}
        <div className="w-1/2 flex items-center justify-center bg-background px-8 relative">
          <LoginForm />
        </div>

        {/* Right: Image */}
        <motion.div
          className="w-1/2 relative overflow-hidden"
          animate={{ opacity: showNews ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ pointerEvents: showNews ? "none" : "auto" }}
        >
          <img
            src={loginBg}
            alt="City skyline at dusk"
            className="absolute inset-0 w-full h-full object-cover"
            width={960}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--accent))]/60 to-transparent" />
          <motion.div
            className="absolute bottom-12 left-10 right-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-display text-primary-foreground leading-tight">
              Stay informed.<br />Stay connected.
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
              Access your dashboard for the latest news and weather updates.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
