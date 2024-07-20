import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
    <h2 className="my-10 text-center text-neutral-300 text-4xl">Get in Touch</h2>
    <div className="text-center tracking-tighter">
        <p className="my-4 text-neutral-400">{CONTACT.address}</p>
        <p className="my-4 text-neutral-400">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b text-neutral-400">
            {CONTACT.email}</a>
    </div>
    </div>
  );
};

export default Contact;