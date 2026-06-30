import { submitLeadAction } from "@/lib/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const industries = ["Healthcare", "Education", "Hospitality", "Premium Local Business", "Other"];
const budgets = ["₹15k - ₹35k", "₹35k - ₹80k", "₹80k - ₹1.5L", "₹1.5L+"];

export function ContactForm() {
  return (
    <form action={submitLeadAction} className="card-border grid gap-5 rounded-[2rem] p-7">
      <div className="grid gap-5 md:grid-cols-2">
        <Input name="name" placeholder="Name" required />
        <Input name="phone" placeholder="Phone" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="company" placeholder="Company" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <select
          name="industry"
          className="h-12 rounded-2xl border bg-surface px-4 text-sm text-foreground"
          defaultValue=""
          required
        >
          <option value="" disabled>Select industry</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
        <select
          name="budget"
          className="h-12 rounded-2xl border bg-surface px-4 text-sm text-foreground"
          defaultValue=""
          required
        >
          <option value="" disabled>Select budget</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>{budget}</option>
          ))}
        </select>
      </div>
      <Textarea name="message" placeholder="Tell us about your goals, bottlenecks, or timeline." required />
      <Button type="submit">Book Strategy Session</Button>
    </form>
  );
}
