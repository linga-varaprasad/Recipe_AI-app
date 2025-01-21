import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, ShoppingCart } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const groceryItems = [
  { id: 1, name: "Fresh salmon fillet", amount: "400g", category: "Protein" },
  { id: 2, name: "Olive oil", amount: "2 tbsp", category: "Pantry" },
  { id: 3, name: "Sea salt", amount: "1 tsp", category: "Spices" },
  { id: 4, name: "Pasta", amount: "500g", category: "Grains" },
  { id: 5, name: "Tomatoes", amount: "4 pcs", category: "Vegetables" },
];

export default function GroceryList() {
  const handleDeliveryService = () => {
    toast({
      title: "Connecting to delivery service",
      description: "We're preparing your order for delivery.",
    });
  };

  return (
    <Container className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Grocery List</h1>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      <div className="space-y-6">
        {Object.entries(
          groceryItems.reduce((acc, item) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
          }, {} as Record<string, typeof groceryItems>)
        ).map(([category, items]) => (
          <div key={category}>
            <h2 className="font-semibold mb-2">{category}</h2>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <Checkbox id={`item-${item.id}`} />
                  <label
                    htmlFor={`item-${item.id}`}
                    className="flex-1 text-sm flex justify-between"
                  >
                    <span>{item.name}</span>
                    <span className="text-gray-500">{item.amount}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full" size="lg" onClick={handleDeliveryService}>
        <ShoppingCart className="mr-2 h-4 w-4" />
        Order Delivery
      </Button>
    </Container>
  );
}