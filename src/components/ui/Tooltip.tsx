"use client";
import React from 'react';
import * as RTooltip from '@radix-ui/react-tooltip';

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
  children: React.ReactElement; // element to wrap
  content: React.ReactNode; // tooltip content
  side?: TooltipSide;
  offset?: number; // distance in px from trigger
  delay?: number;
  disabled?: boolean;
  className?: string;
  noArrow?: boolean;
}

export function Tooltip({
  children,
  content,
  side = 'top',
  offset = 6,
  delay = 120,
  disabled = false,
  className = '',
  noArrow = false,
}: TooltipProps) {
  if (disabled || !content) return children; // short-circuit

  return (
    <RTooltip.Provider delayDuration={delay} skipDelayDuration={0}>
      <RTooltip.Root>
        <RTooltip.Trigger asChild>
          {children}
        </RTooltip.Trigger>
        <RTooltip.Portal>
          <RTooltip.Content
            side={side}
            sideOffset={offset}
            className={`z-[2000] rounded px-2 py-1 text-[10px] font-medium bg-stone-800 text-stone-100 border border-stone-600 shadow-md animate-fade-in ${className}`}
          >
            {content}
            {!noArrow && (
              <RTooltip.Arrow className="fill-stone-800" />
            )}
          </RTooltip.Content>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  );
}
