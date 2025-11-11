"use client";

import {
  Button,
  Input,
  PhoneNumberInput,
  Textarea,
  DatePicker,
  TimePicker,
} from "@/components/ui";
import { Spinner } from "@/components/ui/spinner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { cn } from "@/lib/utils";
import {
  isPossiblePhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import toast from "react-hot-toast";
import { errorHandler } from "@/utils/error-handler";
import { formatISO } from "date-fns";

// Validation schema
const demoBookingSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  company: yup.string().required("Company name is required"),
  roleTitle: yup.string().required("Role/Title is required"),
  email: yup
    .string()
    .required("Business email is required")
    .email("Please enter a valid email address"),
  preferredDate: yup.date().required("Preferred date is required"),
  preferredTimeSlot: yup.date().required("Preferred time slot is required"),
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

export type DemoBookingFormData = yup.InferType<typeof demoBookingSchema>;

export const DemoBookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<DemoBookingFormData>({
    resolver: yupResolver(demoBookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      roleTitle: "",
      email: "",
      preferredDate: undefined,
      preferredTimeSlot: undefined,
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: DemoBookingFormData) => {
    setIsSubmitting(true);
    const formData = {
      ...data,
      preferredDate: data.preferredDate
        ? formatISO(data.preferredDate)
        : undefined,
      preferredTimeSlot: data.preferredTimeSlot
        ? formatISO(data.preferredTimeSlot)
        : undefined,
      phoneNumber: parsePhoneNumber(data.phoneNumber)?.number as string,
    };
    try {
      console.log("Demo booking submitted:", formData);
      toast.success(
        "Thank you for booking a demo! We'll get back to you soon.",
      );
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(errorHandler(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedPhoneNo = watch("phoneNumber");
  const watchedDate = watch("preferredDate");
  const watchedTime = watch("preferredTimeSlot");
  const isLoading = isSubmitting;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mx-auto max-w-120 w-full"
    >
      <fieldset className="flex flex-col gap-6" disabled={isLoading}>
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
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

          <div className="space-y-2">
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
        <div className="space-y-2">
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

        {/* Role / Title */}
        <div className="space-y-2">
          <label
            htmlFor="roleTitle"
            className="text-sm font-medium text-foreground"
          >
            Role / Title
          </label>
          <Input
            id="roleTitle"
            placeholder="e.g. Operations Manager"
            {...register("roleTitle")}
            className={cn("h-12", errors.roleTitle && "border-red-500")}
          />
          {errors.roleTitle && (
            <p className="text-sm text-red-500">{errors.roleTitle.message}</p>
          )}
        </div>

        {/* Business Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Business Email
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

        {/* Preferred Date and Time Slot Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Preferred Date
            </label>
            <DatePicker
              name="preferredDate"
              value={watchedDate}
              placeholderText="Select date"
              handleChange={({ value }) => {
                setValue("preferredDate", value as Date, {
                  shouldValidate: true,
                });
              }}
            />
            {errors.preferredDate && (
              <p className="text-sm text-red-500">
                {errors.preferredDate.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-foreground">
              Preferred Time Slot
            </label>
            <TimePicker
              name="preferredTimeSlot"
              value={watchedTime}
              placeholderText="Select time"
              handleChange={({ value }) => {
                setValue("preferredTimeSlot", value as Date, {
                  shouldValidate: true,
                });
              }}
            />
            {errors.preferredTimeSlot && (
              <p className="text-sm text-red-500">
                {errors.preferredTimeSlot.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Phone number
          </label>
          <div className="flex gap-2">
            <PhoneNumberInput
              name="phoneNumber"
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
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell us your biggest inventory challenge..."
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
