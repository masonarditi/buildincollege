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
      src: "https://pbs.twimg.com/profile_images/1824509052946092032/EnePry3o_400x400.jpg",
      alt: "JShankarpure",
    },
    {
      src: "https://pbs.twimg.com/profile_images/1925215793047887872/sjMmTLNt_400x400.jpg",
      alt: "krayondev",
    },
    {
      src: "https://pbs.twimg.com/profile_images/1904319753537122304/9QjLNJ1W_400x400.jpg",
      alt: "shivambuilds",
    },
    {
      src: "https://pbs.twimg.com/profile_images/1911892145515991040/x7st7XBY_400x400.jpg",
      alt: "User 4",
    },
    {
      src: "https://pbs.twimg.com/profile_images/1874056278684692480/wHMRHz7v_400x400.jpg",
      alt: "User 5",
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
          Trusted by {count}+ college builders
        </p>
      </div>
    </div>
  );
};

export { ReviewComponent };
