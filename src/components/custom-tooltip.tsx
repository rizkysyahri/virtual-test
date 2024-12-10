import Image from "next/image";

export default function CustomTooltip({
  contentText,
  imageUrl,
}: {
  contentText: string;
  imageUrl: string;
}) {
  return (
    <div className="flex items-center bg-black text-white p-10 gap-3 rounded-md absolute z-[9999] pointer-events-none whitespace-nowrap">
      <Image
        src={imageUrl}
        alt="image"
        width={500}
        height={500}
        className="w-[40px] h-[40px] object-cover rounded-md"
      />
      <div className="max-w-[200px] break-words">{contentText}</div>
    </div>
  );
}
