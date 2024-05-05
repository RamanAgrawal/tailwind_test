import React from "react";

const Whatwedo = () => {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              What We Do?
            </h2>
            <h3 className="xl:text-[1.8rem] text-[calc(1.315rem_+_0.78vw)] !leading-[1.3] font-bold mb-10 xl:!px-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="relative !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
          <div
            className="shape !rounded-[50%] rellax !w-[6rem] !h-[6rem] !absolute bg-[#f2f3fb]"
            data-rellax-speed={1}
            style={{
              bottom: "-0.5rem",
              right: "-2.5rem",
              zIndex: 0,
              transform: "translate3d(0px, 38px, 0px)",
            }}
          />
          <div
            className="shape bg-dot primary rellax !w-[6rem] !h-[7rem] absolute opacity-50 bg-[radial-gradient(#747ed1_2px,transparent_2.5px)]"
            data-rellax-speed={1}
            style={{
              top: "-0.5rem",
              left: "-2.5rem",
              zIndex: 0,
              transform: "translate3d(0px, 9px, 0px)",
            }}
          />
          <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px] !text-center">
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:text-[1.3rem] !w-[3rem] lg:text-[calc(1.255rem_+_0.06vw)] md:text-[calc(1.255rem_+_0.06vw)] sm:text-[calc(1.255rem_+_0.06vw)] xsm:text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    {" "}
                    <i className="uil uil-phone-volume before:content-['\ec50']" />{" "}
                  </div>
                  <h4>24/7 Support</h4>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus cras justo.
                  </p>
                  <a
                    href="#"
                    className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:text-[1.3rem] !w-[3rem] lg:text-[calc(1.255rem_+_0.06vw)] md:text-[calc(1.255rem_+_0.06vw)] sm:text-[calc(1.255rem_+_0.06vw)] xsm:text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    {" "}
                    <i className="uil uil-shield-exclamation before:content-['\ecb3']" />{" "}
                  </div>
                  <h4>Secure Payments</h4>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus cras justo.
                  </p>
                  <a
                    href="#"
                    className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:text-[1.3rem] !w-[3rem] lg:text-[calc(1.255rem_+_0.06vw)] md:text-[calc(1.255rem_+_0.06vw)] sm:text-[calc(1.255rem_+_0.06vw)] xsm:text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    {" "}
                    <i className="uil uil-laptop-cloud before:content-['\ebb2']" />{" "}
                  </div>
                  <h4>Daily Updates</h4>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus cras justo.
                  </p>
                  <a
                    href="#"
                    className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
            <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full">
              <div className="card">
                <div className="card-body flex-[1_1_auto] p-[40px]">
                  <div className="icon btn btn-circle btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-3 xl:text-[1.3rem] !w-[3rem] lg:text-[calc(1.255rem_+_0.06vw)] md:text-[calc(1.255rem_+_0.06vw)] sm:text-[calc(1.255rem_+_0.06vw)] xsm:text-[calc(1.255rem_+_0.06vw)] !h-[3rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
                    {" "}
                    <i className="uil uil-chart-line before:content-['\e9d3']" />{" "}
                  </div>
                  <h4>Market Research</h4>
                  <p className="!mb-2">
                    Nulla vitae elit libero, a pharetra augue. Donec id elit non
                    mi porta gravida at eget metus cras justo.
                  </p>
                  <a
                    href="#"
                    className="more hover text-[#747ed1] focus:text-[#747ed1] hover:text-[#747ed1]"
                  >
                    Learn More
                  </a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.card */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.relative */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                src="https://sandbox-tailwindcss.ibthemespro.com/assets/img/illustrations/i11.png"
                alt="image"
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              Why Choose Us?
            </h2>
            <h3 className="xl:text-[1.8rem] text-[calc(1.315rem_+_0.78vw)] !leading-[1.3] font-bold mb-7">
              We bring solutions to make life easier for our clients.
            </h3>
            <div className="accordion accordion-wrapper" id="accordionExample">
              <div className="card plain accordion-item">
                <div
                  className="card-header p-[0_0_0.8rem_0] !border-0"
                  id="headingOne"
                >
                  <button
                    className="hover:!text-[#747ed1] before:!text-[#747ed1] accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {" "}
                    Professional Design{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header p-[0_0_.8rem_0] !border-0"
                  id="headingTwo"
                >
                  <button
                    className="hover:!text-[#747ed1] before:!text-[#747ed1] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {" "}
                    Top-Notch Support{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
              <div className="card plain accordion-item">
                <div
                  className="card-header p-[0_0_.8rem_0] !border-0"
                  id="headingThree"
                >
                  <button
                    className="hover:!text-[#747ed1] before:!text-[#747ed1] collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {" "}
                    Header and Slider Options{" "}
                  </button>
                </div>
                {/*/.card-header */}
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                    <p>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Cras mattis consectetur purus sit amet fermentum. Praesent
                      commodo cursus magna, vel.
                    </p>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.accordion-collapse */}
              </div>
              {/*/.accordion-item */}
            </div>
            {/*/.accordion */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center xl:!mb-[5rem] lg:!mb-[5rem] md:!mb-[5rem]">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full xl:!order-2 lg:!order-2">
            <figure className="m-0 p-0">
              <img
                className="w-auto"
                src="https://sandbox-tailwindcss.ibthemespro.com/assets/img/illustrations/i11.png"
                alt="image"
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
            <h2 className="!text-[.75rem] uppercase text-[#747ed1] tracking-[0.02rem] leading-[1.35] !mb-3">
              Our Solutions
            </h2>
            <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-5">
              We make your spending stress-free for you to have the perfect
              control.
            </h3>
            <p className="!mb-6">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus.
            </p>
            <div className="flex flex-wrap mx-[-15px] mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Aenean quam ornare. Curabitur blandit.</span>
                  </li>
                  <li className="relative pl-6 mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Nullam quis risus eget urna mollis ornare</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                  <li className="relative pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Etiam porta euismod malesuada mollis.</span>
                  </li>
                  <li className="relative pl-6 mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Vivamus sagittis lacus vel augue rutrum.</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
};

export default Whatwedo;
