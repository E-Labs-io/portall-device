/** @format */

import { useContext } from "react";
import { FrameProviderContext } from "../components/FrameProvider";

const useFrameProvider = () => useContext(FrameProviderContext);

export default useFrameProvider;
