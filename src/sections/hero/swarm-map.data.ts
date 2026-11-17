/*
 * Data for the hero animation: a floor plan explored by three robots, like
 * the EV3 swarm in the graduation project. `#` is a wall, `.` is open floor.
 * Robot routes are lists of [column, row] waypoints through open cells.
 */

export const FLOOR_PLAN = [
  "########################",
  "#..........#...........#",
  "#..........#...........#",
  "#..........#...........#",
  "#......................#",
  "#..........#####..######",
  "#..........#...........#",
  "####..######...........#",
  "#..........#...........#",
  "#..........#.....##....#",
  "#......................#",
  "#..........#.....##....#",
  "#..........#...........#",
  "#..........#...........#",
  "#..........#...........#",
  "########################",
];

export type Point = readonly [x: number, y: number];

// prettier-ignore
export const ROUTES: Point[][] = [
  [[2, 13], [9, 13], [9, 9], [4.5, 9], [4.5, 3], [9, 3], [9, 5], [2, 5], [2, 2]],
  [[12, 4], [12, 2], [21, 2], [21, 4], [16.5, 4], [16.5, 7], [13, 7]],
  [[12, 10], [15, 10], [15, 13], [21, 13], [21, 6], [19, 6]],
];

/** How far (in cells) a robot's infrared sensor can see. */
export const SENSOR_RANGE = 2.6;

/** Seconds for every robot to finish its route. */
export const DURATION = 9;

export const COLS = FLOOR_PLAN[0].length;
export const ROWS = FLOOR_PLAN.length;

type Route = { points: Point[]; lengths: number[]; total: number };

function measure(points: Point[]): Route {
  const lengths = points
    .slice(1)
    .map((p, i) => Math.hypot(p[0] - points[i][0], p[1] - points[i][1]));
  return { points, lengths, total: lengths.reduce((a, b) => a + b, 0) };
}

const routes = ROUTES.map(measure);

/** Robot position after `progress` (0 → 1) of its route. */
function positionOnRoute({ points, lengths, total }: Route, progress: number): Point {
  let remaining = Math.min(Math.max(progress, 0), 1) * total;
  for (let i = 0; i < lengths.length; i++) {
    if (remaining <= lengths[i]) {
      const f = lengths[i] === 0 ? 0 : remaining / lengths[i];
      const [x0, y0] = points[i];
      const [x1, y1] = points[i + 1];
      return [x0 + (x1 - x0) * f, y0 + (y1 - y0) * f];
    }
    remaining -= lengths[i];
  }
  return points[points.length - 1];
}

/** Path already travelled after `progress`, as points ending at the robot. */
function travelled(route: Route, progress: number): Point[] {
  const target = Math.min(Math.max(progress, 0), 1) * route.total;
  const result: Point[] = [route.points[0]];
  let walked = 0;
  for (let i = 0; i < route.lengths.length && walked + route.lengths[i] < target; i++) {
    walked += route.lengths[i];
    result.push(route.points[i + 1]);
  }
  result.push(positionOnRoute(route, progress));
  return result;
}

export function robotsAt(progress: number) {
  return routes.map((route) => ({
    position: positionOnRoute(route, progress),
    trail: travelled(route, progress),
  }));
}

export type Cell = { x: number; y: number; wall: boolean; revealAt: number };

/**
 * Every cell with the moment (0 → 1) it is first seen by any robot, or
 * Infinity if no robot gets close enough. Computed once at load.
 */
export const CELLS: Cell[] = (() => {
  const cells: Cell[] = [];
  const steps = 400;
  const samples = Array.from({ length: steps + 1 }, (_, i) => i / steps).map((p) =>
    routes.map((route) => positionOnRoute(route, p)),
  );
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      let revealAt = Infinity;
      for (let s = 0; s <= steps && revealAt === Infinity; s++) {
        for (const [rx, ry] of samples[s]) {
          if (Math.hypot(rx - x, ry - y) <= SENSOR_RANGE) {
            revealAt = s / steps;
            break;
          }
        }
      }
      cells.push({ x, y, wall: FLOOR_PLAN[y][x] === "#", revealAt });
    }
  }
  return cells;
})();
