// Screenshot 1: Database helpers
export function connectDB(url: string) {
  return { connected: true };
}

export function disconnectDB() {
  return { connected: false };
}
