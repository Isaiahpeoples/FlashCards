"use server";

import { createDeck } from "@/db/queries";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const CreateDeckSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  description: z.string().max(500, "Description too long").optional(),
});

type CreateDeckInput = z.infer<typeof CreateDeckSchema>;

export async function createDeckAction(input: CreateDeckInput) {
  try {
    // Validate input with Zod
    const validatedInput = CreateDeckSchema.parse(input);

    // Use centralized query function
    const newDeck = await createDeck(validatedInput);

    // Revalidate the dashboard to show the new deck
    revalidatePath("/dashboard");

    return { success: true, deckId: newDeck.id };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: `Validation failed: ${error.errors.map((e) => e.message).join(", ")}`,
      };
    }
    return {
      success: false,
      error: "Failed to create deck",
    };
  }
}
