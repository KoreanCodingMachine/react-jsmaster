const convertYData = (value: number) => Array.from({ length: 4 }, (_, i) => +((value + (i + 1)).toFixed(2)))

export default function toCandlestickData(target: Record<string, any>, { keys }: {
  keys?: string[]
} = {}) {
  return Object.entries(target)
    .filter(([k]) => keys ? keys.includes(k) : true)
    .reduce((acc, [x, v]) => [
        ...acc,
        {
          x,
          y: convertYData(+v)
        }
      ], [] as { x: string, y: number[] }[])

  // var json = {
  //   a: 1,
  //   b: 2
  // }

  // [['a', 1], ['b', 2]]

  // entry[0] == ['a', 1]
  // entry[1] == ['b', 2]

  // entry[0][0] == 'a'
  // entry[0][1] == 1
}