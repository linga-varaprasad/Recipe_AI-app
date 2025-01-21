import { Container } from "@/components/ui/Container";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";

export default function Favorites() {
  return (
    <Container className="space-y-6 pb-20">
      <h1 className="text-2xl font-bold">Your Favorites</h1>
      <RecipeGrid />
    </Container>
  );
}