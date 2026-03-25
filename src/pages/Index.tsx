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
      <div className="absolute inset-y-0 left-0 w-1/2 z-0 bg-secondary/30">
        <AnimatePresence>
          {showNews && <NewsWeatherPanel />}
        </AnimatePresence>
      </div>

      {/* Login Panel — slides right when toggled */}
      <motion.div
        className="absolute inset-0 z-10 flex"
        animate={{ x: showNews ? "50%" : "0%" }}
        transition={{ type: "spring", stiffness: 180, damping: 26 }}
      >
        {/* Toggle Button */}
        <motion.button
          onClick={() => setShowNews(!showNews)}
          className="absolute top-5 left-5 z-30 p-2.5 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-shadow group"
          aria-label="Toggle news panel"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
        >
          <motion.div
            animate={{ rotate: showNews ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {showNews ? (
              <PanelLeftClose className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
            ) : (
              <PanelLeftOpen className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
            )}
          </motion.div>
        </motion.button>

        {/* Left: Login Form */}
        <div className="w-1/2 flex items-center justify-center bg-background px-8 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
          <div className="relative z-10 w-full flex items-center justify-center">
            <LoginForm />
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="w-1/2 relative overflow-hidden"
          animate={{ opacity: showNews ? 0 : 1 }}
          transition={{ duration: 0.35 }}
          style={{ pointerEvents: showNews ? "none" : "auto" }}
        >
          <img
            src={loginBg}
            alt="City skyline at dusk"
            className="absolute inset-0 w-full h-full object-cover"
            width={960}
            height={1080}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,60%,8%)] via-[hsl(220,60%,8%)]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,60%,8%)]/30 to-transparent" />
          
          {/* Content overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {/* Stats row */}
            <div className="flex gap-6 mb-6">
              {[
                { label: "Active Users", value: "2.4M+" },
                { label: "Countries", value: "150+" },
                { label: "Uptime", value: "99.9%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-bold font-display text-primary-foreground">{stat.value}</p>
                  <p className="text-[10px] text-primary-foreground/50 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-bold font-display text-primary-foreground leading-tight">
              Stay informed.<br />Stay connected.
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
              Your personalized dashboard for real-time news, weather, and market insights.
            </p>
          </motion.div>

          {/* Floating glass card */}
          <motion.div
            className="absolute top-8 right-8 bg-[hsl(0,0%,100%)]/10 backdrop-blur-md border border-[hsl(0,0%,100%)]/20 rounded-2xl p-4 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[hsl(142,70%,45%)]/20 flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-[hsl(142,70%,45%)] animate-pulse" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-primary-foreground">System Status</p>
                <p className="text-[10px] text-primary-foreground/60">All systems operational</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
