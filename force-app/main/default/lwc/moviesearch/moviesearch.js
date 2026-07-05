import { LightningElement } from 'lwc';

const DELAY = 600;

export default class Moviesearch extends LightningElement {
    value = 'inProgress';
    selectedType = "";
    selectedSearch = "";
    selectedPageNo = "";
    loading = false;
    searchResult = []; // Initialize as an empty array
    delayTimeout;
    selectedMovie = "";

    get options() {
        return [
            { label: 'None', value: '' },
            { label: 'Movie', value: 'movie' },
            { label: 'Series', value: 'series' },
            { label: 'Episode', value: 'episode' },
        ];
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.loading = true;

        if (name === 'type') {
            this.selectedType = value;
        } else if (name === 'search') {
            this.selectedSearch = value;
        } else if (name === 'pageno') {
            this.selectedPageNo = value;
        }

        // Debouncing Technique
        clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => {
            this.searchMovie();
        }, DELAY);
    }

    async searchMovie() {
        const url = `https://www.omdbapi.com/?s=${this.selectedSearch}&type=${this.selectedType}&page=${this.selectedPageNo}&apikey=98340fc7`;
        
        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log("Movie Search Data", data);
            this.loading = false;

            if (data.Response === "True") {
                this.searchResult = data.Search;
            } else {
                this.searchResult = []; // Clear results if none found
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            this.loading = false;
            this.searchResult = []; // Ensure searchResult is an empty array on error
        }
    }

    get displaySearchResult() {
        return this.searchResult && this.searchResult.length > 0;
    }

    moveSelectedHandler(e) {
        this.selectedMovie = e.detail;
        console.log(this.selectedMovie);
    }
}