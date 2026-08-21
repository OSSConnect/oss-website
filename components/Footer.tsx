import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-oss-muted sm:flex-row">
        <a href="/" className="flex items-center">
          <Image 
            src="/osslogo.png" 
            alt="OSS | Let's Connect Logo" 
            width={40} 
            height={40} 
            className="h-10 w-10 rounded-full object-cover" 
          />
        </a>
        <p>&copy; {new Date().getFullYear()} OSS | Let&rsquo;s Connect. All rights reserved.</p>
      </div>
    </footer>
  );
}
