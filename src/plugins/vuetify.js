/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */
import { VNumberInput } from 'vuetify/labs/VNumberInput'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  defaults: {
    VToolbar: {
      // VBtn: { variant: 'flat' },
    },
    components: {
      VNumberInput,
    },
  },
})
