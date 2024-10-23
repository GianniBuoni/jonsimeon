import Heading from "#react/Heading";
import Link from "#react/Link";

const heading = "Jon Simeon";

const Logo = () => {
  return (
    <Link href="/" classes="z-20">
      <div className="bg-accent py-1 px-3 w-fit rounded-full self-start z-20">
        <Heading
          tagName="h1"
          size="h3"
          addMargin={false}
          classes="text-base-300"
        >
          {heading.toUpperCase()}
        </Heading>
      </div>
    </Link>
  );
};

export default Logo;
