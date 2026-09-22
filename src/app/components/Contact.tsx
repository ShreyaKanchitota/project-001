
"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Buttons from "./Buttons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const cleaned = phone.replace(/\D/g, "");
    const indianMobile = /^[6-9]\d{9}$/;

    if (!indianMobile.test(cleaned)) {
      setPhoneError("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    setPhoneError("");
    setSubmitted(true);

    // Sprint 3:
    // Save to Supabase
    // Send email
    // Send WhatsApp
  }

  return (
    <section
      id="contact"
      className="relative z-10 bg-zinc-950 px-6 py-28 text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <SectionHeading
            eyebrow="Book a Trial"
            title="Your strongest self starts here."
          />

          <p className="mt-6 leading-8 text-zinc-400">
            Fill in your details and our team will contact you within 24 hours to
            schedule your complimentary workout session.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-sm text-zinc-500">Location</p>
              <p className="font-medium">Nagarbhavi, Bangalore</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Hours</p>
              <p className="font-medium">Open 24/7</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Phone</p>
              <p className="font-medium">+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="rounded-[32px] border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-black">
                ✓
              </div>

              <h3 className="text-2xl font-bold">Trial Requested!</h3>

              <p className="mt-3 text-zinc-400">
                We'll contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Full Name
                </label>

                <input
                  required
                  type="text"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-white"
                  placeholder="Shreya K S"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Phone Number
                </label>

                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const digits = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    setPhone(digits);

                    if (phoneError) setPhoneError("");
                  }}
                  className={`w-full rounded-xl border bg-zinc-900 px-4 py-3 text-white outline-none transition ${
                    phoneError
                      ? "border-red-500"
                      : "border-zinc-800 focus:border-white"
                  }`}
                  placeholder="9876543210"
                />

                {phoneError && (
                  <p className="mt-2 text-sm text-red-400">{phoneError}</p>
                )}
              </div>

              {/* Goal */}
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Fitness Goal
                </label>

                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-white"
                  placeholder="Weight loss, strength, muscle gain..."
                />
              </div>

              <Buttons>Request Free Trial</Buttons>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}