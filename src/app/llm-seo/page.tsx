import { buildMetadata } from "@/lib/metadata";
import { SharedAiPage } from "@/app/shared-ai-page";

export const metadata = buildMetadata({
  title: "LLM SEO",
  description: "Patrika's approach to search strategy for model-generated discovery experiences.",
  path: "/llm-seo",
});

export default function LlmSeoPage() {
  return <SharedAiPage title="LLM SEO" />;
}
