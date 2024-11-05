import Heading from "#react/Heading";

const heading = "Jon Simeon";

const Logo = () => {
  return (
    <a href="/" className="z-20 w-fit">
      <div className="bg-accent py-1 px-3 w-fit rounded-full self-start z-20 hover:scale-110 transition-transform">
        <Heading
          tagName="h1"
          size="h3"
          addMargin={false}
          classes="text-base-300"
        >
          {heading.toUpperCase()}
        </Heading>
      </div>
    </a>
  );
};

export default Logo;
