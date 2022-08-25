import Header from "../Utils/Header/Header";
import ContactForm from "./ContactForm/ContactForm";
import contactIcons from "./contactIcons";

// TODO: get illustration for contact on right side

const Contact = () => {
  return (
    <section id="Contact" className="pb-32">
      <div className="section-container">
        <div className="md:flex items-center justify-between gap-10 w-[90vw] md:w-auto md:min-w-[60%] xl:min-w-[50%] md:max-w-[70%] mx-auto md:mx-0 pb-6">
          <Header text="Contact Me" />
          <div className="flex items-center gap-5 justify-center md:justify-start pb-2 md:pb-0">
            <a href="https://www.linkedin.com/in/dylan-harden/">
              <img
                src={contactIcons.linkedin}
                className="h-6 md:h-10 hover:cursor-pointer"
              />
            </a>
            <a href="https://github.com/Dylan-Harden3">
              <img
                src={contactIcons.github}
                className="h-6 md:h-10 hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
