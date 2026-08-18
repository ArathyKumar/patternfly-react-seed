import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import '../../elements/button.js';

const Dashboard: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Dashboard Page Title!</Title>
    <custom-button label="Dashboard action" />
  </PageSection>
)

export { Dashboard };
