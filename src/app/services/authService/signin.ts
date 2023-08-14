import { sleep } from '@app/utils/sleep';
import { httpClient } from '../httpClient';

export interface SigninParams {
  email: string;
  password: string;
}

interface SigninResponse {
  token: string;
}

export async function signin(params: SigninParams) {
  await sleep();
  const { data } = await httpClient.post<SigninResponse>('/auth/signin', params);

  return data;
}
