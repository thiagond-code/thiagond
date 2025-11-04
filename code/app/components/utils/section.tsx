export const MainSection = ({
  children,
  style
}: Readonly<{
  children: React.ReactNode;
  style?: string
}>) => {
  return <section className={style}>{children}</section>
}