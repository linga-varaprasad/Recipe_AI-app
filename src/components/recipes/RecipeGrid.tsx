import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, Users } from "lucide-react";

const RECIPES = [
  {
    id: 1,
    title: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    time: "30 min",
    servings: 2,
  },
  {
    id: 2,
    title: "Vegetarian Pasta",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    time: "25 min",
    servings: 4,
  },
  // Add more recipes as needed
];

export function RecipeGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {RECIPES.map((recipe) => (
        <Card key={recipe.id} className="border-none">
          <CardContent className="p-0">
            <AspectRatio ratio={1}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-lg object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="p-3">
              <h3 className="font-medium text-sm">{recipe.title}</h3>
              <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {recipe.time}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {recipe.servings} servings
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}