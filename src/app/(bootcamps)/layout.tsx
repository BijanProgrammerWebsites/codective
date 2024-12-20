import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

export default function BootcampsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
