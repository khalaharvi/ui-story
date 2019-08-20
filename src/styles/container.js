import mq from '@dering-hall/dh-theme/breakpoints';

const container = {
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '20px',
  paddingRight: '20px',

  [mq.small]: {
    maxWidth: '690px',
    paddingLeft: 0,
    paddingRight: 0
  },

  [mq.medium]: {
    maxWidth: '930px'
  },

  [mq.large]: {
    maxWidth: '1170px'
  }
};

export default container;
