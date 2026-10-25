interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'New Song 1',
    details: {
        author: 'New Author',
        year: 2021
    },
}
const song = 'New Song 1';
const { song:anothersong, songDuration:duration, details } = audioPlayer;

const {author} = details;

console.log('Song: ', song);
console.log('Another Song: ', anothersong);
console.log('Duration: ', duration);
console.log('Details: ',author);

export {}