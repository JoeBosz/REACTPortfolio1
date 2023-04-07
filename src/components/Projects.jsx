import React from "react";
import team from "../images/allcreated.jpg";
import project3 from "../images/Artsy.jpg";
import html from "../images/html.jpg";
import project1 from "../images/NightOut.jpg";
import quiz from "../images/quiz.jpg";
import homework6 from "../images/website.jpg";
import project2 from "../images/WineVybe.jpg";

export default function projects() {
  return (
    <main className=" items-center">
      <p className="text-center py-5 leading-8">
        Night Out: This was my first experience in working hands on with a group
        where we were given a critera and told to try out best with our newly
        found skills. It was a nice experience with a nice group. It definitley
        a eye opening experience on how to work togeher as a team.
        <figure>
          <img
            className="rounded"
            justify="center"
            src={project1}
            alt=""
            width="450"
            height="250"
          />
          <></>
        </figure>
      </p>

      <p
        className=" text-center mb-12 flex justify-center"
        href="https://github.com/JoeBosz/WineVybes"
        target="_blank"
        rel="noopender noreferrer"
      >
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
        Artsy, is for fun Art class course! Artsy is meant for new and
        experienced artist who just want to have a nice time learning! My group
        and I worked hard and long thought many bugs to get our project up and
        running!
        <img
          className="rounded"
          src={project3}
          alt=""
          width="450"
          height="250"
        />
      </p>
      <p className="text-center">
        Weather Api. One of the hardest projects I had to accoomplish. I had to
        use a Weather API to get the weather forcast and the activation token
        was a pain to remember.
        <img
          className="rounded"
          src={homework6}
          alt=""
          width="450"
          height="250"
        />
      </p>
      <p className="text-center">
        This was one of the first projects I did and I was very proud of the out
        come.
        <img className="rounded" src={html} alt="" width="450" height="250" />
      </p>
      <p className="text-center">
        The quiz game was a fun yet tideous project. I had to use a lot of brain
        power.
        <img className="rounded" src={quiz} alt="" width="450" height="250" />
      </p>
      <p className="text-center">
        This was one of my favorite projects. I had a lot of fun building this
        team generator!
        <img className="rounded" src={team} alt="" width="450" height="250" />
      </p>
    </main>
  );
}
