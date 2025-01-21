import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const dietaryOptions = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "glutenFree", label: "Gluten Free" },
  { id: "dairyFree", label: "Dairy Free" },
  { id: "keto", label: "Keto" },
  { id: "paleo", label: "Paleo" },
];

const Preferences = () => {
  const navigate = useNavigate();
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const handlePreferenceChange = (id: string) => {
    setSelectedPreferences((prev) =>
      prev.includes(id)
        ? prev.filter((p) => p !== id)
        : [...prev, id]
    );
  };

  return (
    <Container className="space-y-8 animate-fadeIn">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-primary-foreground">
          Dietary Preferences
        </h1>
        <p className="text-gray-600">
          Tell us about your dietary preferences to personalize your experience
        </p>
      </div>

      <div className="space-y-4">
        {dietaryOptions.map((option) => (
          <div key={option.id} className="flex items-center space-x-3">
            <Checkbox
              id={option.id}
              checked={selectedPreferences.includes(option.id)}
              onCheckedChange={() => handlePreferenceChange(option.id)}
            />
            <label
              htmlFor={option.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>

      <Button
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => navigate("/home")}
      >
        Continue
      </Button>
    </Container>
  );
};

export default Preferences;