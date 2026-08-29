import technologies from "@/data/technologies.json";
const techs = technologies as { name: string }[];
export default function About() {
  return (
    <div className="h-[90dvh] flex flex-row justify-center items-center gap-3">
      <div className="flex flex-col text-balance w-[37dvw]">
        <p className="font-mono text-xs text-accent -ml-1 mb-3">03 / PROFILE</p>
        <p className="font-display text-8xl font-black">ABOUT</p>
        <p className="font-sans text-text-secondary text-lg text-balance w-[37dvw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          molestiae tempora nisi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Saepe impedit distinctio voluptatum alias molestiae,
          explicabo dolor consequatur ipsam magni ad.
        </p>
        <p className="my-6 font-sans text-text-muted  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          quisquam ducimus nisi ullam dolorum nemo.
        </p>
        <p className=" font-sans text-text-muted  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          quis?
        </p>
      </div>
      <div>
        <p className="text-muted-foreground/60 mb-2 font-light text-lg font-display ">
          Technologies
        </p>
        <div className="grid grid-cols-6 gap-1.5">
          {techs.map((tech) => (
            <p className="   border-muted-foreground/25 border p-1 px-2 font-display text-muted-foreground/25 transition-all duration-300 ease-in-out text-sm hover:border-accent hover:text-text-primary">
              {tech.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
