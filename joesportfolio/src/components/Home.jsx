import me from "../images/selfie.jpg";

export default function Home() {
  return (
    <main>
      <p className=" text-center ">This is my portfolio!</p>

      <figure>
      <img
          className="rounded" 
          src={me}
          alt=""
          width="450"
          height="181"
        />
      </figure>
    </main>
  );
}
