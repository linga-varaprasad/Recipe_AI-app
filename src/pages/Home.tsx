import { Container } from "@/components/ui/Container";
import { FeaturedRecipes } from "@/components/recipes/FeaturedRecipes";
import { PersonalizedMealPlans } from "@/components/recipes/PersonalizedMealPlans";
import { Button } from "@/components/ui/button";
import { Bell, Settings, Utensils, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="space-y-6 pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MealMker</h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      <FeaturedRecipes />
      
      <PersonalizedMealPlans />
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <Link to="/meal-plan">
          <Button variant="secondary" className="w-full">
            <Utensils className="mr-2" />
            Meal Plan
          </Button>
        </Link>
        <Link to="/grocery">
          <Button variant="secondary" className="w-full">
            <ShoppingCart className="mr-2" />
            Grocery
          </Button>
        </Link>
        <Link to="/favorites">
          <Button variant="secondary" className="w-full">
            <Heart className="mr-2" />
            Favorites
          </Button>
        </Link>
      </div>
    </Container>
  );
}