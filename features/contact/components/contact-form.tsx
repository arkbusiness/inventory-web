"use client";

import { Button, Input, PhoneNumberInput } from "@/components/ui";
import { Textarea } from "@/components/ui/form/textarea";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { errorHandler } from "@/utils/error-handler";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  isPossiblePhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import * as yup from "yup";

const contactFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  company: yup.string().required("Company name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  countryCode: yup.string().required("Country code is required"),
  phoneNumber: yup
    .string()
    .trim()
    .test({
      name: "phone",
      message: "Enter a valid phone number",
      test(value, ctx) {
        if (!value) {
          return ctx.createError({
            message: "Phone number is required",
          });
        }

        return isPossiblePhoneNumber(value);
      },
    })
    .required("Phone number is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = yup.InferType<typeof contactFormSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      countryCode: "+234",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    const formData = {
      ...data,
      phoneNumber: parsePhoneNumber(data.phoneNumber)?.number as string,
    };
    try {
      // Log form data or handle API call here
      console.log("Form submitted:", formData);
      toast.success("Thank you for your message! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(errorHandler(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedPhoneNo = watch("phoneNumber");
  const isLoading = isSubmitting;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mx-auto max-w-120 w-full"
    >
      {/* First Name and Last Name Row */}
      <fieldset className="flex flex-col gap-6" disabled={isLoading}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-foreground"
            >
              First name
            </label>
            <Input
              id="firstName"
              placeholder="First name"
              {...register("firstName")}
              className={cn("h-12", errors.firstName && "border-red-500")}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-foreground"
            >
              Last name
            </label>
            <Input
              id="lastName"
              placeholder="Last name"
              {...register("lastName")}
              className={cn("h-12", errors.lastName && "border-red-500")}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="company"
            className="text-sm font-medium text-foreground"
          >
            Company
          </label>
          <Input
            id="company"
            placeholder="Dangote Cement Industry"
            {...register("company")}
            className={cn("h-12", errors.company && "border-red-500")}
          />
          {errors.company && (
            <p className="text-sm text-red-500">{errors.company.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
            className={cn("h-12", errors.email && "border-red-500")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Phone number
          </label>
          <div className="flex gap-2">
            <PhoneNumberInput
              name="contactPhone"
              value={watchedPhoneNo}
              onChange={(value) => {
                if (value) {
                  setValue("phoneNumber", value, {
                    shouldValidate: true,
                  });
                }
              }}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message..."
            {...register("message")}
            className={cn(
              "min-h-[140px] resize-none",
              errors.message && "border-red-500",
            )}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : "Submit"}
        </Button>
      </fieldset>
    </form>
  );
};
