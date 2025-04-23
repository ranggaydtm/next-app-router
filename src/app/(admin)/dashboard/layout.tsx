export default function Layout({
  children,
  analytics,
  chart,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  chart: React.ReactNode;
}) {
  return (
    <div className="p-5 ">
      <div>{children}</div>
      <div className="w-full flex gap-6 mt-5">
        <div className="w-full">{analytics}</div>
        <div className="w-full">{chart}</div>
      </div>
    </div>
  );
}
