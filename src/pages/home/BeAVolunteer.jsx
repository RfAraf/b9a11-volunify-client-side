/* eslint-disable react/no-unescaped-entities */
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const BeAVolunteer = () => {
  return (
    <section>
      <div className="bg-[#FFFBE9]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* left */}
          <div className="h-full">
            <img
              src="https://i.ibb.co/ZNrSHHy/be-Volunteer.jpg"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          {/* right */}
          <Fade duration={2000}>
            <div className="rounded-sm lg:text-left space-y-10 p-6 text-black">
              <div className="text-center">
                <h1 className="text-bold text-3xl ">Empower Your Community</h1>
                <h3 className="font-medium text-lg mb-5">
                  Join Our Volunteer Team Today!
                </h3>
                <p>
                  Are you ready to make a difference? Joining our volunteer team
                  opens doors to a world of opportunities where you can
                  contribute positively to your community while gaining
                  invaluable experiences. As a volunteer, you'll be part of a
                  passionate network dedicated to creating meaningful change.
                  Whether you're looking to enhance your skills, build new
                  relationships, or simply give back, volunteering with us
                  offers a platform to fulfill your aspirations while making a
                  tangible impact. Step forward now and be a catalyst for
                  positive change in your community. Join us as we strive to
                  create a brighter, better tomorrow together.
                </p>
              </div>
              <div className="text-center">
                <h1 className="text-bold text-3xl">Unlock Your Potential</h1>
                <h3 className="font-medium text-lg mb-5">
                  Volunteer for a Purposeful Cause Today!
                </h3>
                <p>
                  Ready to unleash your potential and make a real difference?
                  Joining our volunteer program is your gateway to a world of
                  meaningful opportunities. By becoming a volunteer, you not
                  only lend a helping hand to those in need but also discover
                  new talents, hone existing skills, and broaden your horizons.
                  Whether you're passionate about environmental conservation,
                  community development, or social justice, there's a role for
                  you to play in our diverse and inclusive volunteer community.
                  Take the first step towards creating positive change today and
                  embark on a journey filled with purpose, growth, and
                  fulfillment. Join us and be part of something greater than
                  yourself.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="w-1/2 mt-10 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#D4A373] rounded-lg shrink-0 sm:w-auto hover:bg-[#AD8B73]">
          <Link to="/volunteer-need">Be a Volunteer</Link>
        </button>
      </div>
    </section>
  );
};

export default BeAVolunteer;
