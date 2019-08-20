import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import omit from 'lodash.omit';

Enzyme.configure({ adapter: new Adapter() });

// omit 'theme' prop in JSON snapshots!
expect.addSnapshotSerializer(createSerializer({
  map: json => ({
    ...json,
    props: omit(json.props, 'theme')
  })
}));

// Google Map API
window.google = {
  maps: {
    places: {
      AutocompleteService: class {},
      PlacesServiceStatus: {
        OK: 'OK'
      }
    },
    Geocoder: class {},
    GeocoderStatus: {
      OK: 'OK'
    }
  }
};
