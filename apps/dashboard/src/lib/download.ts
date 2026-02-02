export async function downloadFile(url: string, filename: string) {
  // Web mode - normal download
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  return;
}
