import Image from 'next/image'

export default function Offers() {
  return (
    <div className=" flex h-full min-h-screen w-full select-none flex-col justify-evenly bg-blue-500 sm:flex-row">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className=" container flex w-full flex-col items-center gap-6 bg-[#FBF8F1] py-10 even:bg-[#323232] even:text-white sm:w-1/3 sm:py-28"
        >
          <div className="flex-initial ">
            <p className="text-base uppercase">{offer.location}</p>
          </div>
          <div className="flex-initial ">
            <p className=" text-5xl">{offer.title}</p>
          </div>
          <div className=" relative flex-auto items-center justify-center sm:flex ">
            <div className="relative h-[30vh] w-[80vw] sm:w-[20vw]">
              <Image
                src={'/assets/images/house2.png'}
                layout="fill"
                alt="house"
                className="opacity-60 "
              />
            </div>
          </div>
          <div className="flex-initial text-2xl font-bold">{`$ ${offer.price} /night`}</div>
          <div className="flex-initial ">
            <p className=" min-h-[10vh] max-w-sm px-5 text-center text-lg leading-normal sm:max-w-md sm:px-0">
              {offer.description}
            </p>
          </div>
          <div className="mt-5 flex flex-initial items-center justify-center">
            <button
              type="button"
              className="rounded-3xl bg-[#66806A] px-10 py-3 text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              View Room
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const offers = [
  {
    id: 1,
    location: 'Copenhagen, Denmark',
    title: 'OTel Loft',
    price: '1,000',
    description: `Perched atop the old printing factory from 1910 in Copenhagen's Islands Brygge area.`,
  },
  {
    id: 2,
    location: 'Lake Immeln, Sweden',
    title: 'OTel Shelter',
    price: '500',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi, sint neque ratione nam aliquam.',
  },
  {
    id: 3,
    location: 'Copenhagen, Denmark',
    title: 'OTel Chimney',
    price: '1,000',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi, sint neque ratione nam aliquam/',
  },
]
