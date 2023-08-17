import Image from "next/image";

import styles from "./page.module.css";
import avatarImg from "@public/avatar.png";
import { ProjectsDisplay } from "./projects-display";

export default function Home() {
  return (
    <>
      <header className={`${styles.flex} ${styles.flexCenter}`}>
        <div className={`${styles.flex} ${styles.content__container}`}>
          <div className={`${styles.avatar__container} ${styles.flex}`}>
            <div className={styles.avatar}>
              <Image src={avatarImg} alt="John's avatar" />
            </div>
            <p>&copy; John Smith</p>
          </div>
          <nav>
            <ul className={`${styles.nav__links} ${styles.flex}`}>
              <li aria-current="true">
                <a href="#about" className={styles.nav__link}>
                  About
                </a>
              </li>
              <li aria-current="false">
                <a href="#work" className={styles.nav__link}>
                  Work
                </a>
              </li>
              <li aria-current="false">
                <a href="#solutions" className={styles.nav__link}>
                  Solutions
                </a>
              </li>
            </ul>
            <button></button>
          </nav>
        </div>
      </header>
      <main className={`${styles.flex} ${styles.column}`}>
        <section
          id="about"
          className={`${styles.flex} ${styles.column} ${styles.about}`}>
          <div className={styles.content__container}>
            <h1>
              I&apos;m John, and I turn ideas into digital experiences that
              people love.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <div className={`${styles.button__container} ${styles.flex}`}>
              <button className={styles.btnPrimary}>Start a project</button>
              <button className={styles.btnAccent}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 7l-10 10"></path>
                  <path d="M8 7l9 0l0 9"></path>
                </svg>
              </button>
            </div>
            <div className={styles.summary}>
              <p>
                Welcome, make yourself at home. I am a multidisciplinary web
                designer, designing and building beautiful digital products, for
                companies around the world.
                <br />
                <br />I believe that design should be both functional and
                aesthetically pleasing, and I am dedicated to delivering
                exceptional user experiences through thoughtful design and
                meticulous attention to detail.
              </p>
              <div className={`${styles.button__container} ${styles.flex}`}>
                <a className={styles.resume__link}> Download resume </a>
                <button className={styles.btnAccent}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="work"
          className={`${styles.flex} ${styles.flexCenter} ${styles.workSection}`}>
          <div
            className={`${styles.content__container} ${styles.flex} ${styles.column}`}>
            <h2>The work I do</h2>
            <ProjectsDisplay />
          </div>
        </section>
        <section
          id="solutions"
          className={`${styles.services} ${styles.flex} ${styles.flexCenter}`}>
          <div className={styles.content__container}>
            <h2>I can help you with</h2>
            <div className={`${styles.service__options} ${styles.grid}`}>
              <div
                className={`${styles.service__option} ${styles.flex} ${styles.column}`}>
                <h4>Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <ul className={`${styles.flex} ${styles.column}`}>
                  <li>Websites</li>
                  <li>Mobile apps</li>
                  <li>Web apps</li>
                  <li>Design systems</li>
                  <li>Branding</li>
                </ul>
              </div>
              <div
                className={`${styles.service__option} ${styles.flex} ${styles.column}`}>
                <h4>Development</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <ul className={`${styles.flex} ${styles.column}`}>
                  <li>Websites</li>
                  <li>Mobile apps</li>
                  <li>Web apps</li>
                </ul>
              </div>
              <div
                className={`${styles.service__option} ${styles.flex} ${styles.column}`}>
                <h4>Full Package</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
                <ul className={`${styles.flex} ${styles.column}`}>
                  <li>Design + Development</li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.pricing} ${styles.flex} ${styles.column}`}>
              <p>
                Get the Full Package, Design + Development with requests &
                revisions. No expensive hourly billing. Flat monthly rate. Pause
                anytime.
              </p>
              <h2>
                $2999 <span>/month</span>
              </h2>
              <p>
                Ideal for websites, web aps, and brand design projects, custom
                code solutions, blogs and app dashboard design.
              </p>
            </div>
            <div
              className={`${styles.section__footer} ${styles.flex} ${styles.column}`}>
              <div className={`${styles.section__footerRow} ${styles.flex}`}>
                <div className={styles.avatar}>
                  <Image src={avatarImg} alt="John's avatar" />
                </div>
                <button className={styles.btnLight}>Start a project</button>
                <button className={styles.btnAccent}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                </button>
              </div>
              <p>
                Don&apos;t know if it fits you or not?
                <br className={styles.section__footer_mobileBreak} />
                <span>Let&apos;s have a call</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className={`${styles.flex} ${styles.flexCenter}`}>
        <div className={styles.content__container}>
          <p className={styles.social__label}>SOCIAL MEDIA</p>
          <ul className={`${styles.social__links} ${styles.flex}`}>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
