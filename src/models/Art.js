export class Art{
  constructor(d){
    this.id = d.id
    this.image = d.imgUrls.regular
    this.description = d.description
    this.slug = d.slug
    this.color = d.color
    this.admirers= d.admirers
    this.admirersNames = d.admirers.name
    this.admirersPictures = d.admirers.map(profile => profile.picture)
    this.admirersAmount = d.admirers
  }
}