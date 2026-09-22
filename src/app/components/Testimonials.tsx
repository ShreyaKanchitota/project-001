import Card from "./Card";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Priya N.",
    role: "Software Engineer",
    quote:
      "Lost 18 kg in 9 months. The coaches kept me consistent and motivated.",
  },
  {
    name: "Rahul K.",
    role: "Business Owner",
    quote:
      "Best equipment in the area. It feels like a premium fitness club.",
  },
  {
    name: "Ayesha M.",
    role: "Medical Student",
    quote:
      "Tracking my workouts helped me finally stay disciplined.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-10 bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real members. Real transformations."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((person) => (
            <Card key={person.name}>
              <div className="mb-5 text-3xl">⭐⭐⭐⭐⭐</div>

              <p className="text-zinc-300">“{person.quote}”</p>

              <div className="mt-8">
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-sm text-zinc-500">{person.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}