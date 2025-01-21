import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const QUOTES = [
  {
    text: "Cooking is like love. It should be entered into with abandon or not at all.",
    author: "Harriet Van Horne"
  },
  {
    text: "People who love to eat are always the best people.",
    author: "Julia Child"
  }
];

export function DailyQuote() {
  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  return (
    <Card className="bg-primary">
      <CardContent className="p-4 flex items-start gap-3">
        <Quote className="h-5 w-5 text-primary-foreground mt-1" />
        <div>
          <p className="text-primary-foreground text-sm italic">{randomQuote.text}</p>
          <p className="text-primary-foreground/80 text-xs mt-1">- {randomQuote.author}</p>
        </div>
      </CardContent>
    </Card>
  );
}