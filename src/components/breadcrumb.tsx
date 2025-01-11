import Link from "next/link";

interface PageHolderProps {
  coinName: string;
  coinId: string;
}

export default function BreadCrumb({ coinName, coinId }: PageHolderProps) {
  return (
    <nav className="flex lg:pl-14 ml-4 pt-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-sm text-[#3E5765] hover:text-[#0F1629]"
          >
            Cryptocurrencies
          </Link>
        </li>
        <li className="text-sm text-[#3E5765]">&gt;&gt;</li>
        <li>
          <Link
            href={`/${coinId}`}
            className="text-sm text-[#0F1629]"
            aria-current="page"
          >
            {coinName}
          </Link>
        </li>
      </ol>
    </nav>
  );
}
