import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Gallery() {
  const ref = useRef(null)
  return (
    <div
      ref={ref}
      className=" flex h-full min-h-screen w-full items-center justify-center py-28 "
    >
      <div className="container mx-auto flex flex-col gap-5">
        <p className=" max-w-xs text-4xl ">Our latest Instagrams</p>

        <button type="button">
          <div className="flex flex-row items-center gap-3">
            <p>Go to account</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>

        <div className=" w-full  overflow-y-scroll  scrollbar-hide">
          <motion.div
            drag={'x'}
            dragConstraints={{ left: -2000, right: 0 }}
            className="grid grid-flow-col gap-4"
            dragElastic={0.2}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative flex h-[50vh] w-[20vw] items-center justify-center rounded-md bg-[#2C3333]  even:bg-[#495371]"
              >
                <div className="relative h-1/2 w-full">
                  <Image
                    src={'/assets/images/house2.png'}
                    layout="fill"
                    alt="house"
                    className="opacity-60 mix-blend-multiply"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
