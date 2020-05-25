import { serializeQueryParams } from './queryHelpers';

export const API_URL = 'http://localhost:3000/api';

export const getBooksUrl = params => `${API_URL}/books/?${serializeQueryParams(params)}`;

export const getBookUrl = bookId => `${API_URL}/books/${bookId}`;

export const getFileUrl = id => `${API_URL}/files/${id}`;

export const getTopBooksUrl = params => `${API_URL}/books/tops?${serializeQueryParams(params)}`;

export const getLastBooksUrl = params => `${API_URL}/books/last?${serializeQueryParams(params)}`;
