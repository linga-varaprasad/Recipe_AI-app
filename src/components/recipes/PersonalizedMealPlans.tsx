import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MEAL_PLANS = [
  {
    id: 1,
    title: "Healthy Week Plan",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    meals: 5,
  },
  {
    id: 2,
    title: "Quick & Easy",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    meals: 3,
  },
];

export function PersonalizedMealPlans() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Your Meal Plans</h2>
      <div className="grid grid-cols-2 gap-4">
        {MEAL_PLANS.map((plan) => (
          <Card key={plan.id} className="border-none">
            <CardContent className="p-0">
              <AspectRatio ratio={1}>
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="rounded-lg object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-medium text-sm">{plan.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {plan.meals} meals
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}