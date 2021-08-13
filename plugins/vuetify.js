import colors from 'vuetify/es5/util/colors'
import ru from 'vuetify/es5/locale/ru'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  icons: {
    iconfont: 'mdi', // default
    values: {
    }
  },
  lang: {
    locales: { ru },
    current: 'ru'
  },

  customVariables: ['~/assets/scss/variables.scss'],

  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: '#1652F0',
        accent: '#1652F0',
        secondary: '#F9F9F9',
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.red.accent4,
        success: '#05B169'
      }
    },
    options: {
      customProperties: true
    }
  }
}
