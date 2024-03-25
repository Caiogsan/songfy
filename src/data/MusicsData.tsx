export class Music {
   name: string;
   singer: string;
   album: string;
   addHowLongAgo: string
   duration : string
   id: number
   musicLocation: number

   constructor(name:string, singer:string, album:string, addHowLongAgo:string, duration:string, id:number, musicLocation:number){
    this.name = name
    this.singer = singer
    this.album = album
    this.addHowLongAgo = addHowLongAgo
    this.duration = duration
    this.id = id
    this.musicLocation = musicLocation
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
        new Album("All Out 2020s", "The biggest songs of the 2020s", "102.130 curtidas", "150 músicas", "cerca de 7h", 4),
        new Album("One Thing At A Time", "The biggest songs of the 2020s", "102.130 curtidas", "150 músicas", "cerca de 7h", 5),
        new Album("VULTURES 1", "The biggest songs of the 2020s", "102.130 curtidas", "150 músicas", "cerca de 7h", 6),
        new Album("UTOPIA", "The biggest songs of the 2020s", "102.130 curtidas", "150 músicas", "cerca de 7h", 7),
        new Album("SOS", "The biggest songs of the 2020s", "102.130 curtidas", "150 músicas", "cerca de 7h", 8)

    ]
}

export class Musics {
    allMusics: Music[] = [
        new Music("reading", "herbstreit", "reading", "Há 1 semana", "2:41", 1, 1),
        new Music("Camping trip", "Collinsworthy", "camping trip", "Há 6 dias", "2:39", 1, 2),
        new Music("Water Flow", "MrAnthony, Dani Catalá, Banks", "Water Flow", "Há 6 dias", "2:34", 1, 3),
        new Music("Betino", "AHNAMUSICA, DJ MR GOSHI2", "Betino", "Há 6 dias", "2:08", 1, 4),
        new Music("Nightshade", "Blue Wednesday", "Nightshade", "Há 1 semana", "2:37", 1, 5),
        new Music("Laundry Tessomancy", "Violet Blanca", "Laundry Tessomancy", "Há 1 semana", "2:01", 1, 6),
        new Music("Your Eyes", "Akkoro", "Your Eyes", "Há 19 horas", "2:05", 1, 7),
        new Music("Hide and Seek", "C4C, Youthlogy", "Playing Outside EP", "Há 19 horas", "2:46", 1, 8),
        new Music("Moonglow", "Maajjyyn", "Moonglow", "Há 1 semana", "2:24", 1, 9),
        new Music("Elevator", "Cosmoo", "Elevator", "Há 19 horas", "1:11", 1, 10),
        new Music("Beautiful Things", "Benson Boone", "Beautiful Things", "26 de jan. de 2024", "3:00", 2, 1),
        new Music("Obsessed", "Olivia Rodrigo", "GUTS (spilled)", "Há 15 horas", "2:50", 2, 2),
        new Music("We can't be friends (wait for your love)", "Ariana Grande", "eternal sunshine", "Há 1 semana", "3:48", 2, 3),
        new Music("Greedy", "Tate McRae", "greedy", "24 de nov. de 2023", "3:30", 2, 4),
        new Music("TEXAS HOLD'EM", "Beyoncé", "TEXAS HOLD'EM", "12 de fev. de 2023", "3:55", 2, 5),
        new Music("Saturn", "SZA", "Saturn", "Há 4 semanas", "3:05", 2, 6),
        new Music("Stick Season", "Noah Kahan", "Stick Season", "Há 4 semanas", "3:02", 2, 7),
        new Music("Like a Dream", "Mauve", "Like a Dream", "27 de nov. de 2023", "2:31", 3, 1),
        new Music("Bloom", "Lucas Estrada, TWOPILOTS", "Bloom", "27 de nov. de 2023", "2:59", 3, 2),
        new Music("Stay by My Side", "SRTW, nourii, CLOSR", "Stay by My Side", "27 de nov. de 2023", "1:51", 3, 3),
        new Music("Live a Lie", "Thunder, ODBLU", "Live a Lie", "27 de nov. de 2023", "2:15", 3, 4),
        new Music("Almost a Lover", "NLSM, scanta rose", "Almost a Lover", "27 de nov. de 2023", "2:01", 3, 5),
        new Music("Oasis", "Adon", "Oasis", "27 de nov. de 2023", "2:59", 3, 6),
        new Music("Forever", "Roffe & Friends", "Forever", "27 de nov. de 2023", "3:37", 3, 7),
        new Music("Looking for You", "Novino", "Looking for You", "27 de nov. de 2023", "1:55", 3, 8),
        new Music("Save Me", "AEj, Marphill", "Save Me", "27 de nov. de 2023", "2:46", 3, 9),
        new Music("Deja vu", "Olivia Rodrigo", "SOUR", "8 de fev. de 2024", "3:35", 4, 1),
        new Music("Anti-Hero", "Taylor Swift", "Midnights", "8 de fev. de 2024", "3:20", 4, 2),
        new Music("Paint The Town Red", "Doja Cat", "Scariet", "8 de fev. de 2024", "3:50", 4, 3),
        new Music("Tusa", "KAROL G, Nicki Minaj", "KG0516", "8 de fev. de 2024", "3:21", 4, 4),
        new Music("Kill Bill", "SZA", "SOS", "8 de fev. de 2024", "2:33", 4, 5),
        new Music("Strangers", "Kenya Grace", "Strangers", "8 de fev. de 2024", "2:52", 4, 6),
        new Music("One Thing At A Time", "Morgan Wallen", "One Thing At A Time", "Há 2 semanas", "2:20", 5, 1),
        new Music("Days That End in Why", "Morgan Wallen", "One Thing At A Time", "Há 2 semanas", "2:58", 5, 2),
        new Music("Save Me", "AEj, Marphill", "Save Me", "27 de nov. de 2023", "2:46", 5, 3),
        new Music("Like a Dream", "Mauve", "Like a Dream", "27 de nov. de 2023", "2:31", 5, 4),
        new Music("Your Eyes", "Akkoro", "Your Eyes", "Há 19 horas", "2:05", 5, 5),
        new Music("Camping trip", "Collinsworthy", "camping trip", "Há 6 dias", "2:39", 5, 6),
        new Music("Stars", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "1:55", 6, 1),
        new Music("Keys To My Life", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "2:15", 6, 2),
        new Music("Paid", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "1:10", 6, 3),
        new Music("Talking", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "1:39", 6, 4),
        new Music("Back to Me", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "2:20", 6, 5),
        new Music("HoodRat", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "1:18", 6, 6),
        new Music("Do It", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "1:22", 6, 7),
        new Music("Burn", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "1:31", 6, 8),
        new Music("Fuk Sumn", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "1:48", 6, 9),
        new Music("VULTURES", "YS, Kanye West, Ty Dolla $ign", "VULTURES1", "Há 3 semanas", "1:35", 6, 10),
        new Music("Hyaena", "Travis Scott", "UTOPIA", "Há 4 semanas", "3:42", 7, 1),
        new Music("Thank God", "Travis Scott", "UTOPIA", "Há 4 semanas", "3:04", 7, 2),
        new Music("Modern Jam (feat. Teezo Touchdown)", "Travis Scott, Teezo Touchdown", "UTOPIA", "Há 4 semanas", "3:15", 7, 3),
        new Music("My Eyes", "Travis Scott", "UTOPIA", "Há 4 semanas", "4:11", 7, 4),
        new Music("God's Country", "Travis Scott", "UTOPIA", "Há 4 semanas", "2:07", 7, 5),
        new Music("Sirens", "Travis Scott", "UTOPIA", "Há 4 semanas", "3:24", 7, 6),
        new Music("Meltdown (feat. Drake)", "Travis Scott, Drake", "UTOPIA", "Há 4 semanas", "4:06", 7, 7),
        new Music("Fein (feat. Playboi Carti)", "Travis Scott, Playboi Carti", "UTOPIA", "Há 4 semanas", "3:42", 7, 8),
        new Music("I Know ?", "Travis Scott", "UTOPIA", "Há 4 semanas", "3:31", 7, 9),
        new Music("LOOOVE (feat. Kid Cudi)", "Travis Scott, Kid Cudi", "UTOPIA", "Há 4 semanas", "3:43", 7, 10),
        new Music("SOS", "SZA", "SOS", "Há 1 semana", "1:57", 8, 1),
        new Music("Kill Bill", "SZA", "SOS", "Há 1 semana", "2:33", 8, 2),
        new Music("Seak & Destroy", "SZA", "SOS", "Há 1 semana", "3:23", 8, 3),
        new Music("Low", "SZA", "SOS", "Há 1 semana", "3:01", 8, 4),
        new Music("Love Language", "SZA", "SOS", "Há 1 semana", "3:03", 8, 5),
        new Music("Blind", "SZA", "SOS", "Há 1 semana", "2:30", 8, 6)






    ]
}