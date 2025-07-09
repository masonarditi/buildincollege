import { Star } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface ReviewComponentProps {
  count?: number;
  avatars?: {
    src: string;
    alt: string;
  }[];
}

const ReviewComponent = ({
  count = 200,
  avatars = [
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
      alt: "Avatar 1",
    },
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
      alt: "Avatar 2",
    },
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
      alt: "Avatar 3",
    },
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
      alt: "Avatar 4",
    },
    {
      src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
      alt: "Avatar 5",
    },
  ],
}: ReviewComponentProps) => {
  return (
    <div className="mx-auto flex w-fit flex-col items-center gap-4 sm:flex-row">
      <span className="mx-4 inline-flex items-center -space-x-4">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="size-14 border">
            <AvatarImage src={avatar.src} alt={avatar.alt} />
          </Avatar>
        ))}
      </span>
      <div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="size-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="text-left font-medium text-muted-foreground">
          Used by {count}+ builders
        </p>
      </div>
    </div>
  );
};

export { ReviewComponent };
