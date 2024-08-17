"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.webp"
        alt="Error"
        width={300}
        height={300}
        priority
        className="dark:hidden"
      />
      <Image
        src="/error-dark.webp"
        alt="Error"
        width={300}
        height={300}
        priority
        className="dark:block hidden"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
