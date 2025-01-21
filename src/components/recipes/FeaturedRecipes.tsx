import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FEATURED_RECIPES = [
  {
    id: 1,
    title: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    time: "30 min",
  },
  {
    id: 2,
    title: "Vegetarian Pasta",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    time: "25 min",
  },
];

export function FeaturedRecipes() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Featured Recipes</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {FEATURED_RECIPES.map((recipe) => (
            <CarouselItem key={recipe.id}>
              <Card className="border-none">
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-medium">{recipe.title}</h3>
                    <p className="text-sm text-muted-foreground">{recipe.time}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}