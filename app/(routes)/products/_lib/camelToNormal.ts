const camelToNormal = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? " " : "") + $.toLowerCase()
  );

export default camelToNormal;
