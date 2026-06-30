import { buildMetadata } from "@/lib/metadata";
import { SharedAiPage } from "@/app/shared-ai-page";

export const metadata = buildMetadata({
  title: "ChatGPT Optimization",
  description: "How Patrika approaches brand visibility in ChatGPT-influenced recommendation flows.",
  path: "/chatgpt-optimization",
});

export default function ChatGptOptimizationPage() {
  return <SharedAiPage title="ChatGPT Optimization" />;
}
