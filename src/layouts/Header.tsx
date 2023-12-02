import yticon from "../assets/youtube_icon.png";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../context/sidebarContext";

export default function Header() {
  const [showSearchBar, setSetshowSearchBar] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      {/* left side */}
      <HeaderFirstSection hidden={showSearchBar} />
      {/* middle side / search bar */}
      <form
        className={`gap-4 flex-grow justify-center ${
          showSearchBar ? "flex" : "hidden md:flex"
        }`}
      >
        {showSearchBar && (
          <Button
            onClick={() => setSetshowSearchBar(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}

        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Buscar"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-purple-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      {/* right side */}
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showSearchBar ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setSetshowSearchBar(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

type HeaderFirstSectionProps = {
  hidden?: boolean;
};

export function HeaderFirstSection({
  hidden = false,
}: HeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={`flex gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button variant={"ghost"} size={"icon"} onClick={toggle}>
        <Menu />
      </Button>
      <a href="/">
        <div className="flex justify-center gap-2 items-center">
          <img src={yticon} alt="yt logo" className="h-7" />
          <p className="text-black font-bold">TypeTube</p>
        </div>
      </a>
    </div>
  );
}
