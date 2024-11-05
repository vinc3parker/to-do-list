import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const fontAwesomeIcons = [
  "dumbbell",
  "stethoscope",
  "utensils",
  "bed",
  "spa",
  "users",
  "code",
  "chart-line",
  "pencil-ruler",
  "calendar-alt",
  "calendar",
  "envelope",
  "shopping-cart",
  "broom",
  "book",
  "plane",
  "music",
  "book-reader",
  "file-alt",
  "chalkboard-teacher",
  "money-check-alt",
  "wallet",
  "chart-pie",
  "heart",
  "brain",
  "coffee",
];

const ionIcons = ["water", "library"];

const materialCommunityIcons = ["meditation"];

// Main Icon component to check and render icons based on available sets
const Icon = ({ iconName, size = 24, color = "black" }) => {
  if (fontAwesomeIcons.includes(iconName)) {
    return <FontAwesome name={iconName} size={size} color={color} />;
  } else if (ionIcons.includes(iconName)) {
    return <Ionicons name={iconName} size={size} color={color} />;
  } else if (materialCommunityIcons.includes(iconName)) {
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  } else {
    // Default error icon if none match
    return <FontAwesome name="exclamation-circle" size={size} color="red" />;
  }
};

export default Icon;
