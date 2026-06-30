import { buildMetadata } from "@/lib/metadata";
import { SharedAiPage } from "@/app/shared-ai-page";

export const metadata = buildMetadata({
  title: "Generative Engine Optimization",
  description: "A strategic content and authority approach for generative recommendation engines.",
  path: "/generative-engine-optimization",
});

export default function GenerativeEngineOptimizationPage() {
  return <SharedAiPage title="Generative Engine Optimization" />;
}
