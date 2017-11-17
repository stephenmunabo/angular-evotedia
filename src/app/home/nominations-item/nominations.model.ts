export class Nomination {
    public artistName: string;
    public categoryName: string;
    public nominatedWorkTitle: string;
    public youtubeVideoId: string;
    public imagePath: string;

    constructor(artistName: string, categoryName: string, nominatedWorkTitle: string, youtubeVideoId: string, imagePath: string){
        this.artistName = artistName;
        this.categoryName = categoryName;
        this.nominatedWorkTitle = nominatedWorkTitle;
        this.youtubeVideoId = youtubeVideoId;
        this.imagePath = imagePath;
    }
}