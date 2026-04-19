interface FigureVideoProps {
  youtubeUrl: string;
  caption?: string;
  figureNumber: number;
  title?: string;
}

function getYoutubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : '';
}

export default function FigureVideo({ youtubeUrl, caption, figureNumber, title }: FigureVideoProps) {
  const id = getYoutubeId(youtubeUrl);
  return (
    <figure className="my-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200 bg-[#F8F8F8] aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title || `Figure ${figureNumber}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-500 leading-relaxed">
          <span className="font-medium text-[#762123]/70">Figure {figureNumber}.</span> {caption}
        </figcaption>
      )}
    </figure>
  );
}
