export default function StatCard({ title, value, hint, children }) {
  return (
    <div className='bg-white rounded-2xl shadow-sm border p-4'>
      <div className='text-sm text-gray-500'>{title}</div>
      <div className='text-2xl font-bold mt-1'>{value}</div>
      {hint && <div className='text-xs text-gray-400 mt-1'>{hint}</div>}
      {children && <div className='mt-3'>{children}</div>}
    </div>
  );
}
