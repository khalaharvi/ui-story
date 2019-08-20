import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorComponent from 'components/Error';

storiesOf('Error', module)
  .addWithJSX('default', () => (
    <ErrorComponent
      logo={<img src="http://placehold.it/150x30" alt="" />}
    />
  ))
  .addWithJSX('with link', () => (
    <ErrorComponent
      logo={<img src="http://placehold.it/150x30" alt="" />}
      link={<a href="/">Back to Homepage</a>}
    />
  ))
  .addWithJSX('with custom title', () => (
    <ErrorComponent
      logo={<img src="http://placehold.it/150x30" alt="" />}
      title="Oops, something went wrong!"
    />
  ))
  .addWithJSX('with custom message', () => (
    <ErrorComponent
      logo={<img src="http://placehold.it/150x30" alt="" />}
      message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, sequi. Dolor voluptatibus quidem sapiente adipisci aliquid accusantium placeat provident odio, quod minus praesentium inventore voluptas. Voluptates dolore repellat illum eveniet."
    />
  ))
  .addWithJSX('with custom copyright', () => (
    <ErrorComponent
      logo={<img src="http://placehold.it/150x30" alt="" />}
      copyright="My Company, LLC"
    />
  ))
  .addWithJSX('Dering Hall', () => (
    <ErrorComponent
      logo={
        <img
          src="https://dh-static-assets.s3.amazonaws.com/images/deringhall/fallback/logo.png"
          alt="Dering Hall"
        />
      }
      link={<a href="/">Back to Homepage</a>}
    />
  ));
