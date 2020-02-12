import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const cardTheme = {
      '.transparent': {
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        elevation: null,
      },
      paddingBottom: 2,
      marginHorizontal: 2,
      flex: 1,
      borderWidth: variables.borderWidth,
    
      borderColor: variables.cardBorderColor,
      flexWrap: 'wrap',
      backgroundColor: variables.cardDefaultBg,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 3,
  };

  return cardTheme;
};