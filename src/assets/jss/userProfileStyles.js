import {
  grayColor,
} from "./commonStyles";

const userProfileStyles = {
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },
  bold: {
    fontWeight: 700,
  },
  subText: {
    color: grayColor[0],
  },
  cardAvatar: {
    width: "75%",
    borderRadius: "50%",
    padding: 16
  },
};

export default userProfileStyles;
