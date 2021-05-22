import "../styles/about.css";
import Customnav from "../layout/customnavbar";
import img1 from "../../assets/img1.png";

function About() {
  return (
    <>
      <section class="about__page-part1">
        <Customnav color="" height="50px" padding="5vh" />
        <section className="parent">
          <div class="col-7 daughter">
            <img src={img1} alt="loading" />
          </div>
          <div class="col-5 son">
            <div className="son__Para">
              <h3>
                <span>Codeflow</span>
              </h3>
              <h3> known for hackathons!</h3>
              <p>
                Codeflow is an organisatiom whose main motive is to empower
                student community by organising webinars, hackathons and open
                source events
              </p>
            </div>
          </div>
        </section>
        <section className="about__page-text-wrapper">
          <article>
            <h3 className="about__page-title">
              <span>About</span> Us
            </h3>
            <p>
              Codeflow is an organisatiom whose main motive is to empower
              student community by organising webinars, hackathons and open
              source events
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              tenetur similique magni iusto provident quam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              omnis sapiente reiciendis, at eligendi iusto a similique nostrum
              neque consequuntur blanditiis est quibusdam eum dignissimos
              laudantium ipsa? Culpa modi rerum, repellendus corporis adipisci
              corrupti cumque!
            </p>
          </article>
        </section>
      </section>
      <section className="about__page-part2">
        <section className="about__page-text-wrapper">
          <article>
            <h3 className="about__page-title">
              <span>Our</span> Motive
            </h3>
            <p>
              Codeflow is an organisatiom whose main motive is to empower
              student community by organising webinars, hackathons and open
              source events
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              tenetur similique magni iusto provident quam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              omnis sapiente reiciendis, at eligendi iusto a similique nostrum
              neque consequuntur blanditiis est quibusdam eum dignissimos
              laudantium ipsa? Culpa modi rerum, repellendus corporis adipisci
              corrupti cumque!
            </p>
          </article>
        </section>
        <section className="about__page-text-wrapper">
          <article>
            <h3 className="about__page-title">
              <span>Our</span> Methodology
            </h3>
            <p>
              Codeflow is an organisatiom whose main motive is to empower
              student community by organising webinars, hackathons and open
              source events
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              tenetur similique magni iusto provident quam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              omnis sapiente reiciendis, at eligendi iusto a similique nostrum
              neque consequuntur blanditiis est quibusdam eum dignissimos
              laudantium ipsa? Culpa modi rerum, repellendus corporis adipisci
              corrupti cumque!
            </p>
          </article>
        </section>
      </section>
    </>
  );
}

export default About;
