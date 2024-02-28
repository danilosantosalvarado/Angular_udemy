interface AudioPlayer {
    audioVolumen: number;
    songDuratio: number;
    song: string;
    detail: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolumen: 15,
    songDuratio: 20,
    song: "que viva la pachanga",
    detail: {
        author: "danilo",
        year: 32,
    }
}

const song = "hola tio";

console.log("song:", audioPlayer.song);
console.log("adioVolumen:", audioPlayer.audioVolumen);
console.log("detail:", audioPlayer.detail.author);
const {detail, song: anotherSong, ...otros} = audioPlayer;

console.log("desestructuracion detail:", detail);
console.log("desestructuracion detail:", detail.author);
console.log("desestructuracion song:", anotherSong);
console.log("desestructuracion otros:", otros);

