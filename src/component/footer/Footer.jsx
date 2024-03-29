import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.cart.user);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {!user && (
        <div className="bg-white">
          <div className="py-8 border-t  border-b border-gray-300 bg-white px-4 flex flex-col items-center">
            <div className="max-auto w-1/5">
              <button
                className="flex mt-6 mx-auto w-1/5 border font-semibold border-rose-300 items-center justify-center text-black shadow text-sm sm:text-base bg-amber-300 hover:bg-amber-400 rounded py-1 w-full transition duration-150 ease-in"
                type="submit"
                onClick={() => navigate('/login')}
              >
                Sign in
              </button>
            </div>
            <div className="text-sm font-medium mt-1">
              <span>New customer?</span>
              <button
                type="button"
                className=" ml-1 text-cyan-700"
                onClick={() => navigate('/Signup')}

              >
                Start here.
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#364759] mt-8 h-12 flex items-center justify-center">
        <button
          type="button"
          className="h-12 text-center text-white font-medium bg-transparent outline-none w-full hover:bg-gray-600"
          onClick={scrollToTop}
        >
          Back to top
        </button>
      </div>
      <div className="bg-amazonclone-light_blue">
        <div className="grid grid-cols-12 px-48 py-12">
          <div className="col-span-3">
            <h2 className="text-md text-white font-bold mb-2">Get to Know Us</h2>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium"> Careers</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Blog</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">About us</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium"> Investor Relations</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Devices</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Science</p>
          </div>
          <div className="col-span-3">
            <h2 className="text-md text-white font-bold mb-2">Make Money with Us</h2>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium"> Sell products on our web</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Sell on Business</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Sell apps on our web</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Become an Affiliate</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Advertise Your Products</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Self-Publish with Us</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Host an Hub</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">›See More Make Money with Us</p>
          </div>
          <div className="col-span-4">
            <h2 className="mb-1 text-md text-white font-bold mb-2">Our Payment Products</h2>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Business Card</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Shop with Points</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Reload Your Balance</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Currency Converter</p>
          </div>
          <div className="col-span-2">
            <h2 className="mb-1 text-md text-white font-bold mb-2">Adapting to COVID-19</h2>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Your Account</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Your Orders</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Shipping Rates & Policies</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Returns & Replacements</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Manage Your Content and Devices</p>

            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Assistant</p>
            <p className="mb-1 text-sm text-gray-200 hover:underline cursor-pointer font-medium">Help</p>
          </div>
        </div>
        <div className="border border-gray-600" />
      </div>
    </>
  );
};
export default Footer;
