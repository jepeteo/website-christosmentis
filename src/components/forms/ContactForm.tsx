"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactSchema, type ContactFormData } from "@/lib/validations/schemas";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setFormState("success");
      reset();
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  };

  if (formState === "success") {
    return (
      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <h3 className="mb-2 font-display text-xl font-semibold text-cm-headline">
          Message Sent!
        </h3>
        <p className="mb-4 text-cm-body">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <Button onClick={() => setFormState("idle")} variant="ghost">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-cm-headline"
        >
          Name <span className="text-cm-primary">*</span>
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          {...register("name")}
          disabled={formState === "loading"}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-cm-headline"
        >
          Email <span className="text-cm-primary">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          {...register("email")}
          disabled={formState === "loading"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-cm-headline"
        >
          Subject <span className="text-cm-primary">*</span>
        </label>
        <Input
          id="subject"
          type="text"
          placeholder="What's this about?"
          {...register("subject")}
          disabled={formState === "loading"}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-cm-headline"
        >
          Message <span className="text-cm-primary">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Your message..."
          rows={6}
          {...register("message")}
          disabled={formState === "loading"}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Error Message */}
      {formState === "error" && errorMessage && (
        <div className="flex items-start space-x-2 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={formState === "loading"}
        className="w-full"
      >
        {formState === "loading" ? (
          <>
            <span className="mr-2">Sending...</span>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-center text-xs text-cm-muted">
        I'll respond to your email address as soon as possible.
      </p>
    </form>
  );
}
