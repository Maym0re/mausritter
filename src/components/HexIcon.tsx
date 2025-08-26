import React from 'react';
import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

interface HexIconProps {
  iconUrl: string;
  x: number;
  y: number;
  size: number;
}

export const HexIcon: React.FC<HexIconProps> = ({ iconUrl, x, y, size }) => {
  const [image] = useImage(iconUrl);

  if (!image) return null;

  return (
    <KonvaImage
      image={image}
      x={x - size / 2}
      y={y - size / 2}
      width={size}
      height={size}
    />
  );
};
