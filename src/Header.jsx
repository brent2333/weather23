import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
const user = {
    name: "Brent Lawson",
    email: "reasonevidence@zoho.com",
    imageUrl:
      "https://thumbs2.imgbox.com/46/fc/kitR8uva_t.jpeg"
  };
  const navigation = [{ name: "Dashboard", href: "/", current: true }];
  const userNavigation = [
    { name: "My LinkedIn", href: "https://www.linkedin.com/in/brent-lawson-486529a/", target: "_blank" },
    { name: "About Me", href: "/about" }
];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const Header = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center flex-wrap">
                <div className="shrink">
                    <h1 className="font-semibold lg:text-xl text-white tracking-tight">Weather23</h1>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        >
                        {item.name}
                        </a>
                    ))}
                    </div>
                </div>
                </div>
                <div className="flex items-center justify-between place-content-between space-x-0.5">
                    <div className="rounded-md overflow-hidden h-8 w-8 md:h-12 md:w-12 lg:h-18 lg:w-18"><img src="https://thumbs2.imgbox.com/a5/8a/q05oTpB7_t.png" alt="react"/></div>
                    <div className="rounded-md overflow-hidden h-8 w-8 md:h-12 md:w-12 lg:h-18 lg:w-18"><img src="https://thumbs2.imgbox.com/3c/d5/XzfBfu9v_t.png" alt="redux"/></div>
                    <div className="rounded-md overflow-hidden h-8 w-8 md:h-12 md:w-12 lg:h-18 lg:w-18"><img className="h-14 " src="https://thumbs2.imgbox.com/a9/27/bl8taaoQ_t.png" alt="tailwind"/></div>
                    <div className="rounded-md overflow-hidden h-8 w-8 md:h-12 md:w-12 lg:h-18 lg:w-18"><img className="h-14 " src="https://thumbs2.imgbox.com/33/9d/pQpuCba7_t.png" alt="typescript"/></div>
                    <div className="rounded-md overflow-hidden h-8 w-8 md:h-12 md:w-12 lg:h-18 lg:w-18"><img className="h-14 " src="https://thumbs2.imgbox.com/b4/5b/xgVChdbl_t.png" alt="vite"/></div>
                    <div className="rounded-md overflow-hidden h-8 w-8 md:h-12 md:w-12 lg:h-18 lg:w-18"><img className="h-14 " src="https://thumbs2.imgbox.com/03/af/cFDUogpV_t.png" alt="vitest"/></div>
                </div>
                <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                <h2 className="text-white whitespace-no-wrap text-sm">Brent Lawson - Web Developer</h2>
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                        />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                            {({ active }) => (
                                <a
                                href={item.href}
                                className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                )}
                                >
                                {item.name}
                                </a>
                            )}
                            </Menu.Item>
                        ))}
                        </Menu.Items>
                    </Transition>
                    </Menu>
                </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                    <XMarkIcon
                        className="block h-6 w-6"
                        aria-hidden="true"
                    />
                    ) : (
                    <Bars3Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                    />
                    )}
                </Disclosure.Button>
                </div>
            </div>
            </div>

            <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                    item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                >
                    {item.name}
                </Disclosure.Button>
                ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                    <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                    />
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                    {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                    {user.email}
                    </div>
                </div>
                <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    target={item.target}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                    {item.name}
                    </Disclosure.Button>
                ))}
                </div>
            </div>
            </Disclosure.Panel>
        </>
        )}
        </Disclosure>
)}

export default Header;
