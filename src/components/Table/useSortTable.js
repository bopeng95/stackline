import { useState, useMemo } from 'react';

const useSortTable = (items, init = {}) => {
  const [config, setConfig] = useState(init);
  const sortedList = [...items];

  const sortFunc = (a, b) => {
    const { key, direction } = config;
    const isDate = key === 'weekEnding';
    const diff = isDate
      ? new Date(a[key]).getTime() - new Date(b[key]).getTime()
      : a[key] - b[key];
    const condition = direction === 'asc';
    if (diff < 0) return condition ? -1 : 1;
    if (diff > 0) return condition ? 1 : -1;
    return 0;
  };

  useMemo(() => {
    if (config.key) sortedList.sort(sortFunc);
  }, [items, config]);

  const startSort = (key) => {
    const condition = config.key === key && config.direction === 'asc';
    const direction = condition ? 'dec' : 'asc';
    setConfig({ key, direction });
  };

  return [sortedList, startSort, config];
};

export default useSortTable;
