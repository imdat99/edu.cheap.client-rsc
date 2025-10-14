"use client"
import { Link } from 'react-router'
import LayoutNavLink from '../root/LayoutNavLink'
import { useEffect, useRef, useState } from 'react';
import { cn } from 'lib/utils';

const RootHeader = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [hasShadow, setHasShadow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > headerRef.current?.offsetHeight!+20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
     <header
          ref={headerRef}
          className={cn("[grid-area:header] z-10 bg-dark min-h-14 !z-[100] transition-[padding] ease p-0", hasShadow && "bg-transparent pt-2")}
          style={{ position: "sticky", top: 0, maxHeight: "calc(0px + 100vh)" }}
        >
          <div className="mx-auto rounded-xl backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 py-2 bg-dark w-full h-full [:where(&)]:max-w-7xl flex items-center container">
            <Link to="/">
              <img
                className="dark:block hidden max-h-[45px] w-full"
                src="https://my-next-app.imdat2999.workers.dev/assets/images/file-white.svg"
              />
              <img
                className="dark:hidden max-h-[45px] w-full"
                src="https://my-next-app.imdat2999.workers.dev/assets/images/file-white.svg"
              />
            </Link>
            <div className="flex-1" data-flux-spacer="" />
            <div className="max-lg:hidden mr-4">
              <LayoutNavLink />
            </div>
            <div className="pl-4 pr-4">
              <button
                type="button"
                className="btn btn-secondary"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </header>
    </>
  )
}

export default RootHeader