import Container from "./container";
import trumpy from "../assets/trumpy.png";

export default function Footer() {
  return (
    <footer className="footer p-10 text-neutral-content">
      <Container>
        <div className="m-auto flex flex-col">
          <img
            className="h-16 w-auto m-auto"
            src={trumpy}
            alt="A stick figure Logo of a peaceful trumpet player"
          />

          <p className="cursor-default">
            {" "}
            &copy; Copyright 1976 Miloud Photography{" "}
          </p>
        </div>
      </Container>
    </footer>
  );
}
