export enum Direction {
	N = 0,
	E = 1,
	S = 2,
	W= 3,
	NONE = -1
}


export enum COMMAND_DICT {
	NOT_VALID,
	LEFT,
	RIGHT,
	PLACE,
	MOVE,
	REPORT
}

export interface RobotSate {
  x: number
  y: number
  f: Direction
}


export const robotCols= 5;
export const robotRow = 5;
