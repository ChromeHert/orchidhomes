import { HERO } from "@/constants"
import Searchform from "./Searchform"

const Hero = () => {
  return (
    <>
        <div className="hero flex min-h-screen items-center justify-center">
            <div className="flex max-w-4xl flex-col items-center gap-6 pb-10">
                <div className="space-y-4">
                    <h1 className="m-4 text-center text-3xl text-white sm:text-4xl lg:text-5xl">
                        {HERO.title}
                    </h1>
                    <p className="p-4 text-center text-slate-300">
                        {HERO.description}
                    </p>
                </div>
                <Searchform />
            </div>
        </div>
    </>
  )
}

export default Hero