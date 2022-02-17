import Image from 'next/image'

export default function Gallery() {
  return (
    <div className=" flex h-full min-h-screen w-full items-center justify-center py-14  sm:py-28 ">
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

        <div className=" max-h-[70vh] w-full overflow-y-scroll  scrollbar-hide sm:max-h-full">
          <div className="grid grid-flow-row gap-4 sm:grid-flow-col">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative flex h-[30vh] w-full items-center justify-center rounded-md bg-[#2C3333] even:bg-[#495371] sm:h-[50vh]  sm:w-[20vw]"
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
          </div>
        </div>
      </div>
    </div>
  )
}
