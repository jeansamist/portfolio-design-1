import { Topbar } from "@/components/Topbar";
import Image from "@rasenganjs/image";
import { Outlet, LayoutComponent, Link } from "rasengan";
import me from "@/assets/images/me.jpg";
import githubLogo from "@/assets/images/GithubLogo.svg";
import linkedinLogo from "@/assets/images/LinkedinLogo.svg";
import twitterLogo from "@/assets/images/TwitterLogo.svg";
import { useLottie } from "lottie-react";
import animationData from "@/assets/lottie/background.json";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

const AppLayout: LayoutComponent = () => {
  const { View, play } = useLottie({
    animationData: animationData,
    loop: true,
    autoPlay: false,
  });

  useEffect(() => {
    play();
  }, []);

  return (
    <div className="bg-background">
      <div className="fixed z-10 bottom-0 w-[125%] left-1/2 opacity-10 -translate-x-1/2 pointer-events-none">
        {View}
      </div>
      <div className="h-screen overflow-y-auto relative z-20 text-sm text-primary">
        <Topbar />
        <main className="w-full">
          <div className="container mx-auto gap-4 flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5">
              <div className="sticky top-24">
                {/* User informations */}
                <div className="pt-4 space-y-4">
                  <Image
                    src={me}
                    alt="Me"
                    className="!w-40 !h-40 rounded-2xl"
                  />
                  <div className="space-y-2">
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                      I am BAHA Ephraim
                    </h1>
                    <p className="text-base md:text-xl text-primary/75 font-medium leading-normal">
                      Frontend developer - Designer - RasenganJS contributor
                    </p>
                    <div className="flex items-center gap-2">
                      <Link
                        to="https://github.com/jeansamist"
                        className="transition-transform hover:scale-105 hover:-translate-y-0.5"
                      >
                        <Image
                          src={githubLogo}
                          alt="twiter"
                          width={32}
                          height={32}
                        />
                      </Link>
                      <Link
                        to="https://linkedin.com/jeansamist"
                        className="transition-transform hover:scale-105 hover:-translate-y-0.5"
                      >
                        <Image
                          src={linkedinLogo}
                          alt="twiter"
                          width={32}
                          height={32}
                        />
                      </Link>
                      <Link
                        to="https://twitter.com/jeansamist"
                        className="transition-transform hover:scale-105 hover:-translate-y-0.5"
                      >
                        <Image
                          src={twitterLogo}
                          alt="twiter"
                          width={32}
                          height={32}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              {/* Content */}
              <Outlet />
            </div>
          </div>
          <div className="p-6 md:p-12">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

AppLayout.path = "/";

export default AppLayout;
