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

  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.base,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: colors.blue.darken2,
        accent: colors.grey.base,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    },
    options: {
      customProperties: true
    }
  }
}
