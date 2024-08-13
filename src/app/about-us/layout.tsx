export default function AboutUsLayout({
                                          children,
                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
        {children}
            <h1>About us Layout</h1>
        </div>
    );
}
