import React from "react";
import "../styles/Home.scss";
import vg from "../assets/7.jpg";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solutions to alll your problems</p>
        </main>
      </div>
      <div className="home1">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in youth
          </p>
        </div>
      </div>
      <div className="home2" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            soluta doloremque dolor labore eveniet beatae repudiandae
            accusantium vero tenetur ea at alias possimus corrupti, blanditiis
            fuga nostrum. Sint ut quos repellendus facilis officia quis
            obcaecati. Mollitia vel architecto exercitationem recusandae!
            Accusamus provident soluta maiores doloremque quos libero laudantium
            praesentium impedit dicta vel minima magnam rem incidunt, et eveniet
            sint nemo. Ipsum molestiae, eaque ex esse minima vitae voluptatibus!
            Aspernatur architecto aliquid molestiae. Autem harum in odio tenetur
            aspernatur similique! Quis iusto obcaecati voluptatum ad
            repudiandae. Asperiores, commodi corporis magnam enim itaque vel
            quae quibusdam ratione voluptas minima dolore voluptate provident.
          </p>
        </div>
      </div>
      <div className="home3" id = 'brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div 
            style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div 
            style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div 
            style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div 
            style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
