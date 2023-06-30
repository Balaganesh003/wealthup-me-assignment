import { Inter } from 'next/font/google';
import PhoneImage from '@/assets/phone.png';
import CheckBox from '@/assets/checkbox.png';
import HowItWorks from '@/assets/howtodo.png';
import Image from 'next/image';
import TodoList from '@/components/Todo';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen mx-auto ${inter.className} `}>
      <div className="w-full h-full max-h-[1500px] aspect-square  bg-gradient-to-br relative from-sky-800 to-teal-600 ">
        <div className="p-[4rem] flex flex-col items-center max-w-[96rem] mx-auto">
          <h1 className="text-center text-white text-[76px] font-semibold mb-[14px]">
            Check your financial health
          </h1>
          <p className=" text-center text-white  font-light text-[32px] leading-10">
            Use WeathoMeter to get a free report
            <br />
            card for your finances- within minutes!
          </p>
          <button className="w-[265px] h-[68px] mt-[32px] flex justify-center items-center bg-orange-500 rounded-[32px] shadow ">
            <span className="text-white text-[24px] font-bold">
              Get Started
            </span>
          </button>
          <div className="flex w-full px-9   justify-between mt-[100px]">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src={CheckBox}
                  width={100}
                  height={100}
                  alt="checkbox"
                  className="object-cover h-[3rem] w-[2.565rem]"
                />
                <p className="text-white pb-5 text-[29px] font-semibold border-b-[4px] border-white">
                  Expected Retirement Age
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={CheckBox}
                  width={100}
                  height={100}
                  alt="checkbox"
                  className="object-cover h-[3rem] w-[2.565rem]"
                />
                <p className="text-white pb-5 text-[29px] font-semibold border-b-[4px] border-white">
                  Identify Mistakes
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image
                  src={CheckBox}
                  width={100}
                  height={100}
                  alt="checkbox"
                  className="object-cover h-[3rem] w-[2.565rem]"
                />
                <p className="text-white pb-5 text-[29px] font-semibold border-b-[4px] border-white">
                  Personalised Road Map
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={CheckBox}
                  width={100}
                  height={100}
                  alt="checkbox"
                  className="object-cover h-[3rem] w-[2.565rem]"
                />
                <p className="text-white pb-5 text-[29px] font-semibold border-b-[4px] border-white">
                  Tips To Improve
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phone image */}
        <div className="absolute top-1/2 -translate-y-[67%] flex left-1/2 -translate-x-[51%]">
          <Image
            src={PhoneImage}
            width={400}
            height={400}
            alt="phone"
            priority
            className="object-cover w-full max-w-[400px]"
          />
        </div>

        <div className="absolute bottom-0 w-full ">
          <svg
            width="100%"
            height="auto"
            className=""
            viewBox="0 0 1502 790"
            preserveAspectRatio="true"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1007 172C689 62 449 124 295 282C178.954 401.06 51.4328 419.449 -7 413.383V790H1509V0C1275.4 187.2 1077 192.667 1007 172Z"
              fill="#0A5783"
            />
          </svg>
        </div>

        <div className="absolute bottom-[63px] flex justify-start items-center flex-col left-1/2 -translate-x-1/2 ">
          <h2 className=" text-white text-[60px] font-bold ">How it works?</h2>
          <div className="relative w-full mb-[100px]">
            <Image src={HowItWorks} alt="how it works" />
            <div className="-mr-[1.5rem]">
              <div className="w-full  flex text-white text-[1.25rem]">
                <sapn className="text-center flex-1 flex justify-start">
                  Answer few
                  <br />
                  questions
                </sapn>
                <span className="text-center flex-1 flex justify-center mr-[2rem]">
                  Register using
                  <br />
                  phone and OTP
                </span>
                <span className="text-center flex-1 flex justify-end">
                  Get report and
                  <br />
                  personal roadmap
                </span>
              </div>
            </div>
          </div>
          <button className="w-[265px] flex justify-center items-center h-[68px] bg-orange-500 rounded-[32px] shadow">
            <span className="text-white text-[24px] font-bold">
              Get Started
            </span>
          </button>
        </div>
      </div>
      <div className="mt-[10rem]">
        <TodoList />
      </div>
    </main>
  );
}
