/** @format */

import { useContext } from "react";
import { MountProviderContext } from "../components/MountProvider";

const useMountProvider = () => useContext(MountProviderContext);

export default useMountProvider;
