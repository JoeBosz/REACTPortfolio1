export default function Resume() {
  return (
    <main className="flex flex-col items-center justify-center">
      <a
        className="rounded-lg bg-lightpink px-5 text-center"
        href="https://docs.google.com/document/d/1vodTwuyGRayJlsegbbpd_G_K_GWYQBX2wptynW6PhJk/edit?usp=sharing"
        download
      >
        Download Resume
      </a>
      <figure className="mt-11 w-2/4 text-xl font-semibold text-green sm:justify-self-start">
        Skills:
      </figure>
      <figure className="w-2/4 sm:justify-self-start">
        I can commit to the hard work and satisfaction of my employer and team.
        I work hard in my newly leanred skills and I am always looking to learn
        more. I enjoy using mysql, Javascript, and React. I am always ready for
        a good challenge and will always try my best to solve it.
      </figure>
      <figure className="mt-11 w-2/4 text-xl font-semibold text-green sm:justify-self-start">
        Experience:
      </figure>
      <ul className="w-2/4 sm:justify-self-start">
        <li>This was my first 6 months of coding I have ever done</li>
        <li className="text-sm font-extralight">October 2022 - April 2023</li>
        <li className="ml-5 list-disc">
          Learned how to use multiple coding techniques
        </li>
        <li className="ml-5 list-disc">
          Learned how to activily problem solve
        </li>
        <li className="ml-5 list-disc">
          Experience with Javascript, MERN, and React.
        </li>
      </ul>
      <ul className="mt-6 w-2/4 sm:justify-self-start">
        <li>Buss Boy and Sever at Sunset Country Club </li>
        <li className="text-sm font-extralight">JANUARY 2019 - JUNE 2019</li>
        <li className="ml-5 list-disc">
          Provided great dining Experience for members
        </li>
      </ul>
      <figure className="mt-11 w-2/4 text-xl font-semibold text-green sm:justify-self-start">
        Education:
      </figure>
      <ul className="w-2/4 pb-16 sm:justify-self-start">
        <li>High School Diploma from Mehlville High School</li>
        <li>
          Washington University Full Stack Coding Bootcamp - Current Student
        </li>
      </ul>
    </main>
  );
}
