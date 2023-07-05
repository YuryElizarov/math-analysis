export function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  });
}

export async function scrollToElement(href: string, isRedirect = false) {
  if (isRedirect) {
    await sleep(300)
  }
  const id = href.split('#')[1]
  if (id) {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop;
      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }
}
