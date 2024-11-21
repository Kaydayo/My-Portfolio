import HomePage from "@/components/Home";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import { FloatingDock } from "../components/ui/floating-dock";

export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white " />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-white " />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-white " />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-white " />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white " />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white " />
      ),
      href: "#",
    },
  ];
  return (
    <div className="relative bg-white flex justify-center items-center flex-col overflow-hidden  p-0 m-0">
      <div className="w-full p-0">
     <div className="absolute bottom-[2%] left-[35%] z-50">
          <FloatingDock
            items={links}
            desktopClassName="bg-transparent"
          />
        </div>

        <HomePage />
      </div>
    </div>
  );
}
