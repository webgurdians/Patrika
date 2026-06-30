import { buildMetadata } from "@/lib/metadata";
import { SharedAiPage } from "@/app/shared-ai-page";

export const metadata = buildMetadata({
  title: "Gemini Optimization",
  description: "How Patrika approaches Gemini-facing visibility for trust-based businesses.",
  path: "/gemini-optimization",
});

export default function GeminiOptimizationPage() {
  return <SharedAiPage title="Gemini Optimization" />;
}
