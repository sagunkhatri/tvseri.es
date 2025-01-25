import { type ReactNode } from 'react';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { type TvSeries } from '@/types/tv-series';

export default function InfoLine({
  children,
  className,
  tvSeries,
}: Readonly<{
  children?: ReactNode;
  className?: string;
  tvSeries: TvSeries;
}>) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-1 whitespace-nowrap text-xs',
        className,
      )}
    >
      <div className="opacity-60">{tvSeries.releaseYear}</div>
      <div className="opacity-60 before:mr-1 before:content-['·'] md:before:mr-2">
        {tvSeries.numberOfSeasons}{' '}
        {tvSeries.numberOfSeasons === 1 ? 'Season' : 'Seasons'}
      </div>
      {tvSeries.genres.length > 0 && (
        <>
          <div className="hidden opacity-60 before:mr-1 before:content-['·'] md:block md:before:mr-2">
            {tvSeries.genres.map((genre, index) => (
              <Link
                key={genre.id}
                href={`/discover?with_genres=${genre.id}`}
                className="hover:underline"
              >
                {genre.name}
                {index < tvSeries.genres.length - 1 ? ', ' : ''}
              </Link>
            ))}
          </div>
          <div className="opacity-60 before:mr-1 before:content-['·'] md:hidden md:before:mr-2">
            <Link
              href={`/discover?with_genres=${tvSeries.genres?.[0].id}`}
              className="hover:underline"
            >
              {tvSeries.genres?.[0].name}
            </Link>
          </div>
        </>
      )}
      {children}
    </div>
  );
}
