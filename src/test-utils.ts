export const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
  save: jest.fn(),
}));
