import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useLogin = () => {
  return useMutation({
    mutationFn: (values: { login: string; password: string }) =>
      request
        .post('/stores/login', values)
        .then((res) => res.data),
  });
};
