import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  GiWheat,
  GiPineTree,
  GiWaterDrop,
  GiVillage,
  GiMountains,
  GiSwamp,
  GiCastle,
  GiStonePile,
  GiTreehouse,
  GiCampfire,
  GiCrystalBall
} from 'react-icons/gi';

// Функция для конвертации React-иконки в SVG data URL
export const iconToDataUrl = (IconComponent: React.ComponentType<any>, size: number = 24, color: string = '#000000') => {
  const svgString = renderToStaticMarkup(
    <IconComponent size={size} color={color} />
  );

  // Создаем data URL из SVG
  const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;
  return dataUrl;
};

// Предварительно созданные data URLs для иконок
export const iconDataUrls = {
  countryside: iconToDataUrl(GiWheat, 24, '#000000'),
  forest: iconToDataUrl(GiPineTree, 24, '#000000'),
  river: iconToDataUrl(GiWaterDrop, 24, '#000000'),
  human_town: iconToDataUrl(GiVillage, 24, '#000000'),
  mountains: iconToDataUrl(GiMountains, 24, '#000000'),
  swamp: iconToDataUrl(GiSwamp, 24, '#000000'),
  settlement: iconToDataUrl(GiCastle, 28, '#000000'),
  landmark_ruins: iconToDataUrl(GiStonePile, 26, '#000000'),
  landmark_tree: iconToDataUrl(GiTreehouse, 26, '#000000'),
  landmark_camp: iconToDataUrl(GiCampfire, 26, '#000000'),
  landmark_default: iconToDataUrl(GiCrystalBall, 26, '#000000'),
};

// Функция для получения иконки по типу гекса
export const getHexTypeIconUrl = (hexTypeId: string): string => {
  const iconMap: { [key: string]: string } = {
    'countryside': iconDataUrls.countryside,
    'forest': iconDataUrls.forest,
    'river': iconDataUrls.river,
    'human_town': iconDataUrls.human_town,
    'mountains': iconDataUrls.mountains,
    'swamp': iconDataUrls.swamp,
  };
  return iconMap[hexTypeId] || iconDataUrls.countryside;
};

// Функция для получения иконки ориентира
export const getLandmarkIconUrl = (landmarkName: string): string => {
  const name = landmarkName.toLowerCase();

  if (name.includes('ruins') || name.includes('stone')) {
    return iconDataUrls.landmark_ruins;
  } else if (name.includes('tree') || name.includes('stump')) {
    return iconDataUrls.landmark_tree;
  } else if (name.includes('camp') || name.includes('fire')) {
    return iconDataUrls.landmark_camp;
  }

  return iconDataUrls.landmark_default;
};
