/**
 * Permis.io Node.js SDK
 *
 * @packageDocumentation
 *
 * @example
 * ```typescript
 * import { Permis } from 'permisio';
 *
 * // Simplest usage - project and environment are auto-detected from API key
 * const permis = new Permis({
 *   token: 'permis_key_your_api_key_here',
 * });
 *
 * // Or with explicit project and environment IDs
 * const permis2 = new Permis({
 *   token: 'permis_key_your_api_key_here',
 *   projectId: 'your-project-id',
 *   environmentId: 'your-environment-id',
 * });
 *
 * // Check permissions
 * const allowed = await permis.check({
 *   user: 'user@example.com',
 *   action: 'read',
 *   resource: 'document',
 * });
 *
 * if (allowed) {
 *   console.log('Access granted!');
 * } else {
 *   console.log('Access denied!');
 * }
 * ```
 */

// Main SDK class
export { Permis, createPermis } from "./permis";
export type { IPermisApi } from "./permis";

// Configuration
export { resolveConfig, DEFAULT_CONFIG, MutableConfig } from "./config";
export type { IPermisConfig, IResolvedConfig } from "./config";

// API clients
export {
  BaseApiClient,
  PermisApiError,
  UsersApi,
  TenantsApi,
  RolesApi,
  ResourcesApi,
  RoleAssignmentsApi,
} from "./api";
export type { ILogger } from "./api";

// Types
export type {
  // User types
  IUser,
  IUserCreate,
  IUserUpdate,
  IUserRead,
  IUserList,
  // Tenant types
  ITenant,
  ITenantCreate,
  ITenantUpdate,
  ITenantRead,
  ITenantList,
  // Role types
  IRole,
  IRoleCreate,
  IRoleUpdate,
  IRoleRead,
  IRoleList,
  // Resource types
  IResource,
  IResourceCreate,
  IResourceUpdate,
  IResourceRead,
  IResourceList,
  IResourceInstance,
  IResourceInstanceCreate,
  IResourceInstanceRead,
  // Role assignment types
  IRoleAssignment,
  IRoleAssignmentCreate,
  IRoleAssignmentRead,
  IRoleAssignmentRemove,
  IRoleAssignmentList,
  IBulkRoleAssignment,
  IBulkRoleAssignmentResponse,
  // Check types
  ICheckRequest,
  ICheckUser,
  ICheckResource,
  ICheckResponse,
  IBulkCheckRequest,
  IBulkCheckResponse,
  IGetPermissionsRequest,
  IGetPermissionsResponse,
  // Common types
  IPaginationParams,
  IListParams,
  IApiError,
  IApiResponse,
  IApiKeyScope,
} from "./types";

// Default export
export { Permis as default } from "./permis";
