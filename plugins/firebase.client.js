import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'

export default ({ app }, inject) => {
  inject('firebase', {
    app: null,
    analytics: null,
    perf: null,

    init () {
      const firebaseConfig = {
        apiKey: 'AIzaSyDWFz70h6OmtPL97f3_1LsZYFep_SV5rd0',
        authDomain: 'portfolio-5de8d.firebaseapp.com',
        projectId: 'portfolio-5de8d',
        storageBucket: 'portfolio-5de8d.appspot.com',
        messagingSenderId: '729208972413',
        appId: '1:729208972413:web:02bc1cd169f3ba3323fd14',
        measurementId: 'G-ZRLDEHS9CE'
      }

      // Initialize Firebase
      this.app = initializeApp(firebaseConfig)
      this.analytics = getAnalytics(this.app)
      this.perf = getPerformance(this.app)
    }
  })

  app.$firebase.init()
}
