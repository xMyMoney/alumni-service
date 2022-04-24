export function formatActiveTime(time: Date) {
  const date:Date = new Date(time)
  const now = Date.now()

  // @ts-ignore
  const diff = (now - date) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }

  let y = date.getFullYear();
  let MM: string | number = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d: string | number = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h: string | number = date.getHours();
  h = h < 10 ? "0" + h : h;
  let m: string | number = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  let s = date.getSeconds();
  return y + "-" + MM + "-" + d + " " + h + ":" + m;
}

export function formatInfoTime(time:Date) {
  const date:Date = new Date(time)
  return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getMinutes()
}
