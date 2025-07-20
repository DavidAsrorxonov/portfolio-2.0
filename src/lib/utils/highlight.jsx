const rawWords = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Java",
  "C++",
  "technology",
  "personal growth",
  "psychology",
  "active",
  "disciplined",
  "Malaysia",
  "Japan",
  "every single day",
  "solid",
  "top",
  "launch",
];

// Escape special RegExp characters (like +, .)
const escapeRegExp = (word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightWords = rawWords.map(escapeRegExp);
const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");

const highlight = (text) => {
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    highlightWords.some((w) => new RegExp(`^${w}$`, "i").test(part)) ? (
      <span
        key={idx}
        className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text font-extrabold"
      >
        {part}
      </span>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
};

export default highlight;
