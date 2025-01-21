import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Container className="space-y-6 pb-20">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-500">john.doe@example.com</p>
        </div>
      </div>

      <div className="space-y-2">
        <Link to="/preferences">
          <Button
            variant="outline"
            className="w-full justify-between"
            size="lg"
          >
            <span>Edit Preferences</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link to="/settings">
          <Button
            variant="outline"
            className="w-full justify-between"
            size="lg"
          >
            <span>Settings</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Container>
  );
}