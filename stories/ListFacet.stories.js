import React from 'react';
import { storiesOf } from '@storybook/react';
import { Configure } from 'react-instantsearch/dom';

import Panel from 'components/Panel';
import { FacetsTemplate } from 'templates';
import { ListFacetDropdown, ListFacetCheckbox } from 'components/ListFacet';
import { withTests, Wrap } from './utils';

storiesOf('List Facet', module)
  .addDecorator(withTests('ListFacetDropdown', 'ListFacetCheckbox', 'Panel'))
  .addWithJSX('with dropdown', () => (
    <Wrap>
      <div style={{ maxWidth: '1170px', margin: '10px auto 0', display: 'flex' }}>
        <FacetsTemplate>
          <Panel header="Category">
            <ListFacetDropdown
              attributes={[
                'categories.lvl0',
                'categories.lvl1',
                'categories.lvl2'
              ]}
              limit={10}
              rootPath={null}
              separator=" > "
              showMore={false}
              showMoreLimit={20}
              showParentLevel
            />
          </Panel>
        </FacetsTemplate>
      </div>
      <Configure hitsPerPage={12} />
    </Wrap>
  ))
  .addWithJSX('with checkbox', () => (
    <Wrap>
      <div style={{ maxWidth: '1170px', margin: '10px auto 0', display: 'flex' }}>
        <FacetsTemplate>
          <Panel header="Materials">
            <ListFacetCheckbox
              attribute="materials"
              limit={10}
              rootPath={null}
              showMore
              showMoreLimit={20}
            />
          </Panel>
        </FacetsTemplate>
      </div>
      <Configure hitsPerPage={12} />
    </Wrap>
  ));
