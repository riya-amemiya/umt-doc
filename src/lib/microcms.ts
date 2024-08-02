import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type ProfileResponse = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  birthday: string;
};

export const getProfile = async (queries?: MicroCMSQueries) => {
  return await client.get<ProfileResponse>({ endpoint: "profile", queries });
};
