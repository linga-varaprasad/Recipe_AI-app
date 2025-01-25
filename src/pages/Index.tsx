import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to preferences. We'll add real auth later
    navigate("/preferences");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <Container className="flex flex-col items-center justify-center min-h-screen space-y-8 animate-fadeIn">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">
            MealMker
          </h1>
          <p className="text-lg text-muted-foreground">
            Your personal AI-powered recipe assistant
          </p>
        </div>
        
        <div className="w-full max-w-xs space-y-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {isSignUp ? "Create an account" : "Welcome back"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
                <div className="text-center text-sm">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-primary hover:underline"
                  >
                    {isSignUp
                      ? "Already have an account? Sign in"
                      : "Don't have an account? Sign up"}
                  </button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Container>
    </div>
  );
};

export default Index;