import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t border-t-gray-400/30 bg-gray-100 p-4 dark:bg-gray-900">
      <a
        className="flex items-center gap-2"
        href="https://github.com/retardH/tweeep"
        target="_blank"
      >
        <Image
          src="/github-mark.svg"
          alt="Github Logo"
          width={30}
          height={30}
        />
        <span>Github</span>
      </a>
      <div className="font-medium italic">{`Tweeesh`}</div>
    </footer>
  );
};

export default Footer;
