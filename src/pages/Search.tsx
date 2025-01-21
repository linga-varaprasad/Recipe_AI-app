import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Filter } from "lucide-react";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";

export default function Search() {
  return (
    <Container className="space-y-6 pb-20">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search recipes..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <RecipeGrid />
    </Container>
  );
}