import React from 'react'

const Case = () => {
  return (
<section className="wrapper  bg-[rgba(246,247,249,1)] ">
  <div className="container py-[4.5rem] xl:pt-0 lg:pt-0 md:pt-0 xl:pb-24 lg:pb-24 md:pb-24">
    <div className="flex flex-wrap mx-[-15px] xl:!-translate-y-2/4 lg:!-translate-y-2/4 md:!-translate-y-2/4 !mb-[4.5rem] xl:!mb-7 lg:!mb-7 md:!mb-7">
      <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-cover [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
          data-image-src="./assets/img/photos/bg2.jpg"
          style={{ backgroundImage: 'url("./assets/img/photos/bg2.jpg")' }}
        >
          <div className="card-body p-[2.25rem] xl:!p-[2.5rem]">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-40px] !text-center text-white">
              <div className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                <h3
                  className="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2"
                  style={{ visibility: "visible" }}
                >
                  7518
                </h3>
                <p className="!m-0">Completed Projects</p>
              </div>
              {/*/column */}
              <div className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                <h3
                  className="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2"
                  style={{ visibility: "visible" }}
                >
                  3472
                </h3>
                <p className="!m-0">Happy Customers</p>
              </div>
              {/*/column */}
              <div className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                <h3
                  className="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2"
                  style={{ visibility: "visible" }}
                >
                  2184
                </h3>
                <p className="!m-0">Expert Employees</p>
              </div>
              {/*/column */}
              <div className="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                <h3
                  className="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2"
                  style={{ visibility: "visible" }}
                >
                  4523
                </h3>
                <p className="!m-0">Awards Won</p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/* /column */}
    </div>
    {/* /.row */}
    <div className="flex flex-wrap mx-[-15px] !text-center">
      <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
        <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
          Case Studies
        </h2>
        <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6">
          Check out some of our awesome projects with creative ideas and great
          design.
        </h3>
      </div>
      {/* /column */}
    </div>
    {/* /.row */}
    <div className="!relative">
      <div
        className="shape bg-dot primary rellax !w-[7rem] !h-[10rem] !absolute z-[1] opacity-50 !bg-[radial-gradient(#747ed1_2px,transparent_2.5px)]"
        data-rellax-speed={1}
        style={{
          top: 0,
          left: "-1.7rem",
          transform: "translate3d(0px, 30px, 0px)"
        }}
      />
      <div
        className="swiper-container dots-closer blog grid-view !mb-6 swiper-container-1"
        data-margin={0}
        data-dots="true"
        data-items-xl={3}
        data-items-md={2}
        data-items-xs={1}
      >
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-39f517cfc8ee5f25"
            aria-live="off"
            style={{ cursor: "grab", transform: "translate3d(0px, 0px, 0px)" }}
          >
            <div
              className="swiper-slide swiper-slide-active"
              role="group"
              aria-label="1 / 4"
              style={{ width: 430 }}
            >
              <div className="item-inner">
                <article>
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale group">
                      <a href="#">
                        {" "}
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          src="./assets/img/photos/b4.jpg"
                          alt="image"
                        />
                        <span className="bg" />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                          Read More
                        </h5>
                      </figcaption>
                    </figure>
                    <div className="card-body flex-[1_1_auto] p-[1.75rem_1.75rem_1rem_1.75rem] sm:p-[40px_40px_20px] xsm:p-[40px_40px_20px]">
                      <div className="post-header">
                        <h2 className="post-title h3 !mt-1 !mb-3">
                          <a
                            className="text-[#343f52] hover:text-[#747ed1]"
                            href="./blog-post.html"
                          >
                            Ligula tristique quis risus
                          </a>
                        </h2>
                      </div>
                      {/* /.post-header */}
                      <div className="!relative">
                        <p>
                          Mauris convallis non ligula non interdum. Gravida
                          vulputate convallis tempus vestibulum cras imperdiet
                          nun eu dolor.
                        </p>
                      </div>
                      {/* /.post-content */}
                    </div>
                    {/*/.card-body */}
                    <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] sm:p-[0.9rem_2rem] xsm:p-[0.9rem_2rem]">
                      <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                        <li className="post-date inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          <span>14 Apr 2022</span>
                        </li>
                        <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                          <a
                            className="text-[#aab0bc] hover:text-[#747ed1] hover:border-[#747ed1]"
                            href="#"
                          >
                            <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                            Coding
                          </a>
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                </article>
                {/* /article */}
              </div>
              {/* /.item-inner */}
            </div>
            {/*/.swiper-slide */}
            <div
              className="swiper-slide swiper-slide-next"
              role="group"
              aria-label="2 / 4"
              style={{ width: 430 }}
            >
              <div className="item-inner">
                <article>
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale group">
                      <a href="#">
                        {" "}
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          src="./assets/img/photos/b5.jpg"
                          alt="image"
                        />
                        <span className="bg" />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                          Read More
                        </h5>
                      </figcaption>
                    </figure>
                    <div className="card-body flex-[1_1_auto] p-[1.75rem_1.75rem_1rem_1.75rem] sm:p-[40px_40px_20px] xsm:p-[40px_40px_20px]">
                      <div className="post-header">
                        <h2 className="post-title h3 !mt-1 !mb-3">
                          <a
                            className="text-[#343f52] hover:text-[#747ed1]"
                            href="./blog-post.html"
                          >
                            Nullam id dolor elit id nibh
                          </a>
                        </h2>
                      </div>
                      {/* /.post-header */}
                      <div className="!relative">
                        <p>
                          Mauris convallis non ligula non interdum. Gravida
                          vulputate convallis tempus vestibulum cras imperdiet
                          nun eu dolor.
                        </p>
                      </div>
                      {/* /.post-content */}
                    </div>
                    {/*/.card-body */}
                    <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] sm:p-[0.9rem_2rem] xsm:p-[0.9rem_2rem]">
                      <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                        <li className="post-date inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          <span>29 Mar 2022</span>
                        </li>
                        <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                          <a
                            className="text-[#aab0bc] hover:text-[#747ed1] hover:border-[#747ed1]"
                            href="#"
                          >
                            <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                            Workspace
                          </a>
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                </article>
                {/* /article */}
              </div>
              {/* /.item-inner */}
            </div>
            {/*/.swiper-slide */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="3 / 4"
              style={{ width: 430 }}
            >
              <div className="item-inner">
                <article>
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale group">
                      <a href="#">
                        {" "}
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          src="https://sandbox-tailwindcss.ibthemespro.com/assets/img/photos/b6.jpg"
                          alt="image"
                        />
                        <span className="bg" />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                          Read More
                        </h5>
                      </figcaption>
                    </figure>
                    <div className="card-body flex-[1_1_auto] p-[1.75rem_1.75rem_1rem_1.75rem] sm:p-[40px_40px_20px] xsm:p-[40px_40px_20px]">
                      <div className="post-header">
                        <h2 className="post-title h3 !mt-1 !mb-3">
                          <a
                            className="text-[#343f52] hover:text-[#747ed1]"
                            href="./blog-post.html"
                          >
                            Ultricies fusce porta elit
                          </a>
                        </h2>
                      </div>
                      {/* /.post-header */}
                      <div className="!relative">
                        <p>
                          Mauris convallis non ligula non interdum. Gravida
                          vulputate convallis tempus vestibulum cras imperdiet
                          nun eu dolor.
                        </p>
                      </div>
                      {/* /.post-content */}
                    </div>
                    {/*/.card-body */}
                    <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] sm:p-[0.9rem_2rem] xsm:p-[0.9rem_2rem]">
                      <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                        <li className="post-date inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          <span>26 Feb 2022</span>
                        </li>
                        <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                          <a
                            className="text-[#aab0bc] hover:text-[#747ed1] hover:border-[#747ed1]"
                            href="#"
                          >
                            <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                            Meeting
                          </a>
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                </article>
                {/* /article */}
              </div>
              {/* /.item-inner */}
            </div>
            {/*/.swiper-slide */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="4 / 4"
              style={{ width: 430 }}
            >
              <div className="item-inner">
                <article>
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale group">
                      <a href="#">
                        {" "}
                        <img
                          className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                          src="./assets/img/photos/b7.jpg"
                          alt="image"
                        />
                        <span className="bg" />
                      </a>
                      <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                        <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                          Read More
                        </h5>
                      </figcaption>
                    </figure>
                    <div className="card-body flex-[1_1_auto] p-[1.75rem_1.75rem_1rem_1.75rem] sm:p-[40px_40px_20px] xsm:p-[40px_40px_20px]">
                      <div className="post-header">
                        <h2 className="post-title h3 !mt-1 !mb-3">
                          <a
                            className="text-[#343f52] hover:text-[#747ed1]"
                            href="./blog-post.html"
                          >
                            Morbi leo risus porta eget
                          </a>
                        </h2>
                      </div>
                      {/* /.post-header */}
                      <div className="!relative">
                        <p>
                          Mauris convallis non ligula non interdum. Gravida
                          vulputate convallis tempus vestibulum cras imperdiet
                          nun eu dolor.
                        </p>
                      </div>
                      {/* /.post-content */}
                    </div>
                    {/*/.card-body */}
                    <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] sm:p-[0.9rem_2rem] xsm:p-[0.9rem_2rem]">
                      <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                        <li className="post-date inline-block">
                          <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                          <span>7 Jan 2022</span>
                        </li>
                        <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                          <a
                            className="text-[#aab0bc] hover:text-[#747ed1] hover:border-[#747ed1]"
                            href="#"
                          >
                            <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                            Business Tips
                          </a>
                        </li>
                      </ul>
                      {/* /.post-meta */}
                    </div>
                    {/* /.card-footer */}
                  </div>
                  {/* /.card */}
                </article>
                {/* /article */}
              </div>
              {/* /.item-inner */}
            </div>
            {/*/.swiper-slide */}
          </div>
          {/*/.swiper-wrapper */}
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        {/*/.swiper */}
        <div className="swiper-controls">
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 1"
              aria-current="true"
            />
            <span
              className="swiper-pagination-bullet"
              tabIndex={0}
              role="button"
              aria-label="Go to slide 2"
            />
          </div>
        </div>
      </div>
      {/* /.swiper-container */}
    </div>
    {/* /.relative */}
  </div>
  {/* /.container */}
</section>

  )
}

export default Case