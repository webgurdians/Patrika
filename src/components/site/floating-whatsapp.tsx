import { MessageCircleMore } from "lucide-react";

export function FloatingWhatsApp() {
  const href =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    "https://wa.me/916297648194?text=I%20want%20to%20book%20a%20strategy%20call";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-20 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-2xl hover:-translate-y-1 md:hidden"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}
