//入口
import { makeInstaller } from "@sunny-ui/utils";
import components from "./components";
import '@sunny-ui/theme/index.css';
const installer = makeInstaller(components);

export * from "@sunny-ui/components";
export default installer;