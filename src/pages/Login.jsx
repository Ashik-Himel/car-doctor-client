import { Helmet } from "react-helmet-async";
import loginImg from '../assets/images/login/login.svg';
import facebookIcon from '../assets/icons/facebook.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import googleIcon from '../assets/icons/google.png';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="my-16">
      <Helmet>
        <title>Login - Car Doctor</title>
      </Helmet>
      
      <section>
        <div className="container">
          <div className="md:flex justify-center items-center gap-10 [&>*]:flex-1">
            <div className="hidden md:block">
              <img src={loginImg} alt="Login Image" />
            </div>
            <div>
              <form className="border-2 rounded-lg px-8 py-16 max-w-[550px] mx-auto">
                <h2 className="text-center text-3xl text-dark-2 font-semibold mb-6">Login</h2>
                <label htmlFor="email" className="label font-semibold text-dark-2 mb-1">Email Address</label>
                <input className="input border-2 border-gray-300 w-full mb-4" type="email" name="email" id="email" placeholder="Enter email address" required />

                <label htmlFor="password" className="label font-semibold text-dark-2 mb-1">Password</label>
                <input className="input border-2 border-gray-300 w-full mb-6" type="password" name="password" id="password" placeholder="Enter your password" required />
                <input type="submit" value="Sign In" className="btn btn-primary btn-block" />

                <span className="text-center block mt-8 mb-4 font-semibold text-dark-2">Or Sign In with</span>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-dark-7 p-4 cursor-pointer">
                    <img src={facebookIcon} alt="Facebook Icon" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-dark-7 p-4 cursor-pointer">
                    <img src={linkedinIcon} alt="Linked Icon" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-dark-7 p-4 cursor-pointer">
                    <img src={googleIcon} alt="Google Icon" />
                  </div>
                </div>
                <p className="text-dark-3 block text-center mt-10">Have an account? <Link className="font-semibold text-primary" to='/sign-up' onClick={() => scrollTo(0, 0)}>Sign Up</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;