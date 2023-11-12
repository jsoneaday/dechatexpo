export default function log(
  msg: string,
  obj: any | undefined = undefined,
): void {
  console.log('current NODE_ENV', process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    console.log(msg, obj || '');
  }
}
