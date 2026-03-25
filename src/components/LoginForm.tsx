import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <motion.div
      className="w-full max-w-[380px] mx-auto"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Logo / Brand */}
      <motion.div className="mb-8" variants={item}>
        <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
          <span className="text-primary-foreground font-bold text-lg font-display">N</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight font-display text-foreground">
          Welcome back
        </h1>
        <p className="text-muted-foreground text-sm mt-1.5">
          Sign in to access your personalized dashboard
        </p>
      </motion.div>

      {/* Social login buttons */}
      <motion.div className="grid grid-cols-2 gap-3 mb-6" variants={item}>
        <motion.button
          type="button"
          className="h-11 rounded-xl border border-border bg-card flex items-center justify-center gap-2.5 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </motion.button>
        <motion.button
          type="button"
          className="h-11 rounded-xl border border-border bg-card flex items-center justify-center gap-2.5 text-sm font-medium text-foreground hover:bg-secondary/80 transition-colors"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Apple
        </motion.button>
      </motion.div>

      <motion.div className="flex items-center gap-4 mb-6" variants={item}>
        <div className="flex-1 h-px bg-border" />
        <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">or continue with email</span>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      <motion.form className="space-y-4" onSubmit={handleSubmit} variants={container} initial="hidden" animate="show">
        <motion.div className="space-y-1.5" variants={item}>
          <Label htmlFor="email" className="text-foreground/70 text-xs font-medium uppercase tracking-wider">
            Email address
          </Label>
          <div className={`relative rounded-xl transition-shadow duration-200 ${focused === 'email' ? 'shadow-md shadow-primary/10' : ''}`}>
            <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 ${focused === 'email' ? 'text-primary' : 'text-muted-foreground'}`} />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-11 h-12 rounded-xl bg-card border-border/60 focus:border-primary focus-visible:ring-primary/20 transition-all text-foreground"
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
            />
          </div>
        </motion.div>

        <motion.div className="space-y-1.5" variants={item}>
          <Label htmlFor="password" className="text-foreground/70 text-xs font-medium uppercase tracking-wider">
            Password
          </Label>
          <div className={`relative rounded-xl transition-shadow duration-200 ${focused === 'password' ? 'shadow-md shadow-primary/10' : ''}`}>
            <Lock className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 ${focused === 'password' ? 'text-primary' : 'text-muted-foreground'}`} />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-11 pr-11 h-12 rounded-xl bg-card border-border/60 focus:border-primary focus-visible:ring-primary/20 transition-all text-foreground"
              onFocus={() => setFocused('password')}
              onBlur={() => setFocused(null)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>

        <motion.div className="flex items-center justify-between text-sm pt-1" variants={item}>
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="h-4 w-4 rounded border border-border bg-card group-hover:border-primary/50 transition-colors flex items-center justify-center">
              <input type="checkbox" className="sr-only peer" />
            </div>
            <span className="text-muted-foreground text-xs">Remember me</span>
          </label>
          <a href="#" className="text-primary hover:text-primary/80 text-xs font-medium transition-colors">Forgot password?</a>
        </motion.div>

        <motion.div className="pt-2" variants={item}>
          <Button
            type="submit"
            className="w-full h-12 text-sm font-semibold font-display relative overflow-hidden rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow group"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                Sign In
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </Button>
        </motion.div>

        <motion.p className="text-center text-xs text-muted-foreground pt-2" variants={item}>
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:text-primary/80 font-semibold transition-colors">Create one</a>
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default LoginForm;
