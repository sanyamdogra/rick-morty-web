import { MockData } from "../models/common/types";

export const getEpisodeParams = (arr: string[]) => {
  return arr.reduce((acc: number[], str: string) => {
    const strArr = str.split("/");
    acc.push(parseInt(strArr[strArr.length - 1]));

    return acc;
  }, []);
};

export const mockFetchResponse = (data: MockData) => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  );
};
