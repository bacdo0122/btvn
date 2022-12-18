export const addSlashPrefixToString = (str: string) => {
  if (str[0] === '/') {
    return str;
  }
  return '/' + str;
};
