import Link from 'next/link';
import Image from 'next/future/image';
import Header from 'components/ui/theme/Header';

const Intro = () => (
  <div className="bg-[url('/assets/illustrations/contact-overlay.svg')] md:bg-[url('/assets/illustrations/overlay.svg')] bg-contain bg-right-top bg-no-repeat pb-16">
    <Header page="home" />
    <div className="container py-16 flex items-center flex-col md:flex-row justify-between">
      <div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography">
          Hello
          <span className="pl-2 inline-block animate-waving-hand">👋</span>
        </h1>
        <h2 className="mb-[2.5rem] text-2xl md:text-4xl text-brand-secondary dark:text-slate-200 typography">
          I&apos;m Yannis, a frontend engineer working with React &amp; TypeScript&#x21;
        </h2>
        <Link href="#contact" passHref>
          <a className="button bg-teal-600 hover:translate-y-minus-2 hover:translate-y-minus-2 hover:bg-teal-500 duration-300 ease-in-out transition">
            Contact
          </a>
        </Link>
      </div>
      <div className="flex-1 w-full md:w-1/2">
        <Image
          src="/assets/illustrations/dev.svg"
          alt="I'm Yannis, a Frontend engineer!"
          width={463}
          height={273}
          priority
        />
      </div>
    </div>
  </div>
);

export default Intro;
