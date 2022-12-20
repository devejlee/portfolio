export const generateStaticParams = async () => {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
}

const fetchData = async (params: { id: string }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  const data = await res.json();
  return data;
}

interface PageProps {
  params?: any
  children?: React.ReactNode
}

const Page = async ({ params }: PageProps) => {
  const data = await fetchData(params);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-gray-100">{data.title}</h1>
      <p className="font-medium text-gray-400">{data.body}</p>
    </div>
  );
}

export default Page