import CloudLink from '@/components/cloud-link/cloud-link';
import { STRING_OPERATORS } from '@/libs/parse-property-filter';
import { PropertyFilterProperty } from '@cloudscape-design/collection-hooks';
import { TableProps } from '@cloudscape-design/components/table';
import routing from '@routing';
import { HostListItem } from '@/remote/host-remote';

// function formatDate(epochMs: number) : string {
  // return new Intl.DateTimeFormat().format(new Date(epochMs));
  // return new Date(epochMs).toLocaleString();
// }

export const HOST_LIST_COLUMN_DEFINITIONS: ReadonlyArray<TableProps.ColumnDefinition<HostListItem>> = [
  {
    id: 'hostname',
    header: 'Host',
    cell: (it) => <CloudLink href={routing.home.replace(':hostname', it.hostname)}>{it.hostname}</CloudLink>,
    sortingField: 'hostname',
    isRowHeader: true,
  },
  {
    id: 'lastSeenFormatted',
    header: 'Last Seen',
    cell: (it) => it.lastSeenFormatted,
    sortingField: 'lastSeenFormatted',
    isRowHeader: true,
  },
  {
    id: 'lastSeenAgeFormatted',
    header: 'Last Seen',
    cell: (it) => it.lastSeenAgeFormatted,
    sortingField: 'lastSeenAgeFormatted',
    isRowHeader: true,
  },
  {
    id: 'memorySizeFormatted',
    header: 'RAM',
    cell: (it) => it.memorySizeFormatted,
    sortingField: 'memorySizeFormatted',
    isRowHeader: true,
  },
  {
    id: 'swapSizeFormatted',
    header: 'Swap',
    cell: (it) => it.swapSizeFormatted,
    sortingField: 'swapSizeFormatted',
    isRowHeader: true,
  },
  {
    id: 'cpuCount',
    header: 'CPU',
    cell: (it) => it.cpuCount,
    sortingField: 'cpuCount',
    isRowHeader: true,
  },
  {
    id: 'rootFsSizeFormatted',
    header: 'Root Size',
    cell: (it) => it.rootFsSizeFormatted,
    sortingField: 'rootFsSizeFormatted',
    isRowHeader: true,
  },
  {
    id: 'rootFsPercentUsedFormatted',
    header: 'Root Used',
    cell: (it) => it.rootFsPercentUsedFormatted,
    sortingField: 'rootFsPercentUsedFormatted',
    isRowHeader: true,
  },
];

export const HOST_LIST_FILTERING_PROPERTIES: PropertyFilterProperty[] = [
  {
    propertyLabel: 'Hostname',
    key: 'hostname',
    groupValuesLabel: 'Hostname values',
    operators: STRING_OPERATORS,
  },
  {
    propertyLabel: 'Last Seen',
    key: 'lastSeenFormatted',
    groupValuesLabel: 'Last Seen values',
    operators: STRING_OPERATORS,
  },
  {
    propertyLabel: 'Last Seen Age',
    key: 'lastSeenAgeFormatted',
    groupValuesLabel: 'Last Age Seen values',
    operators: STRING_OPERATORS,
  },
];
