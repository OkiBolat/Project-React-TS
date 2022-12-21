namespace PaginationUtils {
    export const getPaginationNumbers = (
        currentIndex: number,
        visibleNumbers: number,
        arrayLength: number
    ): (number | string)[] => {
        if (visibleNumbers >= arrayLength)
            return new Array(arrayLength).fill(0).map((_, index) => index + 1);

        const startIndex = currentIndex - Math.floor(visibleNumbers / 2);
        const pagination = new Array(visibleNumbers)
            .fill(0)
            .map((_, index) => startIndex + index)
            .filter((number) => number >= 0 && number < arrayLength);

        const finalPagination: (number | string)[] =
            pagination.length < visibleNumbers &&
            pagination[pagination.length - 1] !== arrayLength - 1
                ? pagination.concat(
                      new Array(visibleNumbers - pagination.length)
                          .fill(0)
                          .map((_, index) => pagination[pagination.length - 1] + index + 1)
                          .filter((number) => number < arrayLength)
                  )
                : pagination.length < visibleNumbers
                ? new Array(visibleNumbers - pagination.length)
                      .fill(0)
                      .map((_, index) => pagination[0] - index - 1)
                      .reverse()
                      .concat(pagination)
                : pagination;

        if (Math.floor(visibleNumbers / 2) >= currentIndex)
            finalPagination.splice(finalPagination.length - 1, 0, '...');
        else if (arrayLength - Math.round(visibleNumbers / 2) <= currentIndex)
            finalPagination.splice(1, 0, '...');
        else {
            finalPagination.splice(1, 0, '...');
            finalPagination.splice(visibleNumbers, 0, '...');
        }
        finalPagination.splice(0, 1, 0);
        finalPagination.splice(finalPagination.length - 1, 1, arrayLength - 1);
        return finalPagination;
    };
}

export default PaginationUtils;
