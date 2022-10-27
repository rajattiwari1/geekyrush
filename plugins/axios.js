export default function ({ $axios, app }) {

  let apiUrl = `${window.location.protocol}//${window.location.hostname}:5000`
  // $axios.defaults.baseURL = apiUrl

  $axios.onError(err => {

    if (err.response) {

      if(err.response.status === 401) {
      
        app.$auth.logout()
  
      }
      
    } else {

      throw `Error: API server is not reachable`

    }
    
  })

}