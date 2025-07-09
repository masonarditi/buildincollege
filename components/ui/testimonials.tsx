import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialData {
  testimony: string;
  username: string;
  avatar: string;
}

const testimonials: TestimonialData[] = [
  {
    testimony: "Yo this website is super helpful",
    username: "JShankarpure",
    avatar: "https://pbs.twimg.com/profile_images/1824509052946092032/EnePry3o_400x400.jpg"
  },
  {
    testimony: "Thanks for making such a good resource",
    username: "krayondev", 
    avatar: "https://pbs.twimg.com/profile_images/1925215793047887872/sjMmTLNt_400x400.jpg"
  },
  {
    testimony: "holy",
    username: "shivambuilds",
    avatar: "https://pbs.twimg.com/profile_images/1904319753537122304/9QjLNJ1W_400x400.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border shadow-sm rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="size-14 ring-2 ring-gray-100">
                <AvatarImage src={testimonial.avatar} alt={testimonial.username} />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                  {testimonial.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium leading-relaxed">
                  "{testimonial.testimony}"
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  @{testimonial.username}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Testimonials }; 