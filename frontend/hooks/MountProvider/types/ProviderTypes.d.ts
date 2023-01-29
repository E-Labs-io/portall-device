/** @format */

import { type } from "os";

export interface MountProviderContextType {
  image: string;
  setImage: setStringFunction;
  mountWidth: number;
  mountColor: string;
  mountVisible: boolean;
  mediaShadowVisibility: boolean;
  mediaShadowStyle: ShadowStyle;
  mediaShadow: string;
  backgroundColor: string;
  reSizeMedia: number;
  handleMediaShadowVisibility: setBooleanFunction;
  updateColor: updateColor;
  setMountWidth: setNumberFunction;
  handleMountVisibility: setBooleanFunction;
  updateMediaPadding: setNumberFunction;
  updateMediaShadowStyle: updateMediaShadowStyle;
}

export type updateColor = (color: string, option: colorChangeOptions) => void;
export type colorChangeOptions = "mount" | "background";
export type setBooleanFunction = (flag: boolean) => void;
export type setStringFunction = (input: string) => void;
export type setNumberFunction = (value: number) => void;
export type updateMediaShadowStyle = (style: ShadowStyle) => void;

export type ShadowStyle = {
  color: string;
  feather: number;
  spread: number;
};
