export default function Hero() {
  return (
    <div className="relative flex h-full min-h-[60vh] w-full flex-row bg-black sm:min-h-[90vh]">
      <div className="w-full bg-purple-500 bg-[url('https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')] bg-cover bg-center transition-all  duration-700 sm:w-1/2 sm:opacity-50 sm:hover:opacity-100 "></div>
      <div className="hidden w-1/2 bg-black bg-[url('https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center transition-all duration-700 sm:block sm:opacity-50 sm:hover:opacity-100"></div>

      <button
        type="button"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-3xl bg-white px-10 py-3 transition-all duration-300 sm:hover:scale-110"
      >
        Look inside OTel Shelter
      </button>
    </div>
  )
}
