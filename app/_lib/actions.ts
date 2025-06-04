"use server";

import { z, ZodError } from "zod";
import { ContactFormData } from "../_types/contactFormData.type";
import { ContactFormResponse } from "../_types/contactFormResponse.type";
import sendContactEmail from "./sendContactEmail";
import { cookies } from "next/headers";
import { setCookieResponse } from "../_types/setCookieResponse.type";

export async function sendMessage(
  _: any,
  formData: FormData
): Promise<ContactFormResponse> {
  // extract form data in object
  const data = Object.fromEntries(formData.entries()) as ContactFormData;

  // Validation
  // create schema
  const contactSchema = z.object({
    firstName: z
      .string({
        required_error: "First name is required",
      })
      .trim()
      .min(1, "First name is too short"),
    lastName: z
      .string({
        required_error: "Last name is required",
      })
      .trim()
      .min(1, "Last name is too short"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Invalid email address"),
    message: z
      .string({
        required_error: "Message is required",
      })
      .trim()
      .min(10, "Message is too short"),
  });

  // parse against schema
  try {
    contactSchema.parse(data);
  } catch (err) {
    // error handling
    if (err instanceof ZodError) {
      return {
        message: err.issues[0].message,
        success: false,
        payload: formData,
      };
    }
  }

  // Email
  try {
    // try to send email
    await sendContactEmail(data);
  } catch (err) {
    // error handling
    console.error(err);
    return {
      message: "Message failed to send!",
      success: false,
      payload: formData,
    };
  }

  return {
    message: "Message sent!",
    success: true,
  };
}

export async function setCookie() {
  console.log("cookie");
  const cookieStore = await cookies();
  cookieStore.set("over21", "true");

  // return Response.json({}, { status: 200 });
}
