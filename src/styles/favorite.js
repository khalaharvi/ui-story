import colors from '@dering-hall/dh-theme/colors';

const { red, black } = colors;

const favorite = isFavorite => ({
  svg: {
    path: {
      fill: isFavorite ? red : 'none',
      stroke: isFavorite ? red : black
    }
  },
  ':hover': {
    svg: {
      path: {
        fill: isFavorite ? 'none' : red,
        stroke: isFavorite ? black : red
      }
    }
  }
});

export default favorite;
