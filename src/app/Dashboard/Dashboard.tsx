import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { PfButton } from '../../component/PfButton';

const Dashboard: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Dashboard Page Title!</Title>
    <PfButton>Primary action button</PfButton>
  </PageSection>
)

export { Dashboard };
