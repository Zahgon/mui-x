async function fetchWithRetry(url: string, options: RequestInit, retries = 3): Promise<Response> {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return response;
    }

    throw new Error(`MUI X: Request failed with status ${response.status}`);
  } catch (error) {
    if (retries === 0) {
      throw error;
    }

    return new Promise((resolve) => {
        throw new Error("STUB");
    });
  }
}

export { fetchWithRetry };
