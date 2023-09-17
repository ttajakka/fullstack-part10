import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white
  },
  topRow: {
    flexDirection: 'row',
    padding: 15
  },
  infoCol: {
    paddingRight: 20,
    marginHorizontal: 20
  },
  tinyLogo: {
    width: 45,
    height: 45,
    borderRadius: 4
  },
  languagePill: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 6
  },
  numbersRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  numberItem: {
    alignItems: "center"
  },
  bottomDivider: {
    height: 10,
  }
});

const NumberItem = ({ num, label }) => {

  const toKnotation = (n) => {
    if (n < 1000) return n.toString();

    return (n / 1000).toFixed(1).toString() + "k";
  }
  return (
    <View style={styles.numberItem}>
      <Text fontWeight="bold" style={{ paddingBottom: 5 }}>{toKnotation(num)}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  )
}

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.infoCol}>
          <Text style={{ paddingBottom: 8 }}
            fontSize="subheading"
            fontWeight="bold"
          >
            {fullName}
          </Text>
            <Text style={{ paddingBottom: 8 }}
              color="textSecondary"
            >
              {description}
            </Text>
          <View style={{ flexDirection: "row" }}><Text style={styles.languagePill}>{language}</Text></View>
        </View>

      </View>
      <View style={styles.numbersRow}>
        <NumberItem num={stargazersCount} label={"Stars"} />
        <NumberItem num={forksCount} label={"Forks"} />
        <NumberItem num={reviewCount} label={"Reviews"} />
        <NumberItem num={ratingAverage} label={"Rating"} />
      </View>
      <View style={styles.bottomDivider}></View>
    </View>
  )
}

export default RepositoryItem;