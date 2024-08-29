import { Link } from "rasengan";
import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "./ui/button";

export type TopbarProps = {};

export const Topbar: FunctionComponent<TopbarProps> = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | undefined>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (innerWidth < 710) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
    window.addEventListener("resize", (_e) => {
      if (innerWidth < 710) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    });
  }, []);

  return (
    <nav className="w-full h-24 sticky top-0 left-0 z-50 bg-background md:bg-background/50 backdrop-blur-3xl">
      <div className="max-w-[1536px] w-full px-6 mx-auto flex h-full items-center justify-between">
        {/* Navbar content */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold">Jeansamist</h1>
          {!isSmallScreen && (
            <>
              <Link to="#" className="font-medium text-primary/75">
                Services
              </Link>
              <Link to="#" className="font-medium text-primary/75">
                Case studies
              </Link>
              <Link to="#" className="font-medium text-primary/75">
                About me
              </Link>
              <Link to="#" className="font-medium text-primary/75">
                Contact
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-6">
          {!isSmallScreen ? (
            <Button variant={"outline"}>See my work</Button>
          ) : (
            <Button
              variant={"outline"}
              onClick={() => isSmallScreen && setIsOpen(!isOpen)}
            >
              Menu
            </Button>
          )}
        </div>
        {isSmallScreen && isOpen && (
          <div className="absolute w-full top-24 pb-4 left-0 flex flex-col gap-6 items-center bg-background backdrop-blur-xl">
            <Link to="#" className="font-medium text-primary/75">
              Services
            </Link>
            <Link to="#" className="font-medium text-primary/75">
              Case studies
            </Link>
            <Link to="#" className="font-medium text-primary/75">
              About me
            </Link>
            <Link to="#" className="font-medium text-primary/75">
              Contact
            </Link>
            <Button variant={"outline"}>See my work</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
