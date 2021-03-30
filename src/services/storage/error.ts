export class StorageServiceError extends Error {}

export class CannotGetStorageDataError extends StorageServiceError {}

export class CannotSetStorageDataError extends StorageServiceError {}

export class CannotRemoveStorageDataError extends StorageServiceError {}
