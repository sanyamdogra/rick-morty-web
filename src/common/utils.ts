export const getEpisodeParams = (arr: string[]) => {
  return arr.reduce((acc: number[], str: string) => {
    const strArr = str.split("/");
    acc.push(parseInt(strArr[strArr.length - 1]));

    return acc;
  }, []);
};
