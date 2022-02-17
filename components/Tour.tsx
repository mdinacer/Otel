export default function Tour() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-row justify-end bg-black">
      <div className="absolute top-0 left-0 h-full w-full bg-[url('https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center opacity-30" />

      <div className="relative ml-auto flex w-[50vw] items-center justify-center ">
        <div className=" w-full max-w-xl text-white">
          <p className="mb-5 text-base uppercase">try before you buy</p>
          <p className=" mb-10 max-w-xl text-7xl">
            Test Drive your next OTel Kitchen
          </p>

          <p className="text-base font-normal ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quas,
            quasi amet explicabo voluptas voluptate praesentium quae nemo
            dolorum odio sint ullam, ratione accusamus accusantium facere illo
            pariatur non deserunt? Nulla voluptatem cumque, minima, deserunt
            delectus eveniet voluptate quidem nisi vel ipsum velit obcaecati qui
            pariatur iusto nemo minus incidunt!
          </p>
          <div className="flex flex-row gap-5 py-10">
            <button
              type="button"
              className=" rounded-3xl px-10 py-3 ring-2 ring-white transition-all duration-500 hover:bg-[#66806A]"
            >
              Take a Tour
            </button>
            <button
              type="button"
              className=" rounded-3xl px-10 py-3 ring-2 ring-transparent transition-all duration-300 hover:ring-[#66806A]"
            >
              See pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
