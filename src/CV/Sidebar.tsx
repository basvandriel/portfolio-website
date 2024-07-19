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
      // wrap={false}
      fixed={true}
      style={[tw("w-2/12 bg-gray-100 shadow-md flex-grow h-full -mt-8 h-screen"), {

      }]}
      render={({ pageNumber }) => pageNumber === 0 && <SidebarContent />}
    />
  );
};
export default Sidebar;
