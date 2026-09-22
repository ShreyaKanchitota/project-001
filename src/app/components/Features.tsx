import Card from "./Card";
import SectionHeading from "./SectionHeading";

export default function Features() {
  return (
    <section
      id="features"
      className="relative z-10 bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why GymHQ"
          title="Built for people who take fitness seriously"
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="mb-5 text-4xl">🏋️</div>
            <h3 className="mb-3 text-xl font-semibold">
              Premium Equipment
            </h3>
            <p className="text-zinc-400">
              Olympic racks, free weights, machines and functional training zones.
            </p>
          </Card>

          <Card>
            <div className="mb-5 text-4xl">📈</div>
            <h3 className="mb-3 text-xl font-semibold">
              Progress Tracking
            </h3>
            <p className="text-zinc-400">
              Monitor workouts, attendance and body measurements over time.
            </p>
          </Card>

          <Card>
            <div className="mb-5 text-4xl">👨‍🏫</div>
            <h3 className="mb-3 text-xl font-semibold">
              Expert Coaching
            </h3>
            <p className="text-zinc-400">
              Personalized guidance from certified trainers for every goal.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}