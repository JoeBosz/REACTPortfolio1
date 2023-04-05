import React from "react";
import me from "../images/selfie.jpg";

export default function Bio() {
  return (
    <main>
      <p className=" text-center ">
        Hi my name is Joe, When I was a young boy I like to play minecraft and
        that sparked and interest in computers. I never really thoughy about
        builiding them let alone ever learning how to code on one. Till one day
        my uncle showed me a link and asked if I watned to go for it,
        considering a majority of my friends are computer science majors or know
        how to code I thought why not and would go for it. It started a love
        hate relationship with coding. I love learning but it is very hard
        sometimes. I enjoy the satisfaction of solving a error or even just
        gettign a simple container to look nice. I've been enjoying what I
        learned.
        < img 
        className="rounded"
        src={me}
        alt=""
        width="450"
        height="181"
      />
      </p>
      <figure></figure>
    </main>
  );
}
