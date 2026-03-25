import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-display text-accent-foreground">
          Welcome back
        </h1>
        <p className="text-muted-foreground text-sm">
          Sign in to your account to continue
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-muted-foreground text-xs uppercase tracking-wider">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10 h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-muted-foreground text-xs uppercase tracking-wider">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-10 pr-10 h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded border-border accent-primary" />
            <span className="text-muted-foreground">Remember me</span>
          </label>
          <a href="#" className="text-primary hover:underline font-medium">Forgot password?</a>
        </div>

        <Button type="submit" className="w-full h-12 text-base font-semibold font-display">
          Sign In
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="#" className="text-primary hover:underline font-medium">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
