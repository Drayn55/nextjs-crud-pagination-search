"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(6),
  phone: z.string().min(11).max(32),
  nim: z.string().min(8).max(32),
  nomorVa: z.string().min(12).max(32),
  posisi: z.string().min(2).max(32),
  title: z.string().min(2).max(32),
});

// export const getContactCount = async () => {
//   const count = await prisma.contact;
//   return count;
// };

export const saveContact = async (prevState: any, formData: FormData) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contact.create({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
        nim: validatedFields.data.nim,
        nomorVa: validatedFields.data.nomorVa,
        posisi: validatedFields.data.posisi,
        title: validatedFields.data.title,
      },
    });
  } catch (error) {
    return {
      message: "Failed to create contact",
    };
  }
  revalidatePath("/contacts");
  redirect("/contacts");
};

export const updateContact = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.contact.update({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
        nim: validatedFields.data.nim,
        nomorVa: validatedFields.data.nomorVa,
        posisi: validatedFields.data.posisi,
        title: validatedFields.data.title,
      },
      where: { id },
    });
  } catch (error) {
    return {
      message: "Failed to update contact",
    };
  }
  revalidatePath("/contacts");
  redirect("/contacts");
};

export const deleteContact = async (
  id: string
) => {
 

  try {
    await prisma.contact.delete({
      where: { id }
    });
  } catch (error) {
    return {
      message: "Failed to delete contact",
    };
  }
  revalidatePath("/contacts");
};
