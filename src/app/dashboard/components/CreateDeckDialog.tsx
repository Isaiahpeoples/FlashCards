"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { createDeckAction } from "../actions";
import { toast } from "sonner";

interface CreateDeckDialogProps {
  trigger?: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

export function CreateDeckDialog({
  trigger,
  variant = "default",
  size = "default",
}: CreateDeckDialogProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);

    try {
      const input = {
        title: formData.get("title") as string,
        description: (formData.get("description") as string) || undefined,
      };

      const result = await createDeckAction(input);
      
      if (result.success) {
        toast.success("Deck created successfully!");
        setOpen(false);
        // Navigate to the new deck page
        router.push(`/decks/${result.deckId}`);
      } else {
        toast.error(result.error || "Failed to create deck");
      }
    } catch (error) {
      toast.error("Failed to create deck");
      console.error("Failed to create deck:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // Reset loading state and form when dialog closes
      setIsLoading(false);
    } else {
      // Reset form when dialog opens
      setTimeout(() => {
        formRef.current?.reset();
      }, 0);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant={variant} size={size}>
            <Plus className="mr-2 h-4 w-4" />
            Create New Deck
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Deck</DialogTitle>
          <DialogDescription>
            Create a new flashcard deck to start studying.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter deck title"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter deck description"
              disabled={isLoading}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Deck"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
