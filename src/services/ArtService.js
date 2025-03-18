import { AppState } from "@/AppState.js"
import { Art } from "@/models/Art.js"
import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ArtService{
 async admire(id) {
  const response = await api.post(`api/artworks/${id}/admire`)
  logger.log(response)
  
  }
  async changePage(direction) {
    const newPage = AppState.page + direction
    const response = await api.get(`api/artworks?page=${newPage}`)

    logger.log(response)
    const arts = response.data.artworks.map(pojo => new Art(pojo))
    AppState.arts = arts
    AppState.page = newPage
    
  }
  async getArt(){
    const response = await api.get('api/artworks')
    logger.log(response)
    const arts = response.data.artworks.map(pojo => new Art(pojo))
    AppState.arts = arts
    AppState.page = response.data.page
    AppState.maxPages = response.data.pages

  }

  

}
export const artService = new ArtService()