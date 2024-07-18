import { Document, Page, View, Text, Font } from "@react-pdf/renderer";
import tw from "./tailwind";

const SidebarContent = () => {
  return (
    <>
      <View style={tw("flex flex-row items-center justify-center")}>
        <Text
          style={[
            {
              fontSize: 16,
              fontFamily: "Garamond",
              fontWeight: 600,
            },
          ]}
        >
          Bas van Driel
        </Text>
      </View>
      <View style={tw("flex flex-row items-center justify-center")}>
        <Text
          wrap={false}
          style={[
            {
              fontSize: 8,
              fontFamily: "Garamond",
              fontWeight: 600,
            },
          ]}
        >
          Senior Python Developer, DevOps Engineer
        </Text>
      </View>
    </>
  );
};

const Sidebar = () => {
  return (
    <View
      style={tw("w-4/12 bg-gray-100 pt-12 shadow-md h-screen")}
      fixed
      render={({ pageNumber }) => pageNumber === 1 && <SidebarContent />}
    />
  );
};
export default Sidebar;
