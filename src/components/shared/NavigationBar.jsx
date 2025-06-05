"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import flyhighLogo from '../../assets/images/flyhigh-logo-wide.png';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const sections = [
  {
    title: "Beranda",
    href: "#",
  },
  {
    title: "Tentang Kami",
    href: "#",
  },
  {
    title: "Produk",
    href: "#",
  },
  {
    title: "Portofolio",
    href: "#",
  },
  {
    title: "Kontak",
    href: "#",
  },
]

export default function NavigationBar() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section.href.replace("#", ""))
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.href
            break
          }
        }
      }
      if (!currentSection && window.scrollY < 100) {
        currentSection = "#home";
      }
      setActiveSection(currentSection);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Home" onClick={() => scrollToSection("#home")}>
            <Image
              src={flyhighLogo}
              alt="Flyhigh Sinergi Indonesia"
              width={200}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={navigationMenuTriggerStyle({ className: "font-body text-base bg-transparent text-gray-100 hover:bg-zinc-800 hover:text-gray-100 focus:bg-zinc-800 focus:text-gray-100 data-[active]:bg-zinc-800/80" })}
                >
                  Beranda
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="bg-zinc-800 border-zinc-700"
                >
                  <ul className="grid w-[200px] gap-2 p-4">
                    {sections.map((section) => (
                      <li key={section.href}>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => scrollToSection(section.href)}
                            className={`block w-full text-left px-3 py-2 text-sm font-body text-gray-400 hover:bg-zinc-700 hover:text-gray-100 rounded-md transition-colors cursor-pointer ${
                              activeSection === section.href ? "bg-zinc-700 font-semibold" : "font-normal"
                            }`}
                            aria-current={activeSection === section.href ? "page" : undefined}
                          >
                            {section.title}
                          </button>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle({ className: "font-body text-base bg-transparent text-gray-100 hover:bg-zinc-800 hover:text-gray-100 focus:bg-zinc-800 focus:text-gray-100 data-[active]:bg-zinc-800/80" })}
                >
                  <Link href="/career">
                    Karir
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button
                  onClick={() => scrollToSection("#")}
                  className="font-body bg-gray-200 text-zinc-900 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                  Hubungi Kami
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} className="text-gray-100" /> : <Menu size={24} className="text-gray-100" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-700 bg-zinc-900">
            <nav className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section.href}
                  onClick={() => {
                    scrollToSection(section.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`px-4 py-2 text-left font-body text-gray-100 hover:bg-zinc-700 rounded-md transition-colors cursor-pointer ${
                    activeSection === section.href ? "bg-zinc-700 font-semibold" : "font-normal"
                  }`}
                  aria-current={activeSection === section.href ? "page" : undefined}
                >
                  {section.title}
                </button>
              ))}
              <Link
                href="/career"
                className="px-4 py-2 text-left font-body text-gray-100 hover:bg-zinc-700 rounded-md transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Karir
              </Link>
              <Button
                onClick={() => {
                  scrollToSection("#contact")
                  setIsMobileMenuOpen(false)
                }}
                className="mx-4 my-2 font-body bg-gray-200 text-zinc-900 hover:bg-gray-300 rounded-full cursor-pointer"
              >
                Hubungi Kami
              </Button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}