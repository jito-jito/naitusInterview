import { Injectable } from '@angular/core';
import { Episode, Character } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  validatePagination(totalData: number, currentData: number) {
    const isFirstLoad = totalData === 0
    const areDataAvailable = currentData !== totalData

    return isFirstLoad || areDataAvailable
  }

  nextPage(totalData: Episode[] | Character[], currentData: Episode[] | Character[], limit: number) {
    const isValidPagination = this.validatePagination(totalData.length, currentData.length)

    if(isValidPagination) {
      const data: Episode[] | Character[] = [] 
      let dataAdded = 0

      for(let i = 0; i < limit; i++) {
        if(totalData.length > currentData.length + i) {
         // eslint-disable-next-line  @typescript-eslint/no-explicit-any
          data.push(totalData[i + currentData.length] as any) 
          dataAdded ++
        } else {
          break
        }
      }
      
      return {
          data: data,
          dataAdded: dataAdded,
      }
      
    } else {
      return null
    }
      
  }
}
