// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source
Vue.component('player', {
  props: ['movie'],

  template: `
  <div>
      <h3 class="movie-title">{{ movie.videotitle }}</h3>
      <video :src="'video/' + movie.vidsource" controls autoplay></video>
      <div class="movie-details">
        <p>{{ movie.videodescription }}</p>
      </div>
  </div>
  `
})

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)

    user: {
      isLoggedIn: true,
      settings: {}
    },

    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    movie: {
      videotitle: "Video Title",
      vidsource: "",
      videodescription: "Video Description",
    },
    
    showDetails: false
  },

  created: function() {
    // run fetch call and get user data
    console.log('Created lifecycle')
    this.getUserData();
  },

  methods: {
    getUserData() {
      const url = './includes/index.php?getUser=1'; // fetch call to get user from db (endpoint)

      fetch(url) // get data from db
      .then(res => res.json()) // translate json to plain object
      .then(data => { // use plain data object
        console.log(data); // log to console for testing

        this.user.settings = data[0]; // put the db data into vue
      })
      .catch((error) => console.error(error))
    },

    setUserPrefs() {
      // This is the preferences control, hit the API when ready to use component
      console.log('Set user prefs here')
    },

    userLogin() {
      // Call the login route, or load login component

      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    showMovieDetails({name, vidsource, description}) {
      this.movie.videotitle = name;
      this.movie.videodescription = description;
      this.movie.vidsource = vidsource;

      this.showDetails = true;
    }
  }
});
