import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";
import { RefreshCw, Edit2, Save } from "lucide-react";

export default function MealPlan() {
  return (
    <Container className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Weekly Plan</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Save className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <RecipeGrid />
    </Container>
  );
}