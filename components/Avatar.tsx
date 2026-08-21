const GRADIENTS = [
  "from-lime-400/30 to-emerald-600/10",
  "from-cyan-400/25 to-sky-700/10",
  "from-amber-400/25 to-orange-700/10",
  "from-fuchsia-400/20 to-purple-700/10",
  "from-lime-300/25 to-teal-700/10",
];

function hashIndex(input: string, mod: number) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash % mod;
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Avatar({
  name,
  size = 56,
}: {
  name: string;
  size?: number;
}) {
  const gradient = GRADIENTS[hashIndex(name, GRADIENTS.length)];
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} border border-oss-border font-display font-semibold text-oss-text`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials(name)}
    </div>
  );
}
