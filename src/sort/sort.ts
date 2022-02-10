export function sort(list: number[]) {
  let sortedList = list;
  if(list.length > 1) {
    for(let limit=list.length-1; limit>0; limit--){
      for(let firstIndex=0; firstIndex < limit; firstIndex++) {
        let secondIndex = firstIndex + 1;
        if(list[firstIndex] > list[secondIndex]){
          const first = sortedList[secondIndex];
          const second = sortedList[firstIndex];
          sortedList[firstIndex] = first;
          sortedList[secondIndex] = second;
        }
      }
    }   
  }
  return sortedList;
}
