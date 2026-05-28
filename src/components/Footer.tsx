import { Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="rounded-lg mt-4 flex justify-center font-mono font-bold text-[#0f380f]">
      <div className="flex items-center gap-4">
        <div>&copy; 2026 Toshiyasu Takahashi</div>
        <a
          href="https://github.com/toshi-0426/8-puzzle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[#e0f8cf] cursor-pointer "
        >
          <Github className="size-4 font-bold" />
          <span>SOURCE</span>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
