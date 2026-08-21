export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-oss-muted sm:flex-row">
        <div className="flex items-center gap-2 font-display font-medium text-oss-text">
          <span className="text-oss-lime">{"<."}</span>
          oss <span className="text-oss-border">|</span> Let&rsquo;s connect
        </div>
        <p>&copy; {new Date().getFullYear()} OSS. All rights reserved.</p>
      </div>
    </footer>
  );
}
