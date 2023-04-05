import React from "react";
import project1 from "../images/NightOut.jpg";
import project2 from "../images/WineVybe.jpg";
import project3 from "../images/Artsy.jpg";
import login from "../images/ArtsyLogin.jpg";

export default function projects() {
  return (
    <main>
      <p className="text-center py-5 leading-8">
        Night Out: This was my first experience in working hands on with a group
        where we were given a critera and told to try out best with our newly
        found skills. It was a nice experience with a nice group. It definitley
        a eye opening experience on how to work togeher as a team.
        <figure>
        <img
          className="rounded"
          src={project1}
          alt=""
          width="450"
          height="250"
        />
        </figure>
      </p>

      <p className=" text-center mb-12 flex justify-center">
        WineVybes was an amazing project experience where we were given a
        critera and told to try out best with our newly found skills. It was a
        nice experience with a nice group. It definitley a eye opening
        experience on how to work togeher as a team. We almost felt as he black
        horse team but we put out heads down and grinded it out together for a
        great project.
        <img
          className="rounded"
          src={project2}
          alt=""
          width="450"
          height="250"
        />
      
      </p>

      <p className="text-center p-10">
        Artsy, is for fun Art class course! Artsy is meant for new and experienced artist who just want to have a nice time learning! My group and I worked hard and long thought many bugs to get our project up and running!

        <img
          className="rounded"
          src={project3}
          alt=""
          width="450"
          height="250"
        />

        <img
          className="rounded"
          src={login}
          alt=""
          width="450"
          height="250"
        />

      </p>
    
    </main>
  );
}
