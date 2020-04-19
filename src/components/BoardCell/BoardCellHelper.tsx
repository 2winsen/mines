import { Cell } from "../../types/Cell";

let lockedCell: Cell | undefined = undefined;

export const setMultiTouchLockedCell = (cell: Cell | undefined) => {
  lockedCell = cell;
}

export const isMultiTouchLocked = (cell: Cell) => {
  if (lockedCell == null) {
    return false;
  }
  if (lockedCell.col !== cell.col || lockedCell.row !== cell.row) {
    return true;
  }
  return false;
}