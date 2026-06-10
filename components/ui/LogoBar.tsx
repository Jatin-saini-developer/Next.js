// components/ui/LogoBar.tsx

import Image from "next/image";

const logos = [
  { name: "OpenAI",  src: "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6cil1BDmvfB2sDngU5yLvT%2Fa5a5e2333ea68dfdd193a37de76318d9%2Fopenai.png&w=3840&q=75",  width: 120, height: 32 },
  { name: "Figma",   src: "https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg",   width: 100, height: 32 },
  { name: "Ramp",    src: "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75",    width: 100, height: 32 },
  { name: "NVIDIA",  src: "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F76gWUYaegCJZtpidapXRRq%2F7dd525164d8cbcc90882d89464ac9842%2Fnvidia.png&w=3840&q=75",  width: 120, height: 32 },
];

export default function LogoBar() {
  return (
    <section className="max-w-6xl mx-auto justify-between pb-10 bg-white">
        
      <p className="text-center text-sm text-gray-400 mb-6 tracking-wide">
        Trusted by teams at
      </p>
      <div className="flex items-center justify-between gap-12 flex-wrap px-6">
        {logos.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className=" hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}