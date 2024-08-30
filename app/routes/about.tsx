import profile from "~/assets/profile.jpg";

export default function About() {
  return (
    <div className="  flex flex-col items-center lg:flex-row lg:items-end  max-w-screen-lg m-auto gap-10 my-5">
      <img
        className="h-[500px] object-contain"
        src={profile}
        alt="Miloud holding his camera in an lushious golf course."
      />

      <div className="flex flex-col gap-5 text-lg max-w-screen-sm mx-5">
        <h1 className="text-4xl font-bold text-center font-playfair_d">
          Miloud
        </h1>
        <h2>
          I&apos;M MILOUD, A MOROCCAN AMERICAN EVENTS AND TRAVEL PHOTOGRAPHER
          BASED IN ASTORISIA, QUEENS NY.
        </h2>

        <p>
          For over 47 years, I&apos;ve had the privilege of capturing moments
          and stories through my lens, both in the vibrant streets of New York
          and across the globe. I&apos;m grateful you&apos;ve taken the time to
          visit my page, where I share the work that has taken me to countless
          destinations, allowing me to document diverse cultures and
          breathtaking landscapes.
        </p>
        <p>
          Astoria has been my home for many years, and it&apos;s where I draw
          much of my inspiration. The rich history and dynamic community here
          have always fueled my creativity. When I&apos;m not behind the camera,
          you might find me exploring the local arts scene or enjoying the
          unique flavors that Queens has to offer.
        </p>
        <p>
          Photography has been more than just a career for me—it&apos;s been a
          lifelong passion. Whether I&apos;m capturing the intimacy of a wedding
          or the essence of a far-off place, my goal is always to tell a story
          that resonates. If my work speaks to you, I&apos;d love to hear from
          you and explore what we can create together. Let&apos;s connect and
          bring your vision to life.
        </p>
      </div>
    </div>
  );
}
