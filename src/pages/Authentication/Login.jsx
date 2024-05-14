import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-1.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInWithGoogle, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   google sign in
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Sign in successful");
      // navigate after login
      navigate(`${location.state ? location.state : "/"}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;

    // login user
    try {
      await signIn(email, password);
      toast.success("Login successful");
      navigate(`${location.state ? location.state : "/"}`);
    } catch {
      toast.error("Invalid email or password");
    }
  };
  return (
    <div className="container px-12 mx-auto bg-[url('https://i.ibb.co/4SDhq7F/vol-sign-in-wall.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <Helmet>
        <title>Login | Volunify</title>
      </Helmet>
      <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
        <div className="lg:w-1/2">
          <div className="flex items-center mb-6">
            <img className="size-20 mr-2" src={logo} alt="logo" />
          </div>
          <h2 className="text-3xl text-white font-semibold lg:text-4xl">
            Volunify
          </h2>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            <span className="text-[#AD8B73]">Welcome</span> Back
          </h3>

          <p className="mt-4 text-white">
            Welcome back to our volunteer management platform! We are delighted
            to see you return, ready to make a difference once again. Sign in
            now to reconnect with your fellow volunteers, explore upcoming
            opportunities, and continue your impactful journey with us.
            Together, let us keep making a positive change in our community!
          </p>
        </div>

        <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
          <div className="w-full max-w-md bg-white rounded-lg">
            <div className="px-6 py-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Sign In
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label className="text-start block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#D4A373] focus:border-[#D4A373] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                    placeholder="name@company.com"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <small className="text-red-400 flex mt-2 ">
                      This field is required
                    </small>
                  )}
                </div>
                <div>
                  <label className="text-start block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#D4A373] focus:border-[#D4A373] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <small className="text-red-400 flex mt-2">
                      This field is required
                    </small>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Forget Password?
                  </a>

                  <button className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-[#D4A373] rounded-md hover:bg-[#AD8B73] focus:outline-none focus:bg-gray-800">
                    Sign In
                  </button>
                </div>
              </form>
              {/* login with google */}
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b  lg:w-1/5"></span>

                <a
                  href="#"
                  className="text-xs text-center text-gray-500 uppercase hover:underline"
                >
                  or login with Social Media
                </a>

                <span className="w-1/5 border-b  lg:w-1/5"></span>
              </div>

              <div className="flex items-center justify-center mt-6 -mx-2">
                <button
                  onClick={handleGoogleLogin}
                  className="bg-white w-full hover:bg-[#D4A373]  flex items-center text-gray-700 justify-center gap-x-3 text-sm sm:text-base rounded-lg hover:text-white duration-300 transition-colors border px-8 py-2.5"
                >
                  <svg
                    className="w-5 h-5 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3033_94454)">
                      <path
                        d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3033_94454">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              </div>

              <p className="text-sm text-center mt-6 font-light text-gray-500">
                New here?{" "}
                <Link
                  to="/register"
                  className="font-medium text-[#AD8B73] hover:underline"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
