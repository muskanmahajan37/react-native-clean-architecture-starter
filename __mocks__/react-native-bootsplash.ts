export default {
  hide: jest.fn().mockResolvedValueOnce("hide"),
  show: jest.fn().mockResolvedValueOnce("show"),
  getVisibilityStatus: jest.fn().mockResolvedValue("hidden"),
}
