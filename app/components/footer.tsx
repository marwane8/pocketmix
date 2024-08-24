import Container from "./container";
import { FlowerLogo } from "./icons";

export default function Footer() {
  return (
    <footer className="footer p-10 text-neutral-content">
      <Container>
        <div className="m-auto">
          <FlowerLogo className="w-36 m-auto rotate-180" />
          <p className="cursor-default"> &copy; Copyright 2024 Light Click Photo </p>
        </div>
      </Container>
    </footer>
  );
}
