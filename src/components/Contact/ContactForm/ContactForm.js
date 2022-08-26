import "./ContactForm.css";
import emailjs from "emailjs-com";

// TODO: move keys to env file
// TODO: add icon, animation for send

const ContactForm = () => {
  const submitEmail = (e) => {
    e.preventDefault();
    console.log("send clicks");
    emailjs
      .sendForm(
        "service_7g1ziij",
        "template_pk9i5io",
        e.target,
        process.env.REACT_APP_MY_ID
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form
      onSubmit={submitEmail}
      className="w-[90vw] md:w-auto md:min-w-[60%] xl:min-w-[50%] md:max-w-[70%] mx-auto md:mx-0 md:block"
      autoComplete="off"
    >
      <label for="name" className="font-poppins">
        Name
      </label>
      <input type="text" id="name" name="name" className="bg-altBlue" />
      <label for="email" className="font-poppins">
        Email Address
      </label>
      <input type="text" id="email" name="email" className="bg-altBlue" />
      <label for="message" className="font-poppins">
        Message
      </label>
      <textarea id="message" name="message" className="bg-altBlue" />
      <input
        type="submit"
        value="Send"
        className="bg-lightBlue w-[90vw] sm:w-1/4 mt-6 px-4 mx-auto sm:mx-0 hover:cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
