export default () => {
  const helloWorld = ref('Hello, World!')

  const route = useRoute()

  if (route?.path?.startsWith('/page')) {
    console.log('Hello, Page!')
  }

  return { helloWorld }
}
