import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import Link from "next/link";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [showSubsubheading, setSubsubheading] = useState("");
  const [showSubsubsubheading, setSubsubsubheading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {/* <ul class="absolute text-gray-700 pt-1 group-hover/main:block">
              <li class="group/item">
                <a
                  class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  1
                </a>
                <ul class="absolute hidden l-10 text-gray-700 pt-1 group-hover/item:block top-0 left-14">
                  <li>1.1</li>
                  <li>1.2</li>
                  <li>1.3</li>
                </ul>
              </li>
              <li class="">
                <a
                  class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  2
                </a>
              </li>
              <li class="">
                <a
                  class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  3
                </a>
              </li>
            </ul> */}
            {link.submenu && (
              <div>
                {/* <div className="absolute top-20 hidden group-hover:md:block hover:md:block"> */}
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  {/* <div className="bg-white p-5 grid grid-cols-8 gap-10 -ml-96 "> */}
                  <div className="bg-white p-5 grid grid-cols-8 gap-4 -ml-96 text-center rounded-xl ">
                    {link.sublinks.map((mysublinks) => (
                      <div
                        key={mysublinks.Head}
                        className=""
                        onMouseEnter={() => setSubsubheading(mysublinks.Head)}
                        onMouseLeave={() => setSubsubheading("")}
                        // onClick={() => setSubsubheading(mysublinks.Head)}
                      >
                        {/* <h1 className="text-lg font-semibold "> */}
                        <h1 className="text-sm ">{mysublinks.Head}</h1>
                        {showSubsubheading == mysublinks.Head ? (
                          <div key={mysublinks.Head} className="absolute -mt-2">
                            <div className="py-3 -z-40">
                              <div
                                className="w-4 h-4 left-3 absolute 
                    mt-1 bg-blue-300 rotate-45 ml-9"
                              ></div>
                            </div>
                            {/* <div className="ml-4">V</div> */}
                            <div className="bg-blue-300  z-40 p-3 rounded-lg">
                              {mysublinks.sublink.map((slink) => (
                                <div
                                  key={slink.link}
                                  onMouseEnter={() =>
                                    setSubsubsubheading(slink.name)
                                  }
                                  onMouseLeave={() => setSubsubsubheading("")}
                                >
                                  <li
                                    key={slink.link}
                                    // className="text-sm text-gray-600 my-2.5"
                                    className="text-xs text-gray-600 my-2.5"
                                  >
                                    <Link
                                      href={slink.link}
                                      className="hover:text-primary"
                                    >
                                      {slink.name}
                                      {slink.subsublink && ">"}
                                    </Link>
                                  </li>
                                  {slink.subsublink &&
                                  showSubsubsubheading == slink.name ? (
                                    <div className="absolute bg-red-600 ml-24 z-50 -mt-10 p-2 rounded-lg">
                                      <div className="py-3 z-50 absolute">
                                        <div
                                          className="w-4 h-4 left-3  
                    -mt-1.5 bg-red-600 rotate-45 -ml-4"
                                        ></div>
                                      </div>
                                      {slink.subsublink.map((sslink) => (
                                        <li
                                          key={sslink.link}
                                          // className="text-sm text-gray-600 my-2.5"
                                          className="text-xs text-gray-600 my-2.5"
                                        >
                                          <Link
                                            href={sslink.link}
                                            className="hover:text-primary"
                                          >
                                            {sslink.moviename}
                                          </Link>
                                        </li>
                                      ))}
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        {/* {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.link}
                            className="text-sm text-gray-600 my-2.5"
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))} */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    } `}
                  >
                    {slinks.sublink.map((slink) => (
                      <li key={slink.link} className="py-3 pl-14">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
