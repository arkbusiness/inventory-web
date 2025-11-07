import Link from "next/link";
import Image from "next/image";
import { APP_ROUTES } from "@/constants";

export function Logo() {
  return (
    <Link href={APP_ROUTES.root()}>
      <Image
        src="/logo.svg"
        alt="Ark Logo"
        width={50}
        height={60}
        className="h-[60px] w-[50px]"
      />
    </Link>
  );
}
