interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <div className="flex items-center justify-center w-full h-48">
      <div className="text-red-500">{message}</div>
    </div>
  );
}
