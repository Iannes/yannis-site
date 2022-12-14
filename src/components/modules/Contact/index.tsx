import Image from 'next/future/image';
import ContactForm from 'components/modules/Contact/ContactForm';

const Contact = () => (
  <div className="container py-16 flex items-start justify-between flex-col lg:flex-row" id="contact">
    <div className="flex-none w-full lg:w-auto lg:flex-1 pr-0 lg:pr-8 order-2 lg:order-1">
      <h2 className="text-2xl md:text-4xl font-bold mb-1">Contact me</h2>
      <span className="bg-black inline-block h-0.5 w-20 rounded mb-4" />
      <ContactForm />
    </div>
    <div className="flex-none w-full lg:w-auto lg:flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
      <Image
        src="/assets/illustrations/contact.svg"
        alt="I’m Yannis and I’m a Frontend engineer!"
        width={498}
        height={313}
      />
    </div>
  </div>
);

export default Contact;
