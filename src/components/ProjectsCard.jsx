import GuidingLine from "./GuidingLine";

const ProjectCard = ({ id, img, title, description, link }) => {
  return (
    <div
      className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg group"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition duration-300"></div>
      <div className="absolute bottom-0 p-4 text-white">
        <h2 className="text-8xl font-bold">{title}</h2>
        <p className="text-3xl mt-1">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-3 text-blue-300 hover:text-blue-400 transition"
        >
          <span className="ml-2">View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
