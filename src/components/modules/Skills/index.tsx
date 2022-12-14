import Link from 'next/link';
import Image from 'next/future/image';

const Skills = () => (
  <div className="bg-[url('/assets/illustrations/details.svg')] bg-contain bg-no-repeat bg-left-top" id="about">
    <div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex-none lg:flex-1">
        <Image
          src="/assets/illustrations/skills.svg"
          alt="I’m Yannis and I’m a Frontend engineer!"
          width={447}
          height={326}
        />
      </div>
      <div className="flex-none lg:flex-1 pl-0 lg:pl-8">
        <h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">More about me</h2>
        <p className="mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography">
          I am a frontend engineer, experienced with all development cycle stages on several web projects. Currently
          working with React, TypeScript, Gatsby &amp; Next.
        </p>
        <Link href="#contact" scroll={false}>
          <a className="hover:bg-teal-500 duration-300 ease-in-out transition button bg-teal-600">Contact</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Skills;
