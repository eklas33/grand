export const ROLE_PERMISSIONS = {
  super_admin: ['*'],

  admin: [
    'manage_users',
    'approve_resources',
    'view_reports'
  ],

  moderator: [
    'approve_resources'
  ],

  researcher: [
    'upload_resource'
  ],

  public_user: []
}
export function hasPermission(role: string, permission: string) {
  const permissions = ROLE_PERMISSIONS[role] || []

  if (permissions.includes('*')) return true

  return permissions.includes(permission)
}
