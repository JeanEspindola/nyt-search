export const listAddKey = (array: Array<never>) => {
  let id = 1
  for (let it = 0; it < array.length; it += 1) {
    const item = array[it]
    // @ts-ignore
    item.id = id
    id += 1
  }

  return array
}
