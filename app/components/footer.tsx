import { Link } from "@remix-run/react";
import Container from "./container";
import { Facebook, Instagram } from "./icons";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-200">
      <Container>
        <footer className="footer p-10 text-neutral-content">
          <aside>
            <Link
              to="/"
              className="ml-5 flex items-center font-bold"
            >
            </Link>

            <p>
              <span className="font-semibold">Muslim League CT INC.</span>
              <br />
              Uniting muslims since 2020
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">LINKS</h6>

            <Link
              to="/about"
              className="link-hover link"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="link-hover link"
            >
              Contact
            </Link>
            <Link
              to="/rules"
              className="link-hover link"
            >
              Rules
            </Link>
            <Link
              to="/registration"
              className="link-hover link"
            >
              Registration 
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.instagram.com/muslimleaguect"
                rel="noreferrer"
                target="_blank"
              >
                <Instagram className="w-7 cursor-pointer fill-current" />
              </a>
              <a
                href="https://www.facebook.com/MuslimLeagueCT"
                rel="noreferrer"
                target="_blank"
              >
                <Facebook className="w-7 cursor-pointer fill-current" />
              </a>
            </div>
          </nav>
        </footer>
      </Container>
    </div>
  );
}
