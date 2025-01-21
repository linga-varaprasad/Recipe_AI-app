import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Edit2, Save, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const MEAL_PLANS = [
  {
    id: 1,
    title: "Current Week Plan",
    date: "March 18-24",
    meals: [
      { id: 1, name: "Grilled Salmon", time: "Dinner", day: "Monday" },
      { id: 2, name: "Vegetarian Pasta", time: "Lunch", day: "Tuesday" },
    ]
  },
  {
    id: 2,
    title: "Last Week Plan",
    date: "March 11-17",
    meals: [
      { id: 3, name: "Chicken Stir Fry", time: "Dinner", day: "Wednesday" },
      { id: 4, name: "Quinoa Bowl", time: "Lunch", day: "Thursday" },
    ]
  }
];

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

      <Button className="w-full" variant="secondary">
        <Plus className="mr-2 h-4 w-4" />
        Generate New Meal Plan
      </Button>

      <div className="space-y-4">
        {MEAL_PLANS.map((plan) => (
          <Card key={plan.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground">{plan.date}</p>
                </div>
              </div>
              <div className="space-y-2">
                {plan.meals.map((meal) => (
                  <Link key={meal.id} to={`/recipe/${meal.id}`}>
                    <div className="flex justify-between items-center p-2 hover:bg-accent rounded-lg">
                      <div>
                        <p className="font-medium">{meal.name}</p>
                        <p className="text-sm text-muted-foreground">{meal.time} - {meal.day}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}