export function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

export function compareUUID(senderId: string, checkingId: string): boolean {
  if (senderId !== checkingId) {
    return false;
  } else {
    return true;
  }
}
