import { PieceType } from "../../utils/piece";
import { DeepReadonly } from "utility-types";

export type BoardState = DeepReadonly<{
  pieces: IPieces;
  size: number;
}>;

export interface IPiecesById {
  [id: string]: IPieceData;
}

export interface IPieceData {
  col: number;
  row: number;
  isWhite: boolean;
  type: PieceType;
  everMoved?: boolean;
  canBeCaptured?: boolean;
  castled?: boolean;
}

interface IPieces {
  byId: IPiecesById;
  allIds: Array<string>;
}

export interface IMove {
  id: string;
  position: IPosition;
}

export interface IPosition {
  row: number;
  col: number;
}

export enum BoardActionTypes {
  RESET = "@@board/BOARD",
  MOVE = "@@board/MOVE",
  MOVE_FAILED = "@@board/MOVE_FAILED",
  CAPTURE_IN_PASSING = "@@board/CAPTURE_IN_PASSING",
  SET_SIZE = "@@board/SET_SIZE"
}
