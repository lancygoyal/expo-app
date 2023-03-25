export type AuthTokenHook = {
  authToken: string | undefined | null;
  error: string | Error | undefined | unknown;
};

const useAuthToken = async (): Promise<AuthTokenHook> => {
  try {
    const token = "";
    if (!token) {
      throw new Error("No token");
    }
    return {
      authToken: token,
      error: undefined,
    };
  } catch (e) {
    return {
      authToken: null,
      error: e,
    };
  }
};

export default useAuthToken;
