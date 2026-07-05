import { LightningElement, api } from 'lwc';
export default class Movietiles extends LightningElement {
    @api movie;
    @api selectedMovieId;

    clickHandler(e) {
     const evnt = new CustomEvent("selectedmovie",{
         detail:this.movie.imdbID
     });

     this.dispatchEvent(evnt)
     console.log(evnt);
    }

    get tileSelected() {
        return this.selectedMovieId === this.movie.imdbID ? "tile selected slds-grid" : "tile slds-grid";
    }

}