import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-100 boxes-pattern">


      <div className="mx-4">
        <section className="container max-w-6xl mx-auto rounded-2xl p-6 mb-8 ">
          <div
            className=""
          >
            <div className="justify-center w-full text-center lg:p-10 max-auto">
              <div className="justify-center w-full mx-auto">
                <p
                  className="mt-8 font-bold text-transparent text-7xl sm:text-8xl bg-clip-text bg-gradient-to-r from-black to-gray-200 text-left sm:text-center"
                >
                  Traceback.
                </p>
                <p
                  className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600 text-left sm:text-center"
                >
                  A fun and easy way to effortlessly add, shuffle, and generate
                  questions.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto mt-10 lg:flex-row"
              >
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"
                  type="button "
                  className="text-white bg-black duration-200  font-medium rounded-full w-full text-sm px-6 py-2.5 inline-flex justify-center sm:w-auto mr-2 mb-2 shadow-lg  sm:active:scale-110 sm:hover:scale-105 active:scale-110  cursor-pointer
                "
                >
                  Have fun &#10023;
                </a>
                <a
                  href="https://github.com/amartya2002/shuffled" target="_blank"
                  type="button"
                  className="hover:text-blue-400 duration-200 focus:ring-1 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 sm:active:scale-110 sm:hover:scale-105 active:scale-110  cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Star on Github
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto rounded-2xl p-6 bg-white mb-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-black text-centr">
              Question:
            </h2>
            <div id="questionDisplay" className="text-lg font-regular text-gray-600">
              Click 'generate' to show.
            </div>

            <button
              id="generateBtn"
              className="text-white bg-black duration-200 hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-full text-sm px-6 py-2.5 mx-auto shadow-sm w-full sm:w-auto sm:active:scale-110 sm:hover:scale-105 active:scale-110 "
            >
              Generate &#10147;
            </button>
          </div>
        </section>

     
      </div>





    </main>
  )
}
