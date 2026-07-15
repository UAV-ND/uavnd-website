export const getPublicVideo = (filename: string) =>
  `${process.env.PUBLIC_URL}/videos/${filename}`;
