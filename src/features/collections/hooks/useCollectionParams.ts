import { appColors, appImages } from '~config';

enum CollectionType {
  easy,
  mid,
  hard,
}

const getCollectionType = (numberOfWords: number) => {
  const isEasy = numberOfWords <= 20;
  const isMid = numberOfWords <= 80 && numberOfWords > 20;
  const isHard = numberOfWords > 80;

  if (isEasy) {
    return CollectionType.easy;
  }
  if (isMid) {
    return CollectionType.mid;
  }
  if (isHard) {
    return CollectionType.hard;
  }

  return CollectionType.easy;
};

const getPrimaryColor = (collectionType: CollectionType) => {
  if (collectionType === CollectionType.easy) {
    return appColors.tintDark;
  }

  if (collectionType === CollectionType.mid) {
    return appColors.orangeDark;
  }

  return appColors.redDark;
};
const getSecondaryColor = (collectionType: CollectionType) => {
  if (collectionType === CollectionType.easy) {
    return appColors.tint;
  }

  if (collectionType === CollectionType.mid) {
    return appColors.orangeRegular;
  }

  return appColors.redRegular;
};
const getIcon = (collectionType: CollectionType) => {
  if (collectionType === CollectionType.easy) {
    return appImages.ufo;
  }
  if (collectionType === CollectionType.mid) {
    return appImages.duck;
  }

  return appImages.ufo;
};

export const useCollectionParams = (
  numberOfWords: number,
): [string, string, number, CollectionType] => {
  const collectionType = getCollectionType(numberOfWords);
  const primaryColor = getPrimaryColor(collectionType);
  const secondaryColor = getSecondaryColor(collectionType);
  const icon = getIcon(collectionType);

  return [primaryColor, secondaryColor, icon, collectionType];
};
