"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  newsletterSchema,
  type NewsletterFormData,
} from "@/lib/validations/schemas";

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to subscribe");
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg border border-cm-success/30 bg-cm-success/10 p-6 text-center">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-cm-success" />
        <h3 className="mb-2 font-display text-xl font-semibold text-cm-headline">
          Almost there!
        </h3>
        <p className="text-cm-body">
          Please check your email to confirm your subscription. We've sent you a
          confirmation link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="First Name (optional)"
          {...register("firstName")}
          disabled={isSubmitting}
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-cm-error">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email Address *"
          {...register("email")}
          disabled={isSubmitting}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-cm-error">{errors.email.message}</p>
        )}
      </div>

      {error && (
        <div className="rounded border border-cm-error/30 bg-cm-error/10 p-3 text-sm text-cm-error">
          {error}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe to Newsletter"
        )}
      </Button>

      <p className="text-center text-xs text-cm-muted">
        By subscribing, you agree to receive email updates. You can unsubscribe
        at any time. We respect your privacy.
      </p>
    </form>
  );
}
