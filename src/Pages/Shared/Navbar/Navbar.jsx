import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose, IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsCartCheckFill } from "react-icons/bs";
import useCart from "../../../hooks/useCart";
import { NotificationContext } from "../../../providers/NotificationProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const { count, setVisible, visible, setCount } =
    useContext(NotificationContext);
  console.log("Notification count in navbar:", count);

  return (
    <div className="fixed z-50 w-full left-0 top-0">
      <nav className="relative bg-black bg-opacity-55 shadow ">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link className="text-white uppercase  leading-5">
                <span className="font-extrabold tracking-[.12em] uppercase">
                  Bistro Boss
                </span>{" "}
                <br />{" "}
                <span className="font-normal tracking-[.2em]">restaurant</span>
              </Link>

              <Link
                to="/all-users"
                className="text-white ml-20 text-xl font-medium"
              >
                Users
              </Link>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <IoMdClose className="w-6 h-6" />
                  ) : (
                    <FiMenu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link
                  to="/"
                  className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="/menu"
                  className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Our Menu
                </Link>
                <Link
                  to="/order/salad"
                  className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Order
                </Link>
                <Link
                  to="/secret"
                  className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Secret
                </Link>
                <Link
                  to="/dashboard/cart"
                  className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <button className="flex items-center justify-center gap-1">
                    <BsCartCheckFill className="text-XL" />
                    <div className="badge badge-secondary">+{cart.length}</div>
                  </button>
                </Link>
                {user ? (
                  <button
                    onClick={() => logOut()}
                    className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Login
                  </Link>
                )}
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <Link
                  to="notify"
                  onClick={() => {
                    setCount(0);
                  }}
                  className="relative cursor-pointer bg-pink-500 rounded-full p-1 mr-5"
                >
                  <IoMdNotificationsOutline className="text-white size-7 " />

                  {count > 0 && (
                    <span
                      className="
            absolute -top-2 -right-2 
            bg-red-600 text-white 
            text-xs px-2 py-0.5 rounded-full
          "
                    >
                      {count}
                    </span>
                  )}
                </Link>

                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2 text-white dark:text-gray-200 lg:hidden">
                    Khatab wedaa
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
