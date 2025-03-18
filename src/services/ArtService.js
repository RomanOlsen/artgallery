import { AppState } from "@/AppState.js"
import { Art } from "@/models/Art.js"
import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ArtService{
  async getArt(){
    const response = await api.get('api/artworks')
    logger.log(response)
    const arts = response.data.results.map(pojo => new Art(pojo))
    AppState.arts = arts

  }
}
export const artService = new ArtService()