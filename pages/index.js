import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="text-2x1 text-blue-700">
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
