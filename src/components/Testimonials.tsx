import { TESTIMONIALS } from "@/constants"
import Image from "next/image"

const Testimonials = () => {
  return (
    <>
          <div className="container mx-auto mt-20 border-b pb-10">
              <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
                  What Our Clients Say
              </h2>
              <div className="flex flex-wrap">
                  {TESTIMONIALS.map((testimonial, index) => (
                      <div key={index} className="w-full p-2 md:w-1/2 lg:w-1/4">
                          <div className="border rounded-xl p-4">
                              <div className="flex items-center">
                                  <Image
                                      className="mr-4 rounded-full border-4 border-neutral-400"
                                      src={testimonial.image}
                                      width={80}
                                      height={80}
                                      alt="testimonials" />

                                  <div>
                                      <h4 className="w-full">
                                          {testimonial.name}
                                      </h4>
                                      <span className="text-base text-neutral-600">
                                          {testimonial.instagram}
                                      </span>
                                  </div>
                              </div>
                              <p className="p-4">
                                  {testimonial.feedback}
                              </p>
                              <p className="text-base text-neutral-500">
                                  {testimonial.city_country}
                              </p>
                          </div>
                      </div>
                  ))}
              </div>


          </div>
    </>
  )
}

export default Testimonials