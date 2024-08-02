'use client';

import { cx } from 'class-variance-authority';

import { innerStylesWithModuleStyles } from '../List/List';
import SkeletonPoster from './SkeletonPoster';

type Props = Readonly<{
  className?: string;
  numberOfItems?: number;
  hasTitle?: boolean;
}>;

export default function SkeletonList({
  className,
  hasTitle = true,
  numberOfItems = 20,
}: Props) {
  return (
    <div className={cx('relative w-full', className)}>
      {hasTitle && (
        <div className="container relative flex items-center justify-between">
          <div className="h-9 w-80 bg-white/20" />
          <div className="ml-10 h-2 flex-grow rounded-2xl bg-white/10 md:ml-16" />
        </div>
      )}
      <div className={innerStylesWithModuleStyles()}>
        {[...Array(numberOfItems)].map((_, index) => (
          <SkeletonPoster key={index} />
        ))}
      </div>
    </div>
  );
}
