import { useTheme } from 'next-themes';
import Sun from 'components/ui/Icons/Sun';
import Moon from 'components/ui/Icons/Moon';

enum Theme {
  light = 'light',
  dark = 'dark',
}

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleClick: () => void = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  return (
    <button
      className="text-left lg:text-center bg-none border-none cursor-pointer transition-all duration-300 focus:transition-all focus:duration-300"
      type="button"
      onClick={handleClick}
      aria-label="Toggle theme"
    >
      {theme === Theme.dark ? (
        <Sun className="text-black dark:text-white lg:dark:text-black" />
      ) : (
        <Moon className="text-black dark:text-white lg:dark:text-black" />
      )}
    </button>
  );
};

export default ToggleTheme;
