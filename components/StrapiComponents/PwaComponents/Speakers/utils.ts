export const generateSpeakerCardGridLayout = (speaker: any) => {
  if (speaker?.workshops?.length) {
    return 'grid-cols-6';
  } else return 'grid-cols-2';
}