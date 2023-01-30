/** @format */

import { useContext } from "react";
import { PortalProviderContext } from "../components/PortalProvider";

const usePortalProvider = () => useContext(PortalProviderContext);

export default usePortalProvider;
