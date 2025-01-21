import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container className="flex flex-col items-center justify-center space-y-8 animate-fadeIn">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary-foreground">
          Recipe AI
        </h1>
        <p className="text-lg text-gray-600">
          Your personal AI-powered recipe assistant
        </p>
      </div>
      
      <div className="w-full max-w-xs space-y-4">
        <Button 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => navigate("/preferences")}
        >
          Get Started
        </Button>
      </div>
    </Container>
  );
};

export default Index;