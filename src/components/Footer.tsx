import { FOOTER } from "@/constants"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <div className="bg-black text-white py-20">
            <div className="container mx-auto">
              <div className="flex flex-wrap border-b border-neutral-700">
                <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
                  <h2>OrchidHomes</h2>
                  <p className="lg:max-w-sm py-8 text-base">
                    {FOOTER.description}
                  </p>
                  <div className="flex flex-wrap gap-4 my-10">
                    <Facebook />
                    <Instagram />
                    <Linkedin />
                    <Twitter />
                  </div>
                </div>

                {FOOTER.categories.map((category, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-2/12 p-4">
                    <h3 className="font-semibold uppercase pb-4">
                    {category.name}
                  </h3>
                  <ul>
                    {category.links.map((link, index) => (
                      <li key={index} className="my-4">
                        <Link href={link.url} className="text-base hover:text-neutral-500">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  </div>
                ))}
              </div>
              <p className="p-4 text-base text-center text-neutral-500"> {FOOTER.copyright}
              </p>
            </div>
        </div>
    </>
  )
}

export default Footer