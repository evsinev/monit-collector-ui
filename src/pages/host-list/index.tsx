import { useQueryParams } from '@/hooks/use-query-params';
import {
  parsePropertyFilterQuery,
  PROPERTY_FILTERS_QUERY_PARAM_KEY,
  saveQueryFilter
} from '@/libs/parse-property-filter';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { ContentLayout, Header, PropertyFilter, StatusIndicator } from '@cloudscape-design/components';
import Table from '@cloudscape-design/components/table';
import { useRemoteHostList } from '@/remote/host-remote';
import { HOST_LIST_COLUMN_DEFINITIONS, HOST_LIST_FILTERING_PROPERTIES } from '@/pages/host-list/host-list-table-config';

export default function HostListPage() {
  const { data: unsortedHosts, isLoading } = useRemoteHostList('');
  const { getQueryParam, setQueryParam } = useQueryParams();
  const {
    items: apps,
    collectionProps,
    propertyFilterProps,
  } = useCollection(unsortedHosts?.hosts || [], {
    sorting: {},
    propertyFiltering: {
      filteringProperties: HOST_LIST_FILTERING_PROPERTIES,
      defaultQuery: parsePropertyFilterQuery(getQueryParam(PROPERTY_FILTERS_QUERY_PARAM_KEY)),
    },
  });

  return (
    <ContentLayout
      header={
        <Header
          info={isLoading && <StatusIndicator type="loading" />}
          description="Hosts"
        >
          Hosts
        </Header>
      }
    >
      <Table
        {...collectionProps}
        columnDefinitions={HOST_LIST_COLUMN_DEFINITIONS}
        items={apps}
        loading={isLoading}
        filter={
          <PropertyFilter
            {...propertyFilterProps}
            onChange={(event) => {
              saveQueryFilter(event, setQueryParam);
              propertyFilterProps.onChange(event);
            }}
          />
        }
      />
    </ContentLayout>
  );
}
