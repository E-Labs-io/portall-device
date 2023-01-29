/** @format */

import { type } from "os";

export interface MountProviderContextType {
  mountWidth: number;
  mountColor: string;
  mountVisible: boolean;
  mediaShadow: boolean;
  backgroundColor: string;
  reSizeMedia: number;
  handleMediaShadowVisibility: setBooleanFunction;
  updateColor: updateColor;
  setMountWidth: setMountWidth;
  handleMountVisibility: setBooleanFunction;
  updateMediaPadding: updateMediaPadding;
}

export type setMountWidth = (width: number) => void;
export type updateMediaPadding = (padding: number) => void;
export type updateColor = (color: string, option: colorChangeOptions) => void;
export type colorChangeOptions = "mount" | "background";
export type setBooleanFunction = (flag: boolean) => void;
