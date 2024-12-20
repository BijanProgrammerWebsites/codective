import HeaderComponent from "@/components/header/header.component";

export default function BootcampsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
    </>
  );
}
