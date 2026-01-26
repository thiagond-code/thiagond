const gridAttr = 'sm:grid gap-12'

const gridCols = {
  2: `${gridAttr} grid-cols-2`,
  3: `${gridAttr} grid-cols-3`,
  4: `${gridAttr} grid-cols-4`
}

export const Layout = ({
  children,
  cols,
  style
}: Readonly<{
  children: React.ReactNode;
  cols?: keyof typeof gridCols;
  style?: string
}>) => {
  return <section className={`flex flex-col items-center ${cols && gridCols[cols]} ${style}`}>{children}</section>
}