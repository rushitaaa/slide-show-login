import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff, Loader2, Chrome, Apple } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <motion.div
      className="w-full max-w-sm mx-auto space-y-7"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="space-y-2" variants={item}>
        <h1 className="text-3xl font-bold tracking-tight font-display text-foreground">
          Welcome back
        </h1>
        <p className="text-muted-foreground text-sm">
          Sign in to your account to continue
        </p>
      </motion.div>

      {/* Social login buttons */}
      <motion.div className="grid grid-cols-2 gap-3" variants={item}>
        <Button
          variant="outline"
          className="h-11 gap-2 text-sm font-medium hover:border-primary/40 transition-all"
          type="button"
        >
          <Chrome className="h-4 w-4" />
          Google
        </Button>
        <Button
          variant="outline"
          className="h-11 gap-2 text-sm font-medium hover:border-primary/40 transition-all"
          type="button"
        >
          <Apple className="h-4 w-4" />
          Apple
        </Button>
      </motion.div>

      <motion.div className="flex items-center gap-3" variants={item}>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground uppercase tracking-wider">or</span>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <motion.div className="space-y-2" variants={item}>
          <Label htmlFor="email" className="text-muted-foreground text-xs uppercase tracking-wider">
            Email
          </Label>
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all"
            />
          </div>
        </motion.div>

        <motion.div className="space-y-2" variants={item}>
          <Label htmlFor="password" className="text-muted-foreground text-xs uppercase tracking-wider">
            Password
          </Label>
          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-10 pr-10 h-12 bg-secondary/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>

        <motion.div className="flex items-center justify-between text-sm" variants={item}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-border accent-primary" />
            <span className="text-muted-foreground">Remember me</span>
          </label>
          <a href="#" className="text-primary hover:underline font-medium">Forgot password?</a>
        </motion.div>

        <motion.div variants={item}>
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold font-display relative overflow-hidden"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>
        </motion.div>

        <motion.p className="text-center text-sm text-muted-foreground" variants={item}>
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline font-medium">Sign up</a>
        </motion.p>
      </form>
    </motion.div>
  );
};

export default LoginForm;
