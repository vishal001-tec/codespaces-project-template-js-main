/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/tech image.webp";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Ecommerce Website Frontend",
    description:
      "  Developed a versatile e-commerce platform using HTML, CSS, and JavaScript.Features include multi-page navigation, product listings, and detailed product information.Created a user-friendly interface  enhances the online shopping experience ",
    url: " https://vishal-ecommerce-web.netlify.app/",
  },
  {
    title: "Real E-State",
    description:
      "Built a single-page application using HTML, CSS, JavaScript, and React.js.Designed a user-friendly interface with seamless navigation and attractive animations.Utilized Vite for fast and efficient development, leveraging ES modules and a native development server.",
    url: " https://real-estate-woad-beta.vercel.app/",
  },
  {
    title: "Social Media App",
    description:
      "Created a social media application similar to Instagram using React.js.Integrated Appwrite for backend functionalities, similar to Firebase.Developed a simple yet attractive UI to provide an engaging user experience",
    url: "https://social-media-app-blush-nine.vercel.app/",
  },
  {
    title: "Shoes Website",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{backgroundColor:"lightgray"}}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
