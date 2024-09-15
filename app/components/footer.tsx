import Container from "./container";
import trumpy from "../assets/company/trumpy.png";

export default function Footer() {
  return (
    <>
      <div className="h-40"/>
      <footer className="footer p-10 text-neutral-content">
        <Container>
          <div className="m-auto flex flex-col">
            <img
              className="h-12 md:h-14 w-auto m-auto"
              src={trumpy}
              alt="A stick figure Logo of a peaceful trumpet player"
            />

            <p className="cursor-default">
              &copy; Copyright 1977 Miloud Photography
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
