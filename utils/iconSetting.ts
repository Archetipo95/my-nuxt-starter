import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export const resolveIcons = () => {
  return IconsResolver({
    prefix: false,
    customCollections: ['icons'],
  })
}

export const mapIcons = () => {
  return Icons({
    customCollections: {
      icons: FileSystemIconLoader('./icons', (svg) => {
        const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg)
        if (!viewBox) return svg
        const w = viewBox?.[1]
        const h = viewBox?.[2]
        svg = svg.replace(/width=".*?"/, `width="${w}" `)
        svg = svg.replace(/height=".*?"/, `height="${h}" `)
        return svg
      }),
    },
  })
}
