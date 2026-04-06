
function AboutImg({ img, alt }) {
  return (
    <img
      src={img}
      alt={alt}
      className="w-full h-full object-cover rounded-2xl shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl"
    />
  );
}

export default AboutImg;
