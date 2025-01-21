import { Container } from "@/components/ui/Container";
import { FeaturedRecipes } from "@/components/recipes/FeaturedRecipes";
import { PersonalizedMealPlans } from "@/components/recipes/PersonalizedMealPlans";
import { Button } from "@/components/ui/button";
import { Utensils, ShoppingCart, Heart } from "lucide-react";

export default function Home() {
  return (
    <Container className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Savory Simplify</h1>
      </header>

      <FeaturedRecipes />
      
      <PersonalizedMealPlans />
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <Button variant="secondary" className="w-full">
          <Utensils />
          Meal Plan
        </Button>
        <Button variant="secondary" className="w-full">
          <ShoppingCart />
          Grocery
        </Button>
        <Button variant="secondary" className="w-full">
          <Heart />
          Favorites
        </Button>
      </div>
    </Container>
  );
}