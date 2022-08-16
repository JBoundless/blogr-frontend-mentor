import React from 'react';

const phones =
  'https://raw.githubusercontent.com/JBoundless/blogr/ea51dcffb587ccd51501086963000ddead5b95eb/images/illustration-phones.svg';
const circles =
  'https://raw.githubusercontent.com/JBoundless/blogr/ea51dcffb587ccd51501086963000ddead5b95eb/images/bg-pattern-circles.svg';

const State = () => {
  return (
    <>
      <section className="state py-10 px-5 text-center text-white relative z-10 md:grid md:grid-cols-2 md:text-left xl:px-52">
        <div>
          <div>
            <img src={circles} alt="" className="state-img circles" />
          </div>
          <div>
            <img src={phones} alt="" className="state-img" />
          </div>
        </div>
        <div className="pt-80 px-5">
          <h2 className="text-center text-3xl lg:text-4xl 2xl:text-5xl mb-5 text-white">
            State of the Art Infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </>
  );
};

export default State;
