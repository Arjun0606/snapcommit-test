// Authentication middleware
export function authenticate(token: string) {
  return token === 'valid';
}
