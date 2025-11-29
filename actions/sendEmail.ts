"use server";
import { getErrorMessage, validateString, validateEmail, sanitizeInput } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Validate email format
  if (!validateEmail(senderEmail)) {
    return {
      error: "Invalid email address",
    };
  }

  // Validate message
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // Sanitize inputs
  const sanitizedEmail = sanitizeInput(senderEmail as string);
  const sanitizedMessage = sanitizeInput(message as string);

  let data;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "surejanoop@gmail.com",
      replyTo: sanitizedEmail,
      subject: "Message from contact form",
      react: React.createElement(ContactFormEmail, {
        message: sanitizedMessage,
        senderEmail: sanitizedEmail,
      }),
    });
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    return {
      error: "Failed to send message. Please try again later.",
    };
  }

  return {
    data: data,
  };
};
