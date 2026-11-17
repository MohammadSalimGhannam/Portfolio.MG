"use client";

import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { ReplayIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { useI18n } from "@/providers/i18n";

import {
  CELLS,
  COLS,
  DURATION,
  ROWS,
  SENSOR_RANGE,
  robotsAt,
  type Point,
} from "./swarm-map.data";

const CELL = 10;
const center = (v: number) => v * CELL + CELL / 2;
const toPoints = (points: Point[]) =>
  points.map(([x, y]) => `${center(x)},${center(y)}`).join(" ");

/**
 * Three robots explore a floor plan; every cell their sensors reach is added
 * to the shared map. Plays once when it scrolls into view, then can be replayed.
 */
export function SwarmMap({ className }: { className?: string }) {
  const { dictionary } = useI18n();
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [runId, setRunId] = useState(0);

  // Drives `progress` from 0 to 1 while the map is visible.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reducedMotion) return; // The finished map is shown instead.

    let frame = 0;
    let start: number | null = null;
    let elapsed = 0;

    const tick = (now: number) => {
      start ??= now - elapsed;
      elapsed = now - start;
      const next = Math.min(elapsed / (DURATION * 1000), 1);
      setProgress(next);
      if (next < 1) frame = requestAnimationFrame(tick);
    };

    // Pause when off screen so it never runs unseen.
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      start = null;
      if (entry.isIntersecting && elapsed < DURATION * 1000)
        frame = requestAnimationFrame(tick);
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion, runId]);

  const replay = useCallback(() => {
    setProgress(0);
    setRunId((id) => id + 1);
  }, []);

  const shown = reducedMotion ? 1 : progress;
  const robots = robotsAt(shown);
  const done = shown >= 1;

  return (
    <figure ref={ref} className={className}>
      <div className="rounded-3xl border border-border bg-surface p-4 sm:p-6">
        <svg
          viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`}
          role="img"
          aria-label={dictionary.hero.mapLabel}
          className="block h-auto w-full"
        >
          {CELLS.map((cell) => {
            const seen = cell.revealAt <= shown;
            return (
              <g key={`${cell.x}-${cell.y}`}>
                <circle
                  cx={center(cell.x)}
                  cy={center(cell.y)}
                  r={0.9}
                  className={cn(
                    "fill-muted transition-opacity duration-500",
                    seen ? "opacity-0" : "opacity-40",
                  )}
                />
                <rect
                  x={cell.x * CELL + 1}
                  y={cell.y * CELL + 1}
                  width={CELL - 2}
                  height={CELL - 2}
                  rx={1.5}
                  className={cn(
                    "transition-opacity duration-500",
                    cell.wall ? "fill-foreground" : "fill-primary",
                    seen
                      ? cell.wall
                        ? "opacity-80 dark:opacity-60"
                        : "opacity-[0.12]"
                      : "opacity-0",
                  )}
                />
              </g>
            );
          })}

          {robots.map((robot, i) => (
            <g key={i}>
              <polyline
                points={toPoints(robot.trail)}
                fill="none"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2 3"
                className="stroke-primary opacity-60"
              />
              <circle
                cx={center(robot.position[0])}
                cy={center(robot.position[1])}
                r={SENSOR_RANGE * CELL}
                className={cn(
                  "fill-primary transition-opacity duration-700",
                  done ? "opacity-0" : "opacity-[0.07]",
                )}
              />
              <circle
                cx={center(robot.position[0])}
                cy={center(robot.position[1])}
                r={3.4}
                strokeWidth={1.5}
                className="fill-primary stroke-background"
              />
            </g>
          ))}
        </svg>
      </div>

      <figcaption className="mt-4 flex items-start justify-between gap-4 text-sm text-muted">
        <span>{dictionary.hero.mapCaption}</span>
        {!reducedMotion && (
          <button
            type="button"
            onClick={replay}
            disabled={!done}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs transition-[color,opacity] duration-300 hover:text-foreground disabled:opacity-0"
          >
            <ReplayIcon />
            {dictionary.hero.replay}
          </button>
        )}
      </figcaption>
    </figure>
  );
}
