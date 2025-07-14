import { apiRequest } from '@/libs/api-request';
import useSWR from 'swr';

export type HostListResponse = {
  hosts: HostListItem[];
};

export type HostListItem = {
  hostname: string;
  lastSeenFormatted: string;
  lastSeenAgeFormatted: string;
  lastSeenMs: number;
  cpuCount: number;
  memorySizeFormatted: string;
  swapSizeFormatted: string;
  rootFsSizeFormatted: string;
  rootFsPercentUsedFormatted: string;
};

export type AppViewResponse = {
  hostname: string;
  lastSeenFormatted: string;
  lastSeenAgeFormatted: string;
};

export function useRemoteHostList(filter: string) {
  return useSWR(`/host/list/${filter}`, (url) => apiRequest<HostListResponse>({ url, params: { filter } }), {
    keepPreviousData: true,
  });
}

// export function useRemoteAppView(arn: string) {
//   return useSWR(`/app/view/${arn}`, (url) => apiRequest<AppViewResponse>({ url, params: { arn } }), {
//     keepPreviousData: true,
//   });
// }
