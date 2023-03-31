import Link from "next/link";
import Image from "next/image";
import chakraLogo from "@/public/logos/logo-colored@2x.png";
import tailwindLogo from "@/public/logos/tailwindcss-logotype.svg";

const Page = () => {
  return (
    <div style={{ width: "40vw", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href={"/chakra"}>
          <div
            style={{ height: "120px", width: "240px", position: "relative" }}
          >
            <Image
              src={chakraLogo}
              alt={"Chakra UI Logo"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href={"/tailwind"}>
          <div
            style={{ height: "120px", width: "240px", position: "relative" }}
          >
            <Image
              src={tailwindLogo}
              alt={"Tailwind CSS Logo"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Page;
