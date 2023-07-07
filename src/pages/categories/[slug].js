import { fetchSpecificUser } from "@/Actions/data";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

const Page = ({ user }) => {
  //   console.log(user);

  return (
    <div className="bg-black px-10 py-20 h-full ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {user &&
          user.map((movie) => (
            <div className="flex items-center flex-col" key={movie.title}>
              <>
                <Image
                  className="rounded-xl scale-125 hover:scale-150 ease-in duration-100 bg-gradient-to-r p-[5px] from-[#4e28ca] to-[#ff0000]"
                  // className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={`${movie.img}`}
                  width={200}
                  height={200}
                  alt="{movie.title}"
                />
                <p className="text-white mt-7">
                  {movie.title}
                  {/* <span>{movie.overview}</span> */}
                  {/* <span className="figcaptionspan">
                    IMDB {movie.vote_average} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    {movie.release_date}
                  </span> */}
                </p>
              </>
            </div>
          ))}
      </div>
    </div>
  );
};

Page.getInitialProps = async ({ query }) => {
  return fetchSpecificUser(query.slug).then((data) => {
    if (!data) {
      return false;
    } else {
      return { user: data };
    }
  });
};

export default Page;
