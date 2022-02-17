export default function Contact() {
  return (
    <div className=" flex h-full min-h-[50vh] w-full items-start justify-center bg-[#EEEEEE] py-14">
      <div className="container mx-auto">
        <p className=" pb-14 text-3xl font-bold uppercase">OTel</p>
        <div className="flex w-full flex-row justify-between ">
          <div className="flex flex-row gap-14 text-base ">
            <ul className=" flex list-none flex-col gap-2">
              {listLeft.map((item, index) => (
                <li key={index} className="list-item">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul className=" flex list-none flex-col gap-2">
              {listMiddle.map((item, index) => (
                <li key={index} className="list-item">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <ul className=" flex list-none flex-col gap-2">
              {listRight.map((item, index) => (
                <li key={index} className="list-item">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-auto flex-col items-start gap-4">
            <p className=" text-base">Newsletter</p>
            <input
              className="w-full min-w-[32rem] border-b border-b-black bg-transparent py-1"
              name="email"
              type={'email'}
              placeholder="Enter you email address text-black"
            ></input>
            <button
              type="button"
              className="rounded-3xl bg-[#66806A] px-10 py-3 text-white"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const listLeft = ['The company', 'About', 'Stories', 'Presse', 'Reservation']
const listMiddle = [
  'Legal',
  'Legal Notice',
  'Work with Us',
  'Cancel Reservation',
  'Lost and Found',
]
const listRight = [
  'Support',
  'FAQ',
  'Reservations',
  'info@otel.com',
  '+1449 398 999',
]
