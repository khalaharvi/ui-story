import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  Facebook as FacebookIcon,
  Pinterest as PinterestIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Print as PrintIcon,
  Download as DownloadIcon
} from 'icons';
import { createClassNames } from 'utils';
import ConversionButton from './ConversionButton';

export const cx = createClassNames('conversion-buttons');

const icons = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  pinterest: <PinterestIcon />,
  email: <EmailIcon />,
  print: <PrintIcon />,
  download: <DownloadIcon />
};

const ConversionButtons = ({ buttons, className, share }) => (
  <div className={classnames(cx(''), className)}>
    {
      buttons.map(button => (
        <ConversionButton
          key={`dh-conversion-button-${button.type}`}
          icon={icons[button.type]}
          type={button.type}
          onClick={button.onClick ? e => button.onClick(e, share) : undefined}
          url={button.url}
          attributes={button.attributes}
        />
      ))
    }
  </div>
);

ConversionButtons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['facebook', 'twitter', 'pinterest', 'email', 'print', 'download']).isRequired,
    onClick: PropTypes.func,
    label: PropTypes.string,
    url: PropTypes.string,
    attributes: PropTypes.object // eslint-disable-line react/forbid-prop-types
  })),
  className: PropTypes.string,
  share: PropTypes.shape({
    contentId: PropTypes.number.isRequired,
    customerId: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default ConversionButtons;
