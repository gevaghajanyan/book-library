export class FetchData {
  constructor(initialState = null) {
    this.isLoading = true;
    this.data = initialState;
    this.errorMessage = null;
  }

  fetching() {
    this.isLoading = true;
    this.errorMessage = null;
    return { ...this };
  }

  fetched(result) {
    this.isLoading = false;
    this.errorMessage = null;
    this.data = result;
    return { ...this };
  }
}