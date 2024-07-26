import { View } from "@react-pdf/renderer";
import tw from "./tailwind";

const Sidebar = () => {
  return (
    <View
      fixed={true}
      style={[tw("w-2/12 bg-gray-100 h-full -mt-8 h-screen"), {

      }]}
    />
  );
};
export default Sidebar;
