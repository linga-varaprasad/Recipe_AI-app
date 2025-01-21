import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Camera as CameraIcon, Upload } from "lucide-react";

export default function Camera() {
  return (
    <Container className="space-y-6">
      <h1 className="text-2xl font-bold text-center">Snap or Upload Food</h1>
      
      <div className="flex flex-col gap-4 items-center justify-center min-h-[60vh]">
        <Button className="w-full max-w-sm" size="lg">
          <CameraIcon className="mr-2" />
          Use Camera
        </Button>
        <Button className="w-full max-w-sm" variant="outline" size="lg">
          <Upload className="mr-2" />
          Upload Image
        </Button>
      </div>
    </Container>
  );
}