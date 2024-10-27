import Heading from "#react/Heading";

const heading = "Jon Simeon";

const Logo = () => {
  return (
    <div className="bg-accent py-1 px-3 w-fit rounded-full self-start z-20 hover:scale-110 transition-transform">
      <a href="/" className="z-20">
        <Heading
          tagName="h1"
          size="h3"
          addMargin={false}
          classes="text-base-300"
        >
          {heading.toUpperCase()}
        </Heading>
      </a>
    </div>
  );
};

export default Logo;
