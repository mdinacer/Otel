export default function Hero() {
  return (
    <div className="relative flex h-full min-h-[90vh] w-full flex-row bg-black">
      <div className="w-1/2 bg-purple-500 bg-[url('https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')] bg-cover bg-center  opacity-50 transition-all duration-700 hover:opacity-100 ">
        image1
      </div>
      <div className="w-1/2 bg-black bg-[url('https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center opacity-50 transition-all duration-700 hover:opacity-100">
        image2
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-10 py-3 transition-all duration-300 hover:scale-110"
      >
        Look inside OTel Shelter
      </button>
    </div>
  )
}
