import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Cryptocurrency Not Found</h2>
        <p className="text-gray-600 mb-4">
          The cryptocurrency you are looking for does not exist or could not be
          found.
        </p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
