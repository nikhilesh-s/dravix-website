interface FigureImageProps {
  src: string;
  caption: string;
  figureNumber: number;
  title?: string;
}

export default function FigureImage({ src, caption, figureNumber, title }: FigureImageProps) {
  return (
    <figure className="my-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#F8F8F8]">
        <img
          src={src}
          alt={title || `Figure ${figureNumber}`}
          className="w-full object-contain max-h-[480px]"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">
        <span className="font-medium text-[#762123]/70">Figure {figureNumber}.</span> {caption}
      </figcaption>
    </figure>
  );
}
