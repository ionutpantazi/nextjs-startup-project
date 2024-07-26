export const generateSpeakerCardGridLayout = (type: any,speaker: any) => {
  if (type == 'speaker') {
    if (speaker?.workshops?.length) {
      return 'grid-cols-6';
    } else return 'grid-cols-2';
  }
  if (type == 'delegate') {
    return 'grid-cols-4';
  }
}