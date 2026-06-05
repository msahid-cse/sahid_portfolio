import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const FROM_EMAIL = "Md. Sahid Portfolio <onboarding@resend.dev>";
export const TO_EMAIL = "msahid.cse@gmail.com";
