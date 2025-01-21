import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const navigate = useNavigate();

  return (
    <Container className="pb-20">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Grilled Salmon</h1>
        <Button variant="ghost" size="icon">
          <Heart className="h-6 w-6" />
        </Button>
      </div>

      <div className="space-y-6">
        <img
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
          alt="Grilled Salmon"
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="flex justify-around py-4 bg-primary rounded-lg">
          <div className="text-center">
            <Clock className="h-5 w-5 mx-auto mb-1" />
            <span className="text-sm">30 min</span>
          </div>
          <div className="text-center">
            <Users className="h-5 w-5 mx-auto mb-1" />
            <span className="text-sm">4 servings</span>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Ingredients</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-20">400g</span>
              <span>Fresh salmon fillet</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-20">2 tbsp</span>
              <span>Olive oil</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-20">1 tsp</span>
              <span>Sea salt</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Instructions</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="font-bold">1.</span>
              <p>Preheat your grill to medium-high heat (around 375°F to 400°F).</p>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">2.</span>
              <p>Brush the salmon with olive oil and season with salt and pepper.</p>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">3.</span>
              <p>Grill for 4-6 minutes per side until the fish flakes easily.</p>
            </li>
          </ol>
        </div>
      </div>
    </Container>
  );
}