import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

export default function Settings() {
  return (
    <Container className="space-y-6 pb-20">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch id="dark-mode" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Notifications</Label>
          <Switch id="notifications" />
        </div>

        <div className="space-y-2">
          <Label>Font Size</Label>
          <Slider
            defaultValue={[16]}
            max={24}
            min={12}
            step={1}
          />
        </div>
      </div>
    </Container>
  );
}