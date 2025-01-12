import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/inspireotech-logo.appspot.com/o/email-image.png?alt=media&token=62457e53-49a5-4ba2-a205-d6e1a831c42d"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
