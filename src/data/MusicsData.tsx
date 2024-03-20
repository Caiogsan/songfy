export class Music {
   name: string;
   singer: string;
   album: string;
   addHowLongAgo: string
   duration : string
   id: number

   constructor(name:string, singer:string, album:string, addHowLongAgo:string, duration:string, id:number){
    this.name = name
    this.singer = singer
    this.album = album
    this.addHowLongAgo = addHowLongAgo
    this.duration = duration
    this.id = id
   }
}

export class Album {
    name: string;
    description: string;
    howManyLikes: string
    howManyMusics : string
    duration: string
    id: number
 
    constructor(name:string, description:string, howManyLikes:string, howManyMusics:string, duration:string, id:number){
     this.name = name
     this.description = description
     this.howManyLikes = howManyLikes
     this.howManyMusics = howManyMusics
     this.duration = duration
     this.id = id
    }
 }

 export class Albuns {
    allAlbuns: Album[] = [
        new Album("lofi beats", "chill beats, lofi vibes, new tracks every week...", "5.263.196 curtidas", "750 músicas", "mais de 24h", 1),
        new Album("Today's Top Hits", "Dua Lipa is on top of the Hottest 50!", "34.645.196 curtidas", "50 músicas", "cerca de 2h 30min", 2),
        new Album("Chillout Lounge", "Just lean back and enjoy relaxed beats", "1.898.354 curtidas", "100 músicas", "cerca de 4h 30min", 3),
        new Album("All Out 2020s", "The biggest songs of the 2020s", "102.130 curtidas", "150 músicas", "cerca de 7h", 4)
    ]
}

export class Musics {
    lofi_beats: Music[] = [
        new Music("lofi beats", "Collinsworthy", "camping trip", "Há 6 dias", "2:39", 1),
        new Music("Camping trip", "Collinsworthy", "camping trip", "Há 6 dias", "2:39", 2),
        new Music("Water Flow", "MrAnthony, Dani Catalá, Banks", "Water Flow", "Há 6 dias", "2:34", 3)
    ]
}